"use client";

import dynamic from "next/dynamic";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
} from "recharts";
import React from "react";

// Chart styles
const chartStyles = {
  wrapper: "w-[600px] h-[300px] py-2 rounded-md bg-[#F9FAFB] text-gray-300 text-xs font-inter",
};

// Define the chart data type
interface ChartData {
  weeks: string;
  consultants: number;
  incoming: number;
  answered: number;
}

// Chart data
const chartData: ChartData[] = [
  { weeks: "Mon", consultants: 28, incoming: 8, answered: 18 },
  { weeks: "Tues", consultants: 28, incoming: 8, answered: 18 },
  { weeks: "Wed", consultants: 33, incoming: 12, answered: 22 },
  { weeks: "Thurs", consultants: 54, incoming: 9, answered: 9 },
  { weeks: "Fri", consultants: 31, incoming: 15, answered: 25 },
  { weeks: "Sat", consultants: 36, incoming: 11, answered: 21 },
  { weeks: "Sun", consultants: 36, incoming: 14, answered: 24 },
];

// Chart configuration type
interface ChartConfig {
  label: string;
  color: string;
}

// Chart configuration object
const chartConfig: Record<string, ChartConfig> = {
  consultants: {
    label: "Consultants",
    color: "#FFF3C6",
  },
  incoming: {
    label: "Incoming",
    color: "#15B79F",
  },
  answered: {
    label: "Answered",
    color: "#8A94A6",
  },
};

// Dynamically load the chart (to ensure no SSR issues)
const ConsultantBarChart = dynamic(() => Promise.resolve(() => {
  return (
    <div className={chartStyles.wrapper}>
      <ResponsiveContainer>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          barCategoryGap="25%"
        >
          {/* Grid Lines */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          {/* X Axis */}
          <XAxis dataKey="weeks" tickLine={false} axisLine={false} tickMargin={10} />
          {/* Left Y Axis */}
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            label={{
              value: "CONSULTANTS",
              angle: -90,
              position: "insideLeft",
              offset: -10,
              fontSize: 11,
              fill: "#B0B5C0",
            }}
          />
          {/* Right Y Axis */}
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            orientation="right"
            label={{
              value: "EXPERTS ONLINE",
              angle: -90,
              position: "insideRight",
              offset: 10,
              fontSize: 11,
              fill: "#B0B5C0",
            }}
            yAxisId="right"
          />
          {/* Tooltip */}
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }}
            labelStyle={{ color: "#333" }}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
          />
          {/* Bars and Lines */}
          {Object.keys(chartConfig).map((key) =>
            key === "consultants" ? (
              <Bar
                key={key}
                dataKey={key}
                fill={chartConfig[key].color}
                radius={[4, 4, 0, 0]}
              />
            ) : (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={chartConfig[key].color}
                yAxisId="right"
              />
            )
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}), { ssr: false });

// Export the dynamically loaded chart
export default ConsultantBarChart;
