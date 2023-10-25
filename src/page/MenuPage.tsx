import { MenuItem } from "@/@types";
import { AddMenuButton } from "@/components/AddMenuButton";
import { CategoryFilter } from "@/components/CategoryFilter";
import { MenuCard } from "@/components/MenuCard";
import { MenuData } from "@/mock/menu-data";
import React from "react";

const menuItem: MenuItem[] = MenuData;
export const MenuPage: React.FC = () => {
  const handleCategoryChange = (value: string) => {
    console.log(value);
  };
  return (
    <div className="w-full h-full p-4 overflow-auto">
      <div className="my-4 flex justify-between">
        <CategoryFilter onChange={handleCategoryChange} />
        <AddMenuButton />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-full gap-2">
        {menuItem.map((item) => {
          return <MenuCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
