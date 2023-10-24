import React, { useEffect } from "react";
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
import { useAppStore } from "@/stores/AppStore";
import { useLocation } from "react-router-dom";
import { PageRoutes } from "@/constants";
export const Header: React.FC = () => {
  const title = useAppStore((state) => state.pageTitle);
  const setTitle = useAppStore((state) => state.setPageTitle);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setTitle(PageRoutes.DASHBOARD);
    } else {
      setTitle(location.pathname);
    }
  }, [location]);
  return (
    <header className="fixed  border-b top-0 z-50  w-full h-[54px] flex items-center justify-between px-4 py-2  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <span className="tracking-tight font-medium text-[24px] border-l-4 border-blck px-4">
        {title}
      </span>
      <div className="flex items-center">
        <div className="w-6 mx-6 relative cursor-pointer">
          <BellIcon className=" " width={22} height={22} />
          <Badge className="absolute -top-[12px] -right-[18px] text-[8px]  text-center">
            11
          </Badge>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
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
    </header>
  );
};
