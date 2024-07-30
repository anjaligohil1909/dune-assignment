import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";
import { Box } from "@mui/material";
import data from "../data/Dashboard_Dune Security.json";

function ComplianceChart() {
  const chartData = Object.keys(data.status_comparision).map((key) => ({
    name: key,
    not_started: data.status_comparision[key].not_started,
    in_progress: data.status_comparision[key].in_progress,
    completed: data.status_comparision[key].completed,
  }));

  const renderCustomizedLabel = ({ x, y, width, height, value,fill }) => {
    return (
      <Text
        x={x + width / 2}
        y={y + height / 2}
        fill={fill}
        textAnchor="middle"
        dominantBaseline="middle"
        angle={-90}
        fontSize={10}
      >
        {value}%
      </Text>
    );
  };

  return (
    <Box>
      <ResponsiveContainer width="100%" height={275}>
        <BarChart data={chartData} barSize={25}>
          <CartesianGrid vertical={false} horizontal={false} stroke="#e0e0e0" />
          <XAxis dataKey="name" dy={10} tickLine={false} tick={{ fill: "var(--color-white)" }}/>
          <YAxis
            tick={false}
            label={{
              value: "Total users",
              angle: -90,
              position: "insideLeft",
              dy: 35,
              dx:25,
              fill: "var(--color-white)"
            }}
          />
          <Tooltip />
          <Legend align="right" verticalAlign="top" />
          <Bar
            dataKey="not_started"
            fill="var(--color-red)"
            label={(props) => renderCustomizedLabel({ ...props, fill: '#ffffff' })}

          />
          <Bar
            dataKey="in_progress"
            fill="var(--color-grey)"
            label={(props) => renderCustomizedLabel({ ...props, fill: '#ffffff' })}
          />
          <Bar
            dataKey="completed"
            fill="var(--color-green)"
            label={(props) => renderCustomizedLabel({ ...props, fill: '#000000' })}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ComplianceChart;
