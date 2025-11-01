import { StrictMode } from "react";
import { createRoot, type Container } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import FrontOffice from "./pages/FrontOffice/FrontOffice.tsx";
import BackOffice from "./pages/BackOffice/BackOffice.tsx";

import "./styles/index.css";
import AdminLogin from "./pages/BackOffice/pages/Login/AdminLogin.tsx";
import Dashboard from "./pages/BackOffice/pages/Dashboard/Dashboard.tsx";
import DashboardHome from "./pages/BackOffice/pages/Dashboard/pages/DashboardHome/DashboardHome.tsx";
import DashboardAirdrop from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/DashboardAirdrop.tsx";
import AirdropCreate from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropCreate/AirdropCreate.tsx";
import AirdropRead from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropRead/AirdropRead.tsx";
import AirdropDelete from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropDelete/AirdropDelete.tsx";
import AirdropList from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropList/AirdropList.tsx";
import AirdropUpdate from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropUpdate/AirdropUpdate.tsx";

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontOffice />} />

        <Route path="back-office" element={<BackOffice />}>
          <Route path="login" element={<AdminLogin />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="home" element={<DashboardHome />} />
            <Route path="airdrops" element={<DashboardAirdrop />}>
              <Route path="list" element={<AirdropList />} />
              <Route path="create" element={<AirdropCreate />} />
              <Route path="read/:id" element={<AirdropRead />} />
              <Route path="update/:id" element={<AirdropUpdate />} />
              <Route path="delete/:id" element={<AirdropDelete />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
