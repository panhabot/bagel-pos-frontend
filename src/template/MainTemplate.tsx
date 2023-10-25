import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
export const MainTemplate: React.FC = () => {
  return (
    <div className="flex w-full h-[100svh] overflow-hidden">
      <Header />

      <Sidebar className="hidden relative mt-12   md:block w-[280px] p-4 border border-r" />

      <div className="flex-1 relative mt-12">
        <Outlet />
      </div>
    </div>
  );
};
