import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcdn/ui/form";
import "./LoginForm.css";
import { Input } from "@/components/shadcdn/ui/input";
import { useForm } from "react-hook-form";
import { Form } from "@/components/shadcdn/ui/form";

import "./LoginForm.css";
import { Button } from "@/components/shadcdn/ui/button";

export default function LoginForm() {
  const form = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  async function handleLogin(data: { userName: string; password: string }) {
    const { userName, password } = await data;

    if (userName == "admin" && password == "admin") {
      console.log(true);
    }
  }

  return (
    <div className="login-wrapper">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="jhon_doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
