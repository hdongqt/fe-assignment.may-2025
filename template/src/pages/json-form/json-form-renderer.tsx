import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

type FormValue = string | number;

interface SchemaProperty {
  type: string;
  title: string;
  format?: string;
  placeholder?: string;
}
interface JsonFormRendererProps {
  schema: Record<string, SchemaProperty>;
  formData: Record<string, FormValue>;
  onChange: (key: string, value: FormValue) => void;
  resetAddressKey: number;
}

interface VietnameseAddressInputProps {
  value: string;
  onChange: (value: string) => void;
}

interface Province {
  id: string;
  name: string;
}

interface District {
  id: string;
  name: string;
}

interface Districts {
  [key: string]: District[];
}

const provinces: Province[] = [
  { id: "hcm", name: "Hồ Chí Minh" },
  { id: "qt", name: "Quảng Trị" },
  { id: "hn", name: "Hà Nội" },
  { id: "dn", name: "Đà Nẵng" },
];

const districts: Districts = {
  hcm: [
    { id: "q1", name: "Quận 1" },
    { id: "q2", name: "Quận 2" },
    { id: "q3", name: "Quận 3" },
    { id: "q3", name: "Quận 4" },
    { id: "q3", name: "Quận 5" },
  ],
  qt: [
    {
      id: "hl",
      name: "Hải Lăng",
    },
    {
      id: "tx",
      name: "Tx Quảng Trị",
    },
  ],
  hn: [
    { id: "hbt", name: "Hai Bà Trưng" },
    { id: "dda", name: "Đống Đa" },
    { id: "cg", name: "Cầu Giấy" },
  ],
  dn: [
    { id: "tk", name: "Thanh Khê" },
    { id: "st", name: "Sơn Trà" },
    { id: "hch", name: "Hải Châu" },
    { id: "nhs", name: "Ngũ Hành Sơn" },
  ],
};

const VietnameseAddressInput: React.FC<VietnameseAddressInputProps> = ({
  value,
  onChange,
}) => {
  const [province, setProvince] = useState(() =>
    value ? value.split("|")[0] || "" : ""
  );
  const [district, setDistrict] = useState(() =>
    value ? value.split("|")[1] || "" : ""
  );
  const [street, setStreet] = useState(() =>
    value ? value.split("|")[2] || "" : ""
  );

  useEffect(() => {
    const [p, d, s] = value?.split("|") || [];
    setProvince(p || "");
    setDistrict(d || "");
    setStreet(s || "");
  }, [value]);

  const handleChange = (
    type: "province" | "district" | "street",
    val: string
  ) => {
    let newValue = "";
    switch (type) {
      case "province":
        setProvince(val);
        setDistrict("");
        setStreet("");
        newValue = `${val}||`;
        break;
      case "district":
        setDistrict(val);
        newValue = `${province}|${val}|${street}`;
        break;
      case "street":
        setStreet(val);
        newValue = `${province}|${district}|${val}`;
        break;
    }
    onChange(newValue);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label>Tỉnh / Thành phố</Label>
        <Select
          value={province}
          onValueChange={(val) => handleChange("province", val)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Chọn tỉnh/thành phố" />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((p) => (
              <SelectItem key={p.id} value={p.id}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Phường / Xã</Label>
        <Select
          value={district}
          onValueChange={(val) => handleChange("district", val)}
          disabled={!province}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Chọn phường/xã" />
          </SelectTrigger>
          <SelectContent>
            {province &&
              districts[province]?.map((d) => (
                <SelectItem key={d.id} value={d.id}>
                  {d.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Đường và số nhà</Label>
        <Input
          value={street}
          onChange={(e) => handleChange("street", e.target.value)}
          placeholder="Nhập đường và số nhà"
          disabled={!district}
        />
      </div>
    </div>
  );
};

const JsonFormRenderer: React.FC<JsonFormRendererProps> = ({
  schema,
  formData,
  onChange,
  resetAddressKey,
}) => {
  const renderField = (
    field: SchemaProperty,
    value: FormValue,
    onChange: (value: FormValue) => void
  ) => {
    switch (field.type) {
      case "string":
        if (field.format === "vietnamese-address") {
          return (
            <VietnameseAddressInput
              key={resetAddressKey}
              value={value as string}
              onChange={onChange as (v: string) => void}
            />
          );
        }
        return (
          <Input
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            value={value as number}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder={field.placeholder}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <p className="text-base font-medium">Form generated from schema</p>
      <div className="space-y-6">
        {Object.entries(schema).map(
          ([key, field]: [string, SchemaProperty]) => (
            <div key={key} className="grid gap-2">
              <Label>{field.title}</Label>
              {renderField(field, formData[key], (value) =>
                onChange(key, value)
              )}
            </div>
          )
        )}
      </div>
    </>
  );
};
export default JsonFormRenderer;
