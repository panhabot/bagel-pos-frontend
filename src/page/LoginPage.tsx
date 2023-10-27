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
import { Link, useNavigate } from "react-router-dom";
import { PageRoutes } from "@/constants";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

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
        <Card className="m-2 md:m-0 p-4">
          <CardTitle className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          </CardTitle>
          <CardContent className="mt-4">
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
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem className="w-[360px] mt-4">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="1234567"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button
                  type="submit"
                  className="mt-4 w-full bg-foreground text-secondary hover:text-foreground"
                >
                  Login
                </Button>
              </form>
            </Form>

            <div className="relative mt-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" type="button" className="w-full mt-2">
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              Github
            </Button>
            <div className="relative mt-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Do not have an account?
                </span>
              </div>
            </div>
            <Link to={PageRoutes.REGISTER}>
              <Button variant="outline" className="mt-2 w-full ">
                Create an Account
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
