import React, { useState, useEffect } from "react";
import {  Grid  } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import useDarkMode from "use-dark-mode";
import { darkTheme, lightTheme } from "./ThemeConfig"


export const Navbar = ( ) => {

  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  return (
    <div className="navbar">
      <Grid
        container
        sx={{
          zIndex: '99', 
          boxShadow: "0px 5px #33c68baa;",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Grid
          item
          className="image-nav"
          xs={12}
          sm={4}
          md={4}
          sx={{
            textAlign: "center",
            position: "relative",
            top: "40px",
          }}
        >
       
      { theme===darkTheme ? (
         <Box>
            <Image
              layout="fixed"
              width={80}
              height={60}
              src="/images/logonube.png"
              alt="logo"
              priority
            />
          </Box>
      )
          :
      (
          <Box>
            <Image
              layout="fixed"
              width={150}
              height={60}
              src="/images/logonegro.png"
              alt="logo"
              priority
            />
          </Box>
      )  
    }
         
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          sx={{
            justifyContent: "center",
          }}
        >
       
          <Box>
            <nav style={{paddingBottom:'2rem'}}>
              <ul
                style={{
                  padding: "0px 0px !important",
                  paddingInlineStart: '0px',
                  margin: "0px !important",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <li className="li-nav">Inicio</li>
                <li className="li-nav">Nuestro Portfolio</li>
                <li className="li-nav">Hagamos Contacto</li>
              </ul>
            </nav>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
