import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate, useNavigation } from "react-router";
import SproutlyFooter from "./SprotlyFooter";
import Loading from "./Loading";

const Root = () => {
  const { state } = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}

      <SproutlyFooter></SproutlyFooter>
    </>
  );
};

export default Root;
