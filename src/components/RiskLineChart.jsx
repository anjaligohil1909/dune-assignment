import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

const formatXAxis = (tickItem) => {
  return moment(tickItem).format("MMM DD");
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          textAlign: "left",
          color: "black",
          padding: "0px 5px",
        }}
      >
        <p className="label">
          {`Score`} <br /> {`${payload[0].value}`}
        </p>
      </div>
    );
  }

  return null;
};

function RiskLineChart({ props, data }) {
  const graphData = data["myHistoricalScore"];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={graphData}
        margin={{
          top: 25,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="timestamp"
          tickFormatter={(tick) => formatXAxis(tick)}
          tickLine={false}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Line
          type="monotone"
          dataKey="risk_score"
          stroke="var(--color-yellow)"
          dot={false}
          strokeWidth={2} 
        />
        <Tooltip
          content={<CustomTooltip />}
          labelStyle={{ color: "black" }}
          contentStyle={{ color: "black" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RiskLineChart;
