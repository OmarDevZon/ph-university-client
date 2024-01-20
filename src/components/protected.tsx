import { ReactNode } from "react";
import { userCurrentToken } from "../redux/feature/auth/auth.slice";
import { useAppSelector } from "../redux/feature/hooks";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(userCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  console.log(token);
  return children;
};
