import React from "react";
import {
  PieChart,
  Box,
} from "@basetoolkit/ui";

const HideLabels = () => {
  const series = [
    { value: 35, label: "Apples", color: "#FF6347" },
    { value: 35, label: "Bananas", color: "#FFD700" },
    { value: 30, label: "Cherries", color: "#8A2BE2" },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <PieChart
        series={series}
        width={300}
        height={300}
        hideLabel={true} // Hides all labels on slices
        labelColor="#fff"
      />
    </Box>
  );
};

export default HideLabels;
