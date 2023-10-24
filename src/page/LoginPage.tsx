import React from "react";
import logo from "../assets/logo-white.png";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "@/constants";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    navigate(PageRoutes.INDEX);
  }
  return (
    <div className="w-full h-screen grid grid-cols-none grid-rows-3 md:grid-rows-none md:grid-cols-2">
      <div className="bg-black flex items-center justify-center ">
        <img src={logo} alt="logo" width={500} height={500} />
      </div>

      <div className="flex flex-col items-center justify-start md:justify-center row-span-2 md:row-span-1">
        <Label className="my-4 font-bold text-[36px]">Login</Label>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="bagelpos@awesome.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem className="w-[360px] mt-4">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="1234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit" className="mt-4">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
