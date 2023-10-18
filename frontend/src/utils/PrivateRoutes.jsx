import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = () => {
  const {user} = useContext(AuthContext)

  return (
    !user ? <Navigate to='/login'/> : <Outlet/>
  )
};

export default PrivateRoutes;
