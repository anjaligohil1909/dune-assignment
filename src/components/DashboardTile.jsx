import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, Pie, PieChart, Cell, LabelList } from "recharts";

function DashboardTile({ titleElement, element, textAlign = "center" }) {
  return (
    <Box>
      {titleElement}
      <div style={{ width: "100%", height: 300 }}>{element}</div>
    </Box>
  );
}

export default DashboardTile;