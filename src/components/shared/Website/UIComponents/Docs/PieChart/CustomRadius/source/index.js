export const source = `
import * as React from "react";
import {
  Box,
  PieChart,
} from "@basetoolkit/ui";

export default function CustomRadius() {
  const series = [
    { value: 40, label: "Apples", color: "#FF6347" },
    { value: 30, label: "Bananas", color: "#FFD700" },
    { value: 30, label: "Cherries", color: "#8A2BE2" },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <PieChart
        series={series}
        width={300}
        height={300}
        innerRadius={30} // Shows a visible inner hole
        labelColor="#fff"
      />
    </Box>
  );
}
`;
