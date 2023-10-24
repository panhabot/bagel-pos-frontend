import React from "react";
import { PageRoutes } from "@/constants";
import { Dashboard } from "@/page/DashboardPage";
import { MainTemplate } from "@/template/MainTemplate";
import { Route, Routes } from "react-router-dom";
import { OrderPage } from "@/page/OrderPage";
import { LoginPage } from "@/page/LoginPage";

export const RouteConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path={PageRoutes.ORDER} element={<OrderPage />} />
        </Route>

        <Route path={PageRoutes.LOGIN} element={<LoginPage />} />
      </Routes>
    </>
  );
};
