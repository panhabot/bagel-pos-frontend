import { OrderDataTable } from "@/components/Table/OrderTable";
import React, { useEffect } from "react";
import { z } from "zod";
import { taskSchema } from "../components/Table/OrderTable/Data/schema";
import { columns } from "@/components/Table/OrderTable/columns";
import { OrderData } from "@/components/Table/OrderTable/Data/tasks";

export const OrderPage: React.FC = () => {
  const [tasks, setTasks] = React.useState([]);
  const getTasks = () => {
    return z.array(taskSchema).parse(OrderData);
  };

  useEffect(() => {
    const task: any = getTasks();
    setTasks(task);
  }, []);

  return (
    <div className="h-full p-4 w-full overflow-auto">
      <OrderDataTable columns={columns} data={tasks} />
    </div>
  );
};
