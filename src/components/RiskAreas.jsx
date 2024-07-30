import { Box, Link, Typography } from "@mui/material";
import React from "react";

function RiskAreas({ areas }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "24.3rem", // Ensure the Box takes the full height of its parent
      }}
    >
      <Typography
        style={{
          marginTop: "10px",
          fontSize: "12px",
          letterSpacing: "2px",
          marginBottom: "1rem",
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
              margin: "10px 5px",
              textAlign: "left",
              alignItems: "flex-end",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography>{index + 1}</Typography>
              <Box
                sx={{ height: "0.25rem", width: "1rem", bgcolor: "var(--color-green)" }}
              ></Box>
            </div>
            <Typography>{area.name}</Typography>
          </div>
        );
      })}
      <Link href="#" sx={{ marginTop: "auto", mb: "15px", textDecoration:"none" }}>
        Learn about risk areas
      </Link>
    </Box>
  );
}

export default RiskAreas;
