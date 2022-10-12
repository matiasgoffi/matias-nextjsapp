import React from "react";
import { Navbar } from "../components/Navbar";
import Lenguageswitcher, { LanguageSwitcher } from "./Languageswitcher";
import { Sidebar } from "./Sidebar";




export const Layout = (props) => {


  return (
    <>
      <LanguageSwitcher />
      <Navbar />
      <Sidebar />
      {props.children}
      
    </>
  );
};
