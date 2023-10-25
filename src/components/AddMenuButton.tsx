import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "./ui/select";
import logo from "../assets/logo-black.png";
import { z } from "zod";
import { useToast } from "./ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PlusCircledIcon } from "@radix-ui/react-icons";
export const AddMenuButton: React.FC = () => {
  const formSchema = z.object({
    title: z.string().min(1),
    price: z.string(),
    status: z.string(),
    category: z.string(),
  });
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
    <Dialog>
      <DialogTrigger className="bg-black text-white hover:bg-primary font-medium hover:text-black flex items-center px-4 rounded">
        <PlusCircledIcon className="mr-2 " />
        Menu
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
            src={""}
            alt={""}
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
                                  <SelectItem value="active">Active</SelectItem>
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
                                  <SelectItem value="Dinner">Dinner</SelectItem>
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
  );
};
