import { StrictMode } from "react";
import { createRoot, type Container } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import FrontOffice from "./pages/FrontOffice/FrontOffice.tsx";
import BackOffice from "./pages/BackOffice/BackOffice.tsx";

import "./styles/index.css";

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontOffice />} />
        <Route path="/bo-keep-up" element={<BackOffice />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
