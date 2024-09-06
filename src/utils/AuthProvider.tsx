import { useAppSelector } from "@utils/redux.ts";
import { userSlice } from "@models/user/userSlice.ts";
import { ReactElement, ReactNode } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

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
