import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "./Sidebar";




export const Layout = (props) => {


  return (
    <>
      <Navbar />
      <Sidebar />
      {props.children}
      
    </>
  );
};
