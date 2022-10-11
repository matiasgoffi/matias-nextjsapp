import { Grid } from '@mui/material'
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { portfolio } from '../public/js/portfolio';


export const Portfolio = () => {
  return (
    <div 
        style={{
            marginTop: '5rem',
            marginBottom: '5rem',

        }}
        >
        <Grid 
            container
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              >
            
            
              {portfolio.map(portfolio => {
                return (
                 <Grid
                    item
                    key={portfolio.id}
                    xs={8}
                    sm={4}
                    md={3}
                    lg={2}
                    sx={{
                        margin: '1rem',
                        borderRadius: '3px',
                        boxShadow:' 0 0 7px 0px  #33c68baa',
                    }}
                 >
                    <Box 
                    >
                        <h3 
                        style={{textAlign: 'center',
                        padding: '0.5rem 1rem',  
                                     
                        
                        }}
                        > {portfolio.title}</h3>
                       
                        <div 
                            style={{
                              width: '100%',  
                              height: '25%'
                            }}
                        >
                        <Image 
                             style={{
                                borderRadius: '5px',
                             }}   
                             layout="responsive"
                             width={15}
                             height={10}
                             src={portfolio.image}
                             alt="portfolio-image"
                             priority
                        />
                        </div>
                        <hr></hr>
                        <p  style={{textAlign: 'left',
                        padding: '0.5rem 1rem',  
                                     
                        
                        }}>
                            {portfolio.description}</p>
                        <Link href={portfolio.link} passHref>
                            <a 
                             style={{textAlign: 'center',
                             padding: '1rem 1rem',  
                                          
                             
                             }}
                            target='_blank'>{portfolio.link}</a>
                        </Link>
                    </Box>
                 </Grid>
                      );
                  }
                 )
             }
          
         </Grid>
    </div>
  )
}
