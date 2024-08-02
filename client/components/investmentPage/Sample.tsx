"use client";
import Graph from "./Graph";

import React from "react";
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
    pv: 9800,
    amt: 2290,
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


const Sample = () => {
  return (
    <div className="p-2 text-gray-300 font-quicksand
    ">
      <div className="h-screen grid grid-cols-9 grid-rows-9 gap-3 overflow-hidden ">
        <div className="row-span-1 col-span-9 flex overflow-hidden bg-gray-800">
          
        </div>
        <div className="row-span-8 col-span-2 overflow-hidden bg-gray-800">
          
        </div>
        <div className="row-span-6 col-span-5 overflow-hidden bg-gray-800">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
  
          
        </div>
        <div className="row-span-6 col-span-2 overflow-hidden bg-gray-800">
          
        </div>
        <div className="row-span-2 col-span-7 overflow-hidden bg-gray-800">
          
        </div>
      </div>
    </div>
  )
}

export default Sample
