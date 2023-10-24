import React from "react";
import { PageRoutes } from "@/constants";
import { Dashboard } from "@/page/Dashboard";
import { MainTemplate } from "@/template/MainTemplate";
import { Route, Routes } from "react-router-dom";

export const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path={PageRoutes.DASHBOARD} element={<MainTemplate />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};
