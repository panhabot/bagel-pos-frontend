import { TableCard } from "@/components/TableCard";
import { Label } from "@/components/ui/label";
import { TableManagementData } from "@/mock/table-management-data";
import React from "react";

export const TableManagementPage: React.FC = () => {
  return (
    <div className="w-full overflow-scroll h-full p-4">
      <div className="flex flex-col md:flex-row mt-4 w-[180px] md:w-full">
        <div className="flex  items-center justify-between">
          <Label>Inoccupied: </Label>
          <div className="h-[20px] w-[40px] bg-black rounded-md ml-2"></div>
        </div>
        <div className="flex items-center  justify-between ml-0 md:ml-2 mt-2 md:mt-0">
          <Label>Occupied: </Label>
          <div className="h-[20px] w-[40px] bg-[#1a5d1a] rounded-md ml-2"></div>
        </div>
        <div className="flex items-center  justify-between ml-0 md:ml-2 mt-2 md:mt-0">
          <Label>Reserved: </Label>
          <div className="h-[20px] w-[40px] bg-[#facc15] rounded-md ml-2"></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 grid-rows-6 mt-4">
        {TableManagementData.map((item) => (
          <TableCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
