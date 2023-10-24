import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
export const MainTemplate = () => {
  console.log("here");
  return (
    <div className="flex w-full h-[100svh] overflow-hidden">
      <Sidebar />

      <div className="flex-1 overscroll-y-auto pb-[64px]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
