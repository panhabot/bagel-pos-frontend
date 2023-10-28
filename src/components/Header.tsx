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

import { BellIcon, GlobeIcon } from "@radix-ui/react-icons";
import { useAppStore } from "@/stores/AppStore";
import { useLocation } from "react-router-dom";
import { PageRoutes } from "@/constants";
import { MobileMenu } from "@/template/MobileMenu";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
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

  const { t } = useTranslation();
  const languages = [
    { value: "en", label: "English" },
    { value: "km", label: "ខ្មែរ" },
  ];


  return (
    <header className="fixed  border-b top-0 z-50  w-full h-[54px] flex items-center justify-between px-4 py-2  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center">
        <MobileMenu className="flex md:hidden mr-4" />
        <span className="tracking-tight font-medium text-[24px] border-l-4 border-blck px-4">
          {title}
        </span>
      </div>

      <div className="flex items-center">
      <DropdownMenu>
          <DropdownMenuTrigger>
              <GlobeIcon className=" " width={22} height={22} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
          {languages.map((language) => (
              <DropdownMenuItem
                data-key={language.value}
                onClick={(e) => {
                   i18next.changeLanguage(e.currentTarget.dataset.key);
                   }}>{language.label}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
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
