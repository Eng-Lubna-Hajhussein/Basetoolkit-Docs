import * as React from "react";
import { Box, PieChart } from "@basetoolkit/ui";

export default function BasicPie() {
  const series = [
    { value: 30, label: "Apples", color: "#FF6347" },
    { value: 50, label: "Bananas", color: "#FFD700" },
    { value: 20, label: "Cherries", color: "#8A2BE2" },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <PieChart series={series} width={300} height={300} labelColor="#fff" />
    </Box>
  );
}
