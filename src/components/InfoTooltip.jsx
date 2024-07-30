import React from "react";
import { Tooltip, IconButton, Typography, Box } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
function InfoTooltip({ text, tooltipText }) {
  return (
    <Box display="flex" alignItems="center">
      <Typography sx={{ mb: 1, fontSize: "1.3rem" }}>{text}</Typography>
      <Tooltip title={tooltipText} arrow>
        <IconButton size="small" sx={{ mb: 2 }}>
          <HelpIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default InfoTooltip;
