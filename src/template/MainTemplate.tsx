import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
export const MainTemplate: React.FC = () => {
  return (
    <div className="flex w-full h-[100svh] overflow-hidden">
      <Header />

      <Sidebar />

      <div className="flex-1 relative mt-12">
        <Outlet />
      </div>
    </div>
  );
};
