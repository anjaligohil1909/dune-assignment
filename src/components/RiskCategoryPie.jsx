import React from "react";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Label,
} from "recharts";

const data = [
  { name: "Low risk", value: 0.496012084592145 * 100 },
  { name: "Moderate risk", value: 0.22054380664652568 * 100 },
  { name: "High risk", value: 0.154380664652567974 * 100 },
  { name: "Severe risk", value: 0.13906344410876133 * 100 },
];

const COLORS = ["var(--color-green)", "var(--color-yellow)", "var(--color-orange)", "var(--color-red)"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y}
        fill="black"
        fontSize={12}
        fontWeight={500}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index]["name"].replace("risk", "")}
      </text>
      {/* <rect x={x} y={y} dy="1em" width={20} height={10} fill="none" /> */}
      <text
        x={x}
        y={y}
        dy="1em"
        fill="black"
        fontSize={12}
        fontWeight={500}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >{`${(percent * 100).toFixed(0)}%`}</text>
    </g>
  );
};

function RiskCategoryPie() {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          fill="#8884d8"
          innerRadius={50}
          outerRadius={120}
          labelLine={false}
          label={renderCustomizedLabel}
          legendType="circle"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            position="center"
            value={"TOTAL USERS"}
            style={{
              fontSize: "0.8em",
              fontWeight: "bold",
              fill: "#999",
              whiteSpace: "pre-wrap",
            }}
            // content={renderCenterLable}
          ></Label>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default RiskCategoryPie;