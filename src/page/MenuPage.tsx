import { MenuItem } from "@/@types";
import { MenuCard } from "@/components/MenuCard";
import { MenuData } from "@/mock/menu-data";
import React from "react";

const menuItem: MenuItem[] = MenuData;
export const MenuPage: React.FC = () => {
  return (
    <div className="w-full h-full p-4 overflow-auto">
      <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 w-full gap-2">
        {menuItem.map((item) => {
          return <MenuCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
