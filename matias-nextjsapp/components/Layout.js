import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "./Footer";
import { Lenguajeswitcher } from "./Lenguajeswitcher";
import { Sidebar } from "./Sidebar";




export const Layout = (props) => {


  return (
    <>
      <Lenguajeswitcher />
      <Navbar />
      <Sidebar />
      {props.children}
      <Footer />     
    </>
  );
};
