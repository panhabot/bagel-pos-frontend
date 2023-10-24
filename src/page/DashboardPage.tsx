import { BarChartComp } from "@/components/Chart/BarChartComp";
import { LineChartComponent } from "@/components/Chart/LineChart";
import { InfoCard } from "@/components/InfoCard";
import { TransactionTable } from "@/components/Table/TransactionTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarIcon } from "@radix-ui/react-icons";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Dashboard: React.FC = () => {
  return (
    <div className="relative p-4 w-full overflow-scroll h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <InfoCard
          type="revenue"
          title="Total Revenue"
          subtitle="$56,231.77"
          state="+20.1% this month"
        />
        <InfoCard
          type="customer"
          title="Total Customer"
          subtitle="25, 000"
          state="+10% this month"
        />
        <InfoCard
          type="sales"
          title="Total Sales"
          subtitle="35, 000"
          state="+70% this month"
        />
        <InfoCard
          type="order"
          title="Today's Order"
          subtitle="25"
          state="+5 more than Yesterday's Order"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
        <Card className={`w-full`}>
          <CardHeader className="py-2 text-[16px] font-medium">
            Revenue
          </CardHeader>
          <CardContent className="py-4">
            <BarChartComp />
          </CardContent>
        </Card>

        <Card className={`w-full`}>
          <CardHeader className="py-2 text-[16px] font-medium">
            Customers & Sales
          </CardHeader>
          <CardContent className="py-4">
            <LineChartComponent />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
        <Card className={`w-full col-span-2 h-[400px]`}>
          <CardHeader className="py-4 text-[16px] font-medium">
            Transaction
          </CardHeader>
          <CardContent>
            <TransactionTable />
            <Button
              variant={"outline"}
              className="my-2 float-right border-none shadow-none text-sm "
            >
              View More
            </Button>
          </CardContent>
        </Card>
        <Card className={`w-full col-span-1 h-[400px]`}>
          <CardHeader className="py-4 text-[16px] font-medium">
            Top Dishes
          </CardHeader>
          <CardContent className="py-4 h-full">
            <ScrollArea className="h-[300px]">
              <div className="flex  space-x-4">
                <Avatar>
                  <AvatarImage src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Egg Fried Rice</h4>
                  <p className="text-sm">USD 250.00</p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  space-x-4">
                <Avatar>
                  <AvatarImage src="https://a.cdn-hotels.com/gdcs/production114/d696/69cd96bf-5eb5-4859-8d3f-5e9889bfe76a.jpg" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Lok Lak Fried Rice</h4>
                  <p className="text-sm">USD 250.00</p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  space-x-4">
                <Avatar>
                  <AvatarImage src="https://media.cnn.com/api/v1/images/stellar/prod/191122145834-2-nom-banh-chok-lina-goldberg.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Egg Fried Rice</h4>
                  <p className="text-sm">USD 250.00</p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Egg Fried Rice</h4>
                  <p className="text-sm">USD 250.00</p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Egg Fried Rice</h4>
                  <p className="text-sm">USD 250.00</p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
