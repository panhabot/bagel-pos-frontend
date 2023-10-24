import { CreditCardIcon } from "@/components/Icon/CreditCardIcon";
import { Logo } from "@/components/Icon/Logo";
import { TeamIcon } from "@/components/Icon/TeamIcon";
import {
  ArchiveIcon,
  CardStackIcon,
  DashboardIcon,
  ExitIcon,
  FileTextIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import React from "react";
export const Sidebar = () => {
  return (
    <aside className="hidden relative   md:block w-[280px] p-4 border border-r">
      <div className="w-full h-[120px] flex items-center justify-center">
        <Logo />
      </div>
      <ul className="space-y-1">
        <li>
          <a
            href=""
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
          >
            <DashboardIcon />
            <span className="text-sm "> General </span>
          </a>
        </li>

        <li>
          <a
            href=""
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <div className="flex items-center gap-2">
              <ArchiveIcon />

              <span className="text-sm "> Orders </span>
            </div>

            <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
              5
            </span>
          </a>
        </li>

        <li>
          <a
            href=""
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <CardStackIcon />

            <span className="text-sm "> Menu </span>
          </a>
        </li>

        <li>
          <a
            href=""
            className="group flex items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <div className="flex items-center gap-2">
              <FileTextIcon />

              <span className="text-sm "> Invoices </span>
            </div>

            <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
              3
            </span>
          </a>
        </li>

        <li>
          <a
            href=""
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
          >
            <PersonIcon />

            <span className="text-sm "> Account </span>
          </a>
        </li>
      </ul>
      <div className="absolute bottom-4 flex items-center cursor-pointer">
        <ExitIcon className="mx-2 text-[#b30000]" />

        <span className="text-[14px] text-[#b30000]">Logout</span>
      </div>
    </aside>
  );
};
