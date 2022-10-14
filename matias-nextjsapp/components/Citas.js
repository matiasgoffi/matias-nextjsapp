import { DateTimePicker } from "@material-ui/pickers";
import { Grid, Box, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from "react";
import { useState } from "react";

export const Citas = () => {

  const [fechaseleccionada, setFechaSeleccionada] = useState(new Date())
  console.log(fechaseleccionada);
  

  return (
    <div>
      <Grid 
        container
        >
        <Grid 
            item
            sx={{
                margin: '0.8rem 0.5rem',
                boxShadow: " 0 0 7px 0px  #33c68baa",
            }}
            >
          <Box
            sx={{
                padding: '1rem 0.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',

            }}
          >
            <Typography 
                sx={{
                  marginLeft: '1rem',

                }}
                variant="h6" 
                >Programá una cita:
            </Typography>
            <CalendarMonthIcon 
                sx={{
                    position: 'relative',
                    bottom: '1.8rem',
                    
                }}
            />
            <DateTimePicker
             
              style={{
                marginTop: "1rem",
                backgroundColor: 'aliceblue',
                verticalAlign: 'center',
              }}
              value={fechaseleccionada}
              onChange={setFechaSeleccionada}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
