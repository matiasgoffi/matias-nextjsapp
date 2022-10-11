import React from "react";
import {  Grid  } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";


export const Navbar = () => {
  return (
    <div className="navbar">
      <Grid
        container
        sx={{
          boxShadow: " 2px 5px 5px #33c68baa;",
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
          sm={6}
          sx={{
            textAlign: "center",
            position: "relative",
            top: "40px",
          }}
        >
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
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            justifyContent: "center",
          }}
        >
          <Box>
            <nav>
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
