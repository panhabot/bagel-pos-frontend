import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import { MenuItem } from "@/@types";
import logo from "../assets/logo-black.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "./ui/use-toast";
import { CalendarIcon } from "@radix-ui/react-icons";
type Props = {
  item: MenuItem;
};
export const MenuCard: React.FC<Props> = ({ item }) => {
  const formSchema = z.object({
    title: z.string().min(1),
    price: z.string(),
    status: z.string(),
    category: z.string(),
  });
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: item.title,
      price: item.price.toString(),
      status: item.status,
      category: item.category,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Item Updated",
      description: "Item Updated Successfully",
      style: { backgroundColor: "#1A5D1A", color: "white" },
    });
    document.getElementById("closeDialog")?.click();
  }
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Card className="col-span-1 cursor-pointer">
            <CardHeader className="p-4 text-start mt-2">
              <div className="   flex items-center justify-between">
                <span className="text-xs rounded font-medium flex items-center justify-center text-center w-[80px] h-[20px] bg-primary">
                  {item.state}
                </span>
                <Badge
                  variant="outline"
                  className={`${
                    item.status === "active"
                      ? "text-[#1A5D1A] border-[#1A5D1A]"
                      : "text-[#b30000] border-[#b30000]"
                  }`}
                >
                  {item.status}
                </Badge>
              </div>

              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    Created December 2021
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>$ {item.price}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <img
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = logo;
                }}
                src={item.image}
                alt={item.title}
                className="w-[150px] h-[150px] rounded-md object-cover"
              />
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Product Description</DialogTitle>
          </DialogHeader>
          <div className="w-full grid grid-cols-3 [h-500px] gap-2">
            <img
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = logo;
              }}
              src={item.image}
              alt={item.title}
              className="w-[250px] col-span-1 h-[250px] rounded-md object-cover"
            />
            <div className="col-span-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-2">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="bagelpos@awesome.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <Input placeholder="3" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Status</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    <SelectItem value="active">
                                      Active
                                    </SelectItem>
                                    <SelectItem value="inactive">
                                      InActive
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Category</SelectLabel>
                                    <SelectItem value="Breakfast">
                                      Breakfast
                                    </SelectItem>
                                    <SelectItem value="Lunch">Lunch</SelectItem>
                                    <SelectItem value="Dinner">
                                      Dinner
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>

                  <Button type="submit" className="mt-4">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <DialogClose id="closeDialog" />
        </DialogContent>
      </Dialog>
    </>
  );
};
