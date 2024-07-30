import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import GdprIcon from "@mui/icons-material/Security"; // Replace with your actual icon
import IsoIcon from "@mui/icons-material/Lock"; // Replace with your actual icon
import GlbaIcon from "@mui/icons-material/VerifiedUser"; // Replace with your actual icon
import NistIcon from "@mui/icons-material/Shield"; // Replace with your actual icon
import Soc2Icon from "@mui/icons-material/CheckCircle"; // Replace with your actual icon
import PciDssIcon from "@mui/icons-material/CreditCard"; // Replace with your actual icon
import HipaaIcon from "@mui/icons-material/HealthAndSafety";
import ComplianceChart from "./ComplianceChart";

const iconMap = {
  GdprIcon,
  IsoIcon,
  GlbaIcon,
  NistIcon,
  Soc2Icon,
  PciDssIcon,
  HipaaIcon,
};

function ComplianceTile({ training_completion_status }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={4}>
        <Box sx={{ margin: "20px 0px 20px 20px" }}>
          <Typography
            style={{
              fontSize: "15px",
              letterSpacing: "2px",
              textAlign: "left",
              marginBottom: "1.3rem",
              color: "var(--color-light)",
            }}
          >
            TRAINING COMPLETION STATUS
          </Typography>
          <Grid container>
            {training_completion_status.map((training, index) => {
              const IconComponent = iconMap[training.icon];
              return (
                <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px solid #686868",
                        padding: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 1,
                        borderRadius: "8px",
                      }}
                    >
                      <IconComponent sx={{ fontSize: 25, color: "var(--color-green)" }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        align="left"
                        sx={{ color: "#E0E0E0" }}
                      >
                        {training.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#A8A8A8" }}>
                        {training.percent}% of users
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={12} lg={8}>
        <Box sx={{ margin: "30px 20px 20px 0px"}}>
          <ComplianceChart />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ComplianceTile;
