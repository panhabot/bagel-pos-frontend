import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DollarIcon } from "./Icon/DollarIcon";
import { CardStackPlusIcon, PersonIcon } from "@radix-ui/react-icons";

type Props = {
  type?: "revenue" | "customer" | "sales" | "order";
  className?: string;
  title?: string;
  subtitle?: string;
  state?: string;
};

export const InfoCard: React.FC<Props> = (props) => {
  const { className, type, title, subtitle, state } = props;
  return (
    <Card className={`${className} w-full`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {type === "revenue" && <DollarIcon />}
        {type === "customer" && <PersonIcon />}
        {type === "sales" && <CardStackPlusIcon />}
        {type === "order" && <DollarIcon />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{subtitle}</div>
        <p className="text-xs text-muted-foreground">{state}</p>
      </CardContent>
    </Card>
  );
};
