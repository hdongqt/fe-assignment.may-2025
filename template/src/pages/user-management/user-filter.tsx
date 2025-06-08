import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { Filter } from "lucide-react";

export default function UserFilter() {
  return (
    <div className="min-w-[253px] h-full p-4 border-r flex flex-col justify-between">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2 border-b text-gray-500">
          <h2 className="text-base font-medium">FILTER</h2>
          <Filter className="size-4 rotate-0" />
        </div>
        <div className="flex flex-col gap-2">
          <p>User name</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr. David Nguyen">Mr. David Nguyen</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <p>User ID</p>
          <Input type="text" placeholder="Input" />
        </div>
        <div className="flex flex-col gap-2">
          <p>User type</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">employee</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <p>Phone number</p>
          <Input type="text" placeholder="Input" />
        </div>
        <div className="flex flex-col gap-2">
          <p>Email address</p>
          <Input type="text" placeholder="Input" />
        </div>
        <div className="flex flex-col gap-2">
          <p>Status</p>
          <div className="flex items-center gap-3">
            <Checkbox id="all" />
            <Label htmlFor="all" className="text-sm text-gray-600 font-normal">
              All
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="active" />
            <Label
              htmlFor="active"
              className="text-sm text-gray-600 font-normal"
            >
              Active
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="inactive" />
            <Label
              htmlFor="active"
              className="text-sm text-gray-600 font-normal"
            >
              Inactive
            </Label>
          </div>
        </div>
      </div>
      <Button variant={"outline"} size={"sm"} className="cursor-pointer mt-20">
        Export Data
      </Button>
    </div>
  );
}
