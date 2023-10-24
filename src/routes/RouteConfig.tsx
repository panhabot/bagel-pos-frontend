import React from "react";
import { PageRoutes } from "@/constants";
import { Dashboard } from "@/page/DashboardPage";
import { MainTemplate } from "@/template/MainTemplate";
import { Route, Routes } from "react-router-dom";
import { OrderPage } from "@/page/OrderPage";

export const RouteConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path={PageRoutes.ORDER} element={<OrderPage />} />
        </Route>
      </Routes>
    </>
  );
};
