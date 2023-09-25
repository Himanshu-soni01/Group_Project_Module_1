/* Import Section - Start */

/* React Imports - Start */

import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const Layout = () => {
  /* Render View Return - Start */
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = document.cookie.split("=")[1];
    const email = localStorage.getItem("email");
    if (!email || !jwtToken) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );

  /* Render View Return - End */
};

/* Function - End */

/* Export default functionName */

export default Layout;
