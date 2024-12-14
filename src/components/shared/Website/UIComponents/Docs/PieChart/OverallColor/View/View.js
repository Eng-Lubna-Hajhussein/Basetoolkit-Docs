import * as React from "react";
import {
  Box,
  PieChart,
} from "@basetoolkit/ui";

export default function OverallColor() {
  const series = [
    { value: 30, label: "Apples", color: "#FF6347" },
    { value: 40, label: "Bananas", color: "#FFD700" },
    { value: 30, label: "Cherries", color: "#8A2BE2" },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <PieChart
        series={series}
        width={300}
        height={300}
        overallColor={true} // Applies an overall shading for slices
        color="primary" // Uses theme primary color for shading
        labelColor="common.white"
      />
    </Box>
  );
}
