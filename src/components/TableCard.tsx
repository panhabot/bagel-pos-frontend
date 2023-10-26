import { TableManagementItem } from "@/@types";
import React, { useMemo } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { PersonIcon } from "@radix-ui/react-icons";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

type Props = {
  item: TableManagementItem;
};
export const TableCard: React.FC<Props> = ({ item }) => {
  const bgColor = useMemo(() => {
    if (item.reservation.length) {
      return "bg-[#facc15]";
    }
    return item.status === "occupied" ? "bg-[#1a5d1a]" : "bg-[black]";
  }, [item]);
  return (
    <Sheet>
      <SheetTrigger className=" col-span-1">
        <Card className="relative">
          <div
            className={`absolute h-[5px] left-0 top-0 w-full rounded-tr-lg rounded-tl-lg  ${bgColor}`}
          ></div>

          <CardHeader className="">
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.status}</CardDescription>
          </CardHeader>
        </Card>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <Card className="mt-4">
          <CardHeader className="">
            <CardTitle>Table Detail</CardTitle>
            <CardDescription>
              <div>Table: {item.title}</div>
              <div>Status: {item.status}</div>
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="text-[24px] pt-4 font-medium">Reservations :</div>
        {item.reservation.length === 0 && (
          <div className="text-center text-gray-400">No Reservation </div>
        )}
        {item.reservation.map((reservation) => (
          <Card className="mt-2">
            <CardHeader className="">
              <CardTitle>Customer Name: {reservation.info.name}</CardTitle>
              <CardDescription>
                <div>Table: {item.title}</div>
                <div>Reserve Time: {reservation.time}</div>
                <div className="flex items-center">
                  People: <PersonIcon className="ml-2" />
                  {reservation.info.people}
                </div>
                <div>Contact: {reservation.info.contact}</div>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </SheetContent>
    </Sheet>
  );
};
