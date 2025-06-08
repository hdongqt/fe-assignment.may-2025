import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  setFormData,
  resetFormData,
  setSchema,
} from "@/store/features/formSlice";
import type { RootState } from "@/store";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import JsonFormRenderer from "@/pages/json-form/json-form-renderer";

const dataExample = JSON.stringify(
  {
    name: {
      type: "string",
      title: "Họ và tên",
      placeholder: "Nhập họ và tên",
    },
    age: {
      type: "number",
      title: "Tuổi",
      placeholder: "Nhập tuổi",
    },
    address: {
      type: "string",
      title: "Địa chỉ",
      format: "vietnamese-address",
    },
  },

  null,
  2
);

export default function JsonForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.data);
  const reduxSchema = useSelector((state: RootState) => state.form.schema);
  const [schemaInput, setSchemaInput] = useState(dataExample);

  const [isSchemaValid, setIsSchemaValid] = useState(false);
  const [resetAddressKey, setResetAddressKey] = useState(0);

  useEffect(() => {
    if (reduxSchema) {
      setSchemaInput(JSON.stringify(reduxSchema, null, 2));
      setIsSchemaValid(true);
    }
  }, [reduxSchema]);

  const handleSchemaSubmit = () => {
    try {
      const parsedSchema = JSON.parse(schemaInput);
      dispatch(setSchema(parsedSchema));
      setIsSchemaValid(true);
    } catch {
      toast.error("Invalid JSON schema");
    }
  };

  const loadExample = () => {
    setSchemaInput(dataExample);
  };

  const handleFormChange = (key: string, value: string | number) => {
    dispatch(setFormData({ ...formData, [key]: value }));
  };

  const handleReset = () => {
    dispatch(resetFormData());
    dispatch(setSchema(null));
    setIsSchemaValid(false);
    setSchemaInput(dataExample);
  };

  return (
    <div className="w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>JSON Schema Form</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>JSON Schema</Label>
              <Textarea
                value={schemaInput}
                onChange={(e) => {
                  setSchemaInput(e.target.value);
                  setIsSchemaValid(false);
                }}
                className="h-64 font-mono"
              />
              <div className="flex gap-2">
                <Button onClick={handleSchemaSubmit} className="flex-1">
                  Submit Schema
                </Button>
                <Button
                  onClick={loadExample}
                  variant="outline"
                  className="flex-1"
                >
                  Load Example
                </Button>
                <Button
                  onClick={handleReset}
                  variant="destructive"
                  className="flex-1"
                >
                  Reset All
                </Button>
              </div>
            </div>

            {isSchemaValid && reduxSchema ? (
              <div className="flex-1 space-y-4">
                <JsonFormRenderer
                  schema={reduxSchema}
                  formData={formData}
                  onChange={handleFormChange}
                  resetAddressKey={resetAddressKey}
                />
                <Button
                  onClick={() => {
                    const emptyFormData = Object.keys(reduxSchema).reduce(
                      (acc, key) => {
                        acc[key] = "";
                        return acc;
                      },
                      {} as Record<string, string | number>
                    );
                    dispatch(setFormData(emptyFormData));
                    setResetAddressKey((prev) => prev + 1);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Reset Form Data
                </Button>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Please enter a valid JSON schema and submit.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center">
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
