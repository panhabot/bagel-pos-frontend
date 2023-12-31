import { Logo } from "@/components/Icon/Logo";
import { PageRoutes } from "@/constants";
import {
  ArchiveIcon,
  CardStackIcon,
  DashboardIcon,
  ExitIcon,
  FileTextIcon,
  PersonIcon,
  TableIcon,
} from "@radix-ui/react-icons";

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
};
export const Sidebar: React.FC<Props> = ({ className }) => {

  const {t} = useTranslation();
  return (
    <aside className={className}>
      <div className="w-full h-[120px] flex items-center justify-center">
        <Logo />
      </div>
      <ul className="space-y-1">
        <li>
          <Link
            to={"/"}
            className="flex items-center gap-2 rounded-lg hover:bg-gray-100 px-4 py-2 text-black"
          >
            <DashboardIcon />
            <span className="text-sm "> 
              {t("common.dashboard")}
             </span>
          </Link>
        </li>

        <li>
          <Link
            to={PageRoutes.ORDER}
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <div className="flex items-center gap-2">
              <ArchiveIcon />

              <span className="text-sm ">
                {t("common.order")}
              </span>
            </div>

            <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
              5
            </span>
          </Link>
        </li>
        <li>
          <Link
            to={PageRoutes.TABLE}
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <div className="flex items-center gap-2">
              <TableIcon />

              <span className="text-sm ">
                {t("common.table")}
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={PageRoutes.MENU}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <CardStackIcon />

            <span className="text-sm ">
              {t("common.menu")}
            </span>
          </Link>
        </li>

        <li>
          <Link
            to={PageRoutes.TABLE}
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <div className="flex items-center gap-2">
              <FileTextIcon />

              <span className="text-sm ">
                {t("common.report")}
              </span>
            </div>

            <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
              3
            </span>
          </Link>
        </li>

        <li>
          <a
            href=""
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <PersonIcon />

            <span className="text-sm "> 
              {t("common.account")}
             </span>
          </a>
        </li>
      </ul>
      <Link to={PageRoutes.LOGIN}>
        <div className="absolute bottom-4 flex items-center cursor-pointer">
          <ExitIcon className="mx-2 text-[#b30000]" />

          <span className="text-[14px] text-[#b30000]">Logout</span>
        </div>
      </Link>
    </aside>
  );
};
