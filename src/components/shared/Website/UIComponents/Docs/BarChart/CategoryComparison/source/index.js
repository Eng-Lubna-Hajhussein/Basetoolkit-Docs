export const source = `
import * as React from "react";
import { BarChart, Box } from "@basetoolkit/ui";

export default function CategoryComparison() {
  const categoryComparisonData = {
    xAxis: ["Electronics", "Clothing", "Grocery"],
    yAxis: [0, 100, 200, 300, 400],
    series: [
      {
        category: "Electronics",
        values: [
          { id: 1, value: 150, color: "blue" },
          { id: 2, value: 100, color: "orange" },
        ],
      },
      {
        category: "Clothing",
        values: [
          { id: 3, value: 180, color: "green" },
          { id: 4, value: 220, color: "purple" },
        ],
      },
      {
        category: "Grocery",
        values: [
          { id: 5, value: 120, color: "red" },
          { id: 6, value: 160, color: "yellow" },
        ],
      },
    ],
  };
  return (
    <Box display="flex" justifyContent="center">
      <BarChart
        xAxis={categoryComparisonData.xAxis}
        yAxis={categoryComparisonData.yAxis}
        series={categoryComparisonData.series}
        barGap={5}
        width={700}
        height={350}
        color="secondary"
      />
      ;
    </Box>
  );
}
`;
