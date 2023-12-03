import React from "react";
import { PageRoutes } from "@/constants";
import { Dashboard } from "@/page/DashboardPage";
import { MainTemplate } from "@/template/MainTemplate";
import { Route, Routes } from "react-router-dom";
import { OrderPage } from "@/page/OrderPage";
import { LoginPage } from "@/page/LoginPage";
import { MenuPage } from "@/page/MenuPage";
import { Toaster } from "@/components/ui/toaster";
import { TableManagementPage } from "@/page/TableManagementPage";
import { RegisterPage } from "@/page/RegisterPage";
import { AccountPage } from "@/page/AccountPage";

export const RouteConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path={PageRoutes.ORDER} element={<OrderPage />} />
          <Route path={PageRoutes.MENU} element={<MenuPage />} />
          <Route path={PageRoutes.TABLE} element={<TableManagementPage />} />
          <Route path={PageRoutes.ACCOUNT} element={<AccountPage />} />
        </Route>

        <Route path={PageRoutes.LOGIN} element={<LoginPage />} />
        <Route path={PageRoutes.REGISTER} element={<RegisterPage />} />
      </Routes>
      <Toaster />
    </>
  );
};
