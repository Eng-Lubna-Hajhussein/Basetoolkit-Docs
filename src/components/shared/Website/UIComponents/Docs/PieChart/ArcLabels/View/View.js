import * as React from "react";
import {
  Box,
  PieChart,
} from "@basetoolkit/ui";

export default function ArcLabels() {
  const series = [
    { value: 10, label: "Apples", color: "#FF6347" },
    { value: 70, label: "Bananas", color: "#FFD700" },
    { value: 20, label: "Cherries", color: "#8A2BE2" },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <PieChart
        series={series}
        width={300}
        height={300}
        labelColor="#fff"
        arcLabelMinAngle={15} // Displays label only if the arc is large enough
      />
    </Box>
  );
}
