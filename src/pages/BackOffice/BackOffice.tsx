import "./BackOffice.css";
import LoginForm from "./components/LoginForm/LoginForm";
import { ThemeProvider } from "@/components/shadcdn/ui/theme-provider";

export default function BackOffice() {
  return (
    <ThemeProvider defaultTheme="dark">
      <section id="back-office">
        <h1>Back Office</h1>
        <LoginForm />
      </section>
    </ThemeProvider>
  );
}
