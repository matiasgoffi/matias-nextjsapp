import React from "react";
import { Navbar } from "../components/Navbar";




export const Layout = (props) => {


  return (
    <>
      <Navbar />
      {props.children}
      
    </>
  );
};
