import { Outlet } from "react-router";
import "./Dashboard.css";
import AppSideBar from "./components/SideBar/AppSideBar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/shadcdn/ui/sidebar";

export default function Dashboard() {
  return (
    <section id="dashboard">
      <SidebarProvider>
        <AppSideBar />
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </section>
  );
}
