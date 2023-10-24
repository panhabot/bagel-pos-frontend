import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

import { BellIcon } from "@radix-ui/react-icons";
export const Header = () => {
  return (
    <div className="tracking-tight font-medium text-[24px] w-full h-[54px] flex items-center justify-between px-4 py-2">
      <span className="border-l-4 border-blck px-4">Dashboard</span>
      <div className="mt-4  flex items-center">
        <div className="w-6 mx-8 relative cursor-pointer">
          <BellIcon className=" " width={22} height={22} />
          <Badge className="absolute -top-[12px]  -right-[14px] text-[8px]  text-center">
            11
          </Badge>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className=" cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>KP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem className="text-[#b30000] ">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
