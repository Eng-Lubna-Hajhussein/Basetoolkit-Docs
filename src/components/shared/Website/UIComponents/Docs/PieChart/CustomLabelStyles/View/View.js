import * as React from "react";
import { Box, PieChart } from "@basetoolkit/ui";

export default function CustomLabelStyles() {
  const series = [
    { value: 20, label: "Apples", color: "#FF6347" },
    { value: 60, label: "Bananas", color: "#FFD700" },
    { value: 20, label: "Cherries", color: "#8A2BE2" },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <PieChart
        series={series}
        width={300}
        height={300}
        labelColor="secondary"
        labelSize={16}
      />
    </Box>
  );
}
