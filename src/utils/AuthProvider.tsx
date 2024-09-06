import { useAppSelector } from "@utils/redux.ts";
import { userSlice } from "@models/user/userSlice.ts";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const auth = useAppSelector(userSlice.selectors.isLoggined);
  const requiredAuthPaths = ["favorites"];
  const { pathname } = useLocation();

  for (const path of requiredAuthPaths) {
    if (pathname.includes(path) && !auth) return <Navigate to={"/"} replace />;
  }

  return <>{children}</>;
};

export { AuthProvider };
