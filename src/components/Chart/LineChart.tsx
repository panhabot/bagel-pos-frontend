import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  className?: string;
};
const data = [
  {
    name: "Jan",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total_customer: Math.floor(Math.random() * 5000) + 1000,
    total_sale: Math.floor(Math.random() * 5000) + 1000,
  },
];

export const LineChartComponent: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        width={500}
        height={350}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis tickLine={false} axisLine={false} dataKey="name" fontSize={12} />
        <YAxis yAxisId="left" tickLine={false} axisLine={false} fontSize={12} />
        <YAxis yAxisId="right" orientation="right" hide />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          yAxisId="left"
          type="natural"
          dataKey="total_customer"
          stroke="#000"
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="total_sale"
          stroke="#FACC15"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
