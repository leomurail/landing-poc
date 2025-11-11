import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import type { UniqId } from "./useAuth.d";

export function useAuth() {
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const navigate = useNavigate();

  function login(redirectTo: string = "/back-office/dashboard"): UniqId {
    const uniqId = crypto.randomUUID();

    setCookie("auth", uniqId, {
      path: "/back-office",
    });
    navigate(redirectTo);
    //(todo) [ ] enregistrer en base de donnée via API

    return uniqId;
  }

  function logout() {
    removeCookie("auth", { path: "/back-office" });
    navigate("/back-office/login");
  }

  function checkLogin() {
    if (!cookies.auth) {
      navigate("/back-office/login");
    }
  }

  return { login, logout, checkLogin };
}
