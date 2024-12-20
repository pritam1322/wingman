"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

// Chart styles
const chartStyles = {
  wrapper: "w-full py-2 rounded-md bg-[#F9FAFB] text-gray-300 text-xs font-inter",
};

// Define chart data type
interface ChartData {
  weeks: string;
  consult: number;
  order: number;
}

// Chart data
const chartData: ChartData[] = [
  { weeks: "This week", consult: 22, order: 18 },
  { weeks: "Last week", consult: 16, order: 14 },
];

// Define chart configuration type
interface ChartConfig {
  label: string;
  color: string;
}

// Chart configuration
const chartConfig: Record<string, ChartConfig> = {
  consult: {
    label: "Consult",
    color: "#CDFBEE",
  },
  order: {
    label: "Order",
    color: "#134F49",
  },
};

export default function PastPeriodChart() {
  return (
    <div className={chartStyles.wrapper}>
      <BarChart
        width={260}
        height={285}
        data={chartData}
        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        barCategoryGap="10%" // Increased spacing between bars
      >
        
        {/* Axes */}
        <XAxis
          dataKey="weeks"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        {/* Bars */}
        {Object.keys(chartConfig).map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill={chartConfig[key].color}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </div>
  );
}
