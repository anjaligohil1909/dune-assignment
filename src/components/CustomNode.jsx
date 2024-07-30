import React from "react";

const CustomNode = ({ x, y, width, height, fill, payload }) => {
  let depth = payload.level;
  let nodeColor = payload.color;
  return (
    <g transform={`translate(${x},${y})`}>
      {depth === 0 ? (
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill={nodeColor}
          rx={5}
          ry={5}
        />
      ) : (
        <>
          <rect
            x="0"
            y="0"
            width={width}
            height={22}
            fill={nodeColor}
            rx={5}
            ry={5}
          />
          <rect
            x="15"
            y="0"
            width="180"
            height={25}
            fill={nodeColor}
            rx={5}
            ry={5}
          />
        </>
      )}
      {depth !== 0 ? (
        <text
          x={width + 10}
          y={12}
          textAnchor="start"
          dominantBaseline="middle"
          fill="#000"
          fontSize={16}
        >
          {payload.val + " " + payload.displayName}
        </text>
      ) : null}
    </g>
  );
};

export default CustomNode;