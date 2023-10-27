import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { PageRoutes } from "@/constants";
import { Link } from "react-router-dom";
import { Label } from "recharts";

export const RegisterPage = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-foreground">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label>Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Link to={PageRoutes.LOGIN} className="w-full">
            <Button className="w-full bg-foreground text-secondary hover:text-foreground">
              Create account
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
