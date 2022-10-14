import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolio } from "../public/js/portfolio";


export const Portfolio = () => {
  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "5rem",
      }}
    >
      <hr></hr>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Grid item xs={12}>
          <h2 className="portfolio-title"> Nuestro Portfolio</h2>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
        </Grid>

        {portfolio.map((portfolio) => {
          return (
            <Grid
              item
              className="portfolio-card"
              key={portfolio.id}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              sx={{
                margin: "1rem",
                borderRadius: "3px",
                boxShadow: " 0 0 7px 0px  #33c68baa",
              }}
            >
              <Box>
                <h3 style={{ textAlign: "center", padding: "0.5rem 1rem" }}>
                  {" "}
                  {portfolio.title}
                </h3>

                <div
                  style={{
                    width: "100%",
                    height: "25%",
                  }}
                >
                  <Image
                    className="portfolio-image"
                    style={{
                      borderRadius: "5px",
                      zIndex: '-5',
                    }}
                    layout="responsive"
                    width={15}
                    height={10}
                    src={portfolio.image}
                    alt="portfolio-image"
                   
                  />
                </div>
                <hr></hr>
                <p style={{ textAlign: "left", padding: "0.5rem 1rem" }}>
                  {portfolio.description}
                </p>
                <Link href={portfolio.link} passHref>
                  <a
                    style={{ textAlign: "left",
                              position: 'absolute',
                              bottom: '0',
                           }}
                    target="_blank"
                  >
                    {portfolio.link}
                  </a>
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <hr></hr>
      <br></br>
      <br></br>
    </div>
  );
};
