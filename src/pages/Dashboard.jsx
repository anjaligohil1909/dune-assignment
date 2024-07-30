import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import StatisticTile from "../components/StatisticTile";
import { styled } from "@mui/material/styles";
import RiskAreas from "../components/RiskAreas";

const Item = styled(Paper)(({ theme }) => ({
  padding: `0 ${theme.spacing(2)}`,
  display: "flex",
  flexDirection: "column",
  borderColor: "#656565",
  borderWidth: "0.5px",
  borderStyle: "solid",
  borderRadius: "10px",
  textAlign: "center",
}));

function Dashboard() {
  const riskAreasList = [
    "Domain Spoofing",
    "Request for action",
    "Link Manipulation",
    "Melicious attachments",
  ];
  return (
    <Container>
      {/* First Row */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={8} lg={2.5}>
          <Typography sx={{ mb: 1, fontSize: "1.3rem" }}>
            Risk Insights
          </Typography>
          <Item sx={{ marginBottom: "1rem" }}>
            <StatisticTile
              title={"RISK SCORE"}
              number={"39"}
              desc={"OUT OF 100"}
              buttonText={"Low"}
            />
          </Item>
          <Item>
            <StatisticTile
              title={"SCORE CHANGE"}
              number={"5%"}
              desc={"PAST 30 DAYS"}
              buttonText={"Decreased"}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={3} lg={7}>
          <Typography sx={{ mb: 1, fontSize: "1.3rem" }}>Trends</Typography>
          <Item></Item>
        </Grid>
        <Grid item xs={12} md={3} lg={2.5}>
        <Box sx={{height: "2.3rem"}}></Box>
          <Item >
            <RiskAreas areas={riskAreasList}/>
          </Item>
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={3} lg={12}>
          <Item></Item>
        </Grid>
      </Grid>

      {/* Third Row */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={3} lg={12}>
          <Item></Item>
        </Grid>
      </Grid>

      {/* Fourth Row */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={3} lg={3.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={12} md={3} lg={8.5}>
          <Item></Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
