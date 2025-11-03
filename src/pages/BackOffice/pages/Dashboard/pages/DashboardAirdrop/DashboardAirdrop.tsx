import { Button } from "@/components/shadcdn/ui/button";
import { Link, Outlet, useLocation } from "react-router";

import "./DashboardAirdrop.css";

export default function DashboardAirdrop() {
  const location = useLocation();
  const lastRoute = location.pathname.split("/").pop();
  return (
    <section id="dashboard-airdrop">
      <div className="top">
        <h1>Dashboard Airdrop</h1>
        {lastRoute == "list" && (
          <Button>
            <Link to="/back-office/dashboard/airdrops/create">Créer</Link>
          </Button>
        )}
      </div>
      <Outlet />
    </section>
  );
}
