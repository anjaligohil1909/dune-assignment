import React from "react";
import { Box } from "@mui/material";

function DashboardTile({ titleElement, element }) {
  return (
    <Box>
      {titleElement}
      <div style={{ width: "100%", height: 300 }}>{element}</div>
    </Box>
  );
}

export default DashboardTile;