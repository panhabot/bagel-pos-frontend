import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DollarIcon } from "./Icon/DollarIcon";

type Props = {
  type?: "revenue" | "Customer" | "Sales";
  className?: string;
};

export const InfoCard: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Card className={`${className} w-full`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <DollarIcon />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
};
