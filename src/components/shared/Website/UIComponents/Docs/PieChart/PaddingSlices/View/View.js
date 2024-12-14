import * as React from "react";
import {
  Box,
  PieChart,
} from "@basetoolkit/ui";

export default function PaddingSlices() {
  const series = [
    { value: 25, label: "Oranges", color: "#FF4500" },
    { value: 45, label: "Mangoes", color: "#FFD700" },
    { value: 30, label: "Berries", color: "#4682B4" },
  ];

  return (
    <Box display="flex" justifyContent="center">
      <PieChart
        series={series}
        width={300}
        height={300}
        paddingAngle={10} // Adds padding between slices
        labelColor="#fff"
      />
    </Box>
  );
}
