import * as React from "react";
import { BarChart, Box } from "@basetoolkit/ui";

export default function QuarterlyGrowth() {
  const quarterlyGrowthData = {
    xAxis: ["Q1", "Q2", "Q3", "Q4"],
    yAxis: [0, 50, 100, 150, 200],
    series: [
      {
        category: "Q1",
        values: [{ id: 1, value: 45, color: "teal" }],
      },
      {
        category: "Q2",
        values: [{ id: 2, value: 80, color: "violet" }],
      },
      {
        category: "Q3",
        values: [{ id: 3, value: 120, color: "orange" }],
      },
      {
        category: "Q4",
        values: [{ id: 4, value: 160, color: "purple" }],
      },
    ],
  };
  return (
    <Box display="flex" justifyContent="center">
      <BarChart
        xAxis={quarterlyGrowthData.xAxis}
        yAxis={quarterlyGrowthData.yAxis}
        series={quarterlyGrowthData.series}
        barSize={40}
        xGap={20}
        color="success"
      />
    </Box>
  );
}
