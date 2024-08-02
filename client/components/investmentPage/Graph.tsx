"use client";

import React from "react";
import { chartData } from "@/data";
import { ConvertedDataType } from "./InvestmentPage";

import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Graph = ({formData}: {formData:ConvertedDataType[] }) => {
  console.log(chartData)
  return (
    <div className=" flex justify-center items-center h-full w-full">
        <ResponsiveContainer height="95%" width="90%">
  <AreaChart
    data={formData}
    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
  >
    <defs>
      <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
        <stop
          offset="5%"
          stopColor="#4FC978"   // Neon green color
          stopOpacity={0.8}
        />
        <stop
          offset="95%"
          stopColor="#4FC978"  // Neon green color
          stopOpacity={0}
        />
      </linearGradient>
    </defs>
    
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip
      contentStyle={{ backgroundColor: "#111827" }}
      itemStyle={{ color: "#32CD32" }}  // Neon green color for tooltip items
    />
    <Area
      type="monotone"
      dataKey="value"
      stroke="#006400"  // Dark green for the stroke
      fillOpacity={1}
      fill="url(#chartColor)"
      strokeWidth={0.5}
    />
  </AreaChart>
</ResponsiveContainer>

    </div>
  );
};

export default Graph;
