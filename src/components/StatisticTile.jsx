import { Box, Typography } from "@mui/material";
import React from "react";

function StatisticTile({title, number,desc, buttonText}) {
  return (
    <Box>
      <Typography style={{ marginTop: "10px", fontSize: "12px", letterSpacing:"2px"}}> {title}</Typography>
      <Typography style={{marginTop: "0px", fontSize:"60px", fontWeight: "bolder"}}> {number}</Typography>
      <Typography style={{marginTop: "-10px", fontSize:"15px"}}>  {desc} </Typography>
      <Box sx={{ mt: 3, height:"1.5rem", borderTopLeftRadius: 15, borderTopRightRadius: 15, bgcolor: "#007FFF", pt: 0.2}}>
        <Typography sx={{color:"black", fontWeight:"bolder"}}>
          {buttonText}
        </Typography>

      </Box>
      
    </Box>
  );
}

export default StatisticTile;
