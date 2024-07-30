import { Typography } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

function TrendsChart({ risk_score_over_time }) {
  // Function to transform data
  const transformData = (data) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const transformedData = data.map((entry) => {
      const date = new Date(entry.timestamp);
      return {
        month: months[date.getMonth()],
        risk_score: entry.risk_score,
      };
    });

    // Calculate the average risk score
    const totalScore = transformedData.reduce((acc, cur) => acc + cur.risk_score, 0);
    const averageScore = totalScore / transformedData.length;

    return { transformedData, averageScore };
  };

  const { transformedData, averageScore } = transformData(risk_score_over_time);
  

  return (
    <div>
      <Typography
        sx={{
          marginTop: "15px",
          fontSize: "12px",
          letterSpacing: "2px",
          textAlign: "left",
          marginLeft: "1rem"
        }}
      >
        RISK SCORE OVER TIME
      </Typography>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={transformedData}
          margin={{ top: 50, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid 
            vertical={false}  
            stroke="#e0e0e0"   
          />
          <XAxis 
            dataKey="month" 
            dy={10} 
            tickLine={false} 
            tick={{ fill: "var(--color-white)" }}
          />
          <YAxis
            axisLine={false}  
            tickMargin={10}   
            tickLine={false} 
            tick={{ fill: "var(--color-white)" }}
          />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="risk_score" 
            stroke="var(--color-yellow)"   
            strokeWidth={2}    
            dot={false}        
          />
          <ReferenceLine 
            y={averageScore} 
            stroke="var(--color-blue)"   
            strokeWidth={2}    
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrendsChart;
