import { Outlet } from "react-router";
import DashboardViewWrapper from "../../components/DashboardViewWrapper/DashboardViewWrapper";

export default function DashboardCategory() {
  return (
    <DashboardViewWrapper
      title="Dashboard category"
      id="dashboard-category"
      createRoute="/back-office/dashboard/category/create"
    >
      <Outlet />
    </DashboardViewWrapper>
  );
}
