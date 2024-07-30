import { Box, Link, Typography } from "@mui/material";
import React from "react";

function RiskAreas({ areas }) {
  return (
    <Box>
      <Typography
        style={{
          marginTop: "10px",
          fontSize: "12px",
          letterSpacing: "2px",
          mb: 3,
        }}
      >
        HIGH RISK AREAS
      </Typography>
      {areas.map((area, index) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              margin: "15px 5px",
              textAlign: "left",
              alignItems: "flex-end",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography>{index + 1}</Typography>
              <Box
                sx={{ height: "0.25rem", width: "1rem", bgcolor: "green" }}
              ></Box>
            </div>
            <Typography>{area}</Typography>
          </div>
        );
      })}
      <Link href="#"> Learn about risk areas</Link>
    </Box>
  );
}

export default RiskAreas;
