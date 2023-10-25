import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Props = {
  onChange: (value: string) => void;
};
export const CategoryFilter: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-[220px]">
          <Label className=" text-[14px] font-medium">Category: </Label>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Breakfast">Breakfast</SelectItem>
          <SelectItem value="Lunch">Lunch</SelectItem>
          <SelectItem value="Desert">Desert</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};
