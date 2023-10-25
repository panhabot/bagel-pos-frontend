import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sidebar } from "./Sidebar";
import { useLocation } from "react-router-dom";

type Props = {
  className?: string;
};

export const MobileMenu: React.FC<Props> = ({ className }) => {
  const location = useLocation();

  useEffect(() => {
    document.getElementById("closeSheet")?.click();
  }, [location]);
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <Sidebar />
        </SheetContent>
        <SheetClose id="closeSheet" />
      </Sheet>
    </div>
  );
};
