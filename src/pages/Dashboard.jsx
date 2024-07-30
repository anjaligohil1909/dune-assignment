import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import StatisticTile from "../components/StatisticTile";
import { styled } from "@mui/material/styles";
import RiskAreas from "../components/RiskAreas";
import data from "../data/Dashboard_Dune Security.json";
import sankeyData from "../data/SankeyGraphData.json";
import TrendsChart from "../components/TrendsChart";
import ComplianceTile from "../components/ComplianceTile";
import InfoTooltip from "../components/InfoTooltip";
import DashboardTile from "../components/DashboardTile";
import RiskCategoryPie from "../components/RiskCategoryPie";
import RiskLineChart from "../components/RiskLineChart";
import CustomNode from "../components/CustomNode";
import { Sankey } from "recharts";

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
const GradientPaper = styled(Paper)(({ theme }) => ({
  padding: `0 ${theme.spacing(2)}`,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  position: "relative",
  borderRadius: "10px",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    margin: -2,
    borderRadius: "10px",
    background: "linear-gradient(to bottom, green, blue)",
  },
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
          <GradientPaper sx={{ marginBottom: "1rem" }}>
            <StatisticTile
              title={"RISK SCORE"}
              number={Math.round(data.risk_score)}
              desc={"OUT OF 100"}
              buttonText={data.risk_score > 50 ? "High" : "Low"}
            />
          </GradientPaper>
          <GradientPaper>
            <StatisticTile
              title={"SCORE CHANGE"}
              number={`${Math.abs(data.score_change * 100)}%`}
              desc={"PAST 30 DAYS"}
              buttonText={data.score_change < 0 ? "Decreased" : "Increased"}
            />
          </GradientPaper>
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
          <Box sx={{ height: "2.7rem" }}></Box>
          <Item>
            <RiskAreas areas={data.high_risk_areas} />
          </Item>
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={12} lg={12}>
          <InfoTooltip
            text="User Interactions"
            tooltipText="This is an explanation of what User Interaction means."
          />
          <Item>
            <Typography
              style={{
                margin: "1rem 1rem 0rem 1rem",
                fontSize: "50px",
                fontWeight: "bolder",
                textAlign: "left",
              }}
            >
              10,438
            </Typography>

            <Typography
              style={{
                margin: "0rem 1rem 0rem 1rem",
                fontSize: "15px",
                letterSpacing: "2px",
                textAlign: "left",
                color: "var(--color-light)",
              }}
            >
              TOTAL INTERACTIONS
            </Typography>
            <Sankey
              width={960}
              height={500}
              data={sankeyData}
              dataKey={"name"}
              node={<CustomNode />}
              nodePadding={50}
              margin={{
                left: 100,
                right: 100,
                top: 100,
                bottom: 100,
              }}
              link={{ stroke: "grey" }}
              sort={false}
            >
              {/* <Tooltip /> */}
            </Sankey>
          </Item>
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
        <Grid item xs={12} md={12} lg={3.5}>
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
        <Grid item xs={12} md={12} lg={8.5}>
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
                    <span style={{ color: "var(--color-red)" }}>
                      {" "}
                      39 Points{" "}
                    </span>{" "}
                    higher than average
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
