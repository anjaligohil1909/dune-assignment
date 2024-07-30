import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import StatisticTile from "../components/StatisticTile";
import { styled } from "@mui/material/styles";
import RiskAreas from "../components/RiskAreas";
import data from "../data/Dashboard_Dune Security.json";
import TrendsChart from "../components/TrendsChart";
import ComplianceTile from "../components/ComplianceTile";
import InfoTooltip from "../components/InfoTooltip";
import DashboardTile from "../components/DashboardTile";
import RiskCategoryPie from "../components/RiskCategoryPie";
import RiskLineChart from "../components/RiskLineChart";

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
  let riskComparisonData = {
    myScore: data["risk_score"],
    myHistoricalScore: data["risk_score_over_time"],
  };
  return (
    <Container>
      {/* First Row */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={12} lg={2.5}>
          <InfoTooltip
            text="Risk Insights"
            tooltipText="This is an explanation of what Risk Insights means."
          />
          <Item sx={{ marginBottom: "1rem" }}>
            <StatisticTile
              title={"RISK SCORE"}
              number={Math.round(data.risk_score)}
              desc={"OUT OF 100"}
              buttonText={data.risk_score > 50 ? "High" : "Low"}
            />
          </Item>
          <Item>
            <StatisticTile
              title={"SCORE CHANGE"}
              number={`${Math.abs(data.score_change * 100)}%`}
              desc={"PAST 30 DAYS"}
              buttonText={data.score_change < 0 ? "Decreased" : "Increased"}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <InfoTooltip
            text="Trends"
            tooltipText="This is an explanation of what Trends means."
          />
          <Item>
            <TrendsChart risk_score_over_time={data.risk_score_over_time} />
          </Item>
        </Grid>
        <Grid item xs={12} md={12} lg={2.5}>
          <Box sx={{ height: "2.3rem" }}></Box>
          <Item>
            <RiskAreas areas={data.high_risk_areas} />
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
        <Grid item xs={12} md={12} lg={12}>
          <InfoTooltip
            text="Compliance"
            tooltipText="This is an explanation of what Compliance means."
          />
          <Item>
            <ComplianceTile
              training_completion_status={data.training_completion_status}
            />
          </Item>
        </Grid>
      </Grid>

      {/* Fourth Row */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={3} lg={3.5}>
          <InfoTooltip
            text="Risk Categories"
            tooltipText="This is an explanation of what risk categories means."
          />

          <Item>
            <DashboardTile
              titleElement={
                <Typography
                  style={{
                    marginTop: "20px",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    mb: 3,
                    mt: 3,
                    textAlign: "center",
                  }}
                >
                  <text style={{ textTransform: "uppercase" }}>
                    Percentage of Users
                  </text>
                </Typography>
              }
              element={<RiskCategoryPie />}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={3} lg={8.5}>
          <InfoTooltip
            text="Risk Score Comparison"
            tooltipText="This is an explanation of what risk Score Comparison means."
          />
          <Item>
            <DashboardTile
              titleElement={
                <Typography
                  style={{
                    marginTop: "20px",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    mb: 3,
                    mt: 3,
                    textAlign: "left",
                  }}
                >
                  <text style={{ textTransform: "uppercase" }}>
                    Your Risk Score is
                    <span style={{ color: "var(--color-red)" }}> 39 Points </span> higher
                    than average
                  </text>
                </Typography>
              }
              element={<RiskLineChart data={riskComparisonData} />}
            />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
