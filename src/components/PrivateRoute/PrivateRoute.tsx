import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Loading from "../Loading/Loading";

type Context = {
  user?: object | undefined;
  loading?: boolean | undefined;
};

function PrivateRoute({ children }: { children?: JSX.Element }) {
  const { user, loading }: Context = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
}

export default PrivateRoute;
