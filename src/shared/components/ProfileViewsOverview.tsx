"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartDropDownSelect from "./ChartDropDownSelect";

const data = [
  { day: "May 1", views: 350 },
  { day: "May 4", views: 650 },
  { day: "May 6", views: 580 },
  { day: "May 9", views: 1150 },
  { day: "May 11", views: 1250 },
  { day: "May 14", views: 920 },
  { day: "May 16", views: 1100 },
  { day: "May 19", views: 1480 },
  { day: "May 21", views: 1550 },
  { day: "May 24", views: 1210 },
  { day: "May 26", views: 1380 },
  { day: "May 28", views: 1650 },
  { day: "May 30", views: 1580 },
  { day: "May 31", views: 1780 },
];

export default function ProfileViewsOverview() {
  return (
    <div className="relative overflow-hidden rounded-sm  p-6 backdrop-blur-xl py-2 px-4 bg-gray-800/50 sm:col-span-2 lg:col-span-5 ">

      {/* Header */}
      <div className="relative z-10  flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Profile Views Overview
        </h2>

        <ChartDropDownSelect />
      </div>

      {/* Chart */}
      <div className=" h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            {/* Gradient */}
            <defs>
              <linearGradient
                id="colorViews"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#ff4ecd"
                  stopOpacity={0.55}
                />

                <stop
                  offset="100%"
                  stopColor="#ff4ecd"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid
              stroke="rgba(255,255,255,0.06)"
              vertical={false}
            />

            {/* X Axis */}
            <XAxis
              dataKey="day"
              tick={{
                fill: "#94a3b8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tick={{
                fill: "#94a3b8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
              domain={[0, 2000]}
              ticks={[0, 500, 1000, 1500, 2000]}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{
                stroke: "#ff4ecd",
                strokeWidth: 1,
                strokeDasharray: "5 5",
              }}
              contentStyle={{
                background: "#081120",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                color: "white",
              }}
            />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="views"
              stroke="#ff4ecd"
              strokeWidth={3}
              fill="url(#colorViews)"
              dot={{
                r: 4,
                strokeWidth: 2,
                fill: "#ff4ecd",
                stroke: "#ff4ecd",
              }}
              activeDot={{
                r: 7,
                fill: "#fff",
                stroke: "#ff4ecd",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}