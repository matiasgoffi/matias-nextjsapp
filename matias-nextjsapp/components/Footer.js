import { Grid } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';


export const Footer = () => {
  return (
    <div>
        <Grid
        container
        sx={{
          zIndex: '99', 
          boxShadow: "inset 0px 3px 0px #33c68baa;",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Grid 
            item
            xs={3}
            sm={4}
            md={4}
            style={{
                padding: '2rem 0rem 0.2rem 0rem' ,
                textAlign: 'right',
            }}
          >
         <Link href="https://www.linkedin.com/company/teo-coop/?originalSubdomain=ar" passHref>
        <a target='_blank'>
            <Image
                src='/images/linkedin.png'
                layout='fixed'
                width={40}
                height={40}
                alt='linkedin-logo'
                // priority
            />
        </a>
        </Link>
        </Grid>

        <Grid 
            item
            xs={3}
            sm={4}
            md={4}
            style={{
                textAlign: 'left',
                padding: '2rem 0rem 0rem 0.2rem' ,
            }}
          >
        <Link href="https://z-p15.www.instagram.com/teo.coop/?hl=es-la" passHref>
        <a target='_blank'>
            <Image
                src='/images/instagram.png'
                layout='fixed'
                width={40}
                height={40}
                alt='linkedin-logo'
                
            />
        </a>
        </Link>
        </Grid>
        <Grid 
            item
            xs={12}
            sm={6}
            md={6}
            style={{
                padding: '0rem 0rem',
                textAlign: 'center',
            }}
          >
            <Box>
                <h5>TEO-COOP COOPERATIVA DE DESARROLLO DE SOFTWARE.</h5>
            </Box>
          </Grid>
      </Grid>
    </div>
  )
}
