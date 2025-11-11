import { Form } from "@/components/shadcdn/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/shadcdn/ui/button";
import CustomField from "../InputField/InputField";
import { useAuth } from "@/hooks/useAuth/useAuth";

import "./LoginForm.css";

interface LoginFormProps {
  redirectTo: string;
}

export default function LoginForm({ redirectTo }: LoginFormProps) {
  const form = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const { login } = useAuth();

  async function handleLogin(data: { userName: string; password: string }) {
    const { userName, password } = await data;
    if (userName == "admin" && password == "admin") {
      login(redirectTo);
    }
  }

  return (
    <div className="login-wrapper">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <CustomField
            form={form}
            name="userName"
            label="Nom d'utilisateur"
            placeholder="jhon_doe"
          />

          <CustomField
            form={form}
            name="password"
            label="Mot de passe"
            placeholder="password..."
            type="password"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
