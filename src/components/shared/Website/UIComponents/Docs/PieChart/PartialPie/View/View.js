import React from "react";
import { PieChart, Box } from "@basetoolkit/ui";

const PartialPie = () => {
  const series = [
    { value: 30, label: "Apples", color: "#FF6347" },
    { value: 50, label: "Bananas", color: "#FFD700" },
    { value: 20, label: "Cherries", color: "#8A2BE2" },
  ];
  return (
    <Box display="flex" justifyContent="center">
      <PieChart
        series={series}
        width={300}
        height={300}
        startAngle={0} // Starting angle for the pie
        endAngle={270} // Ends before a full circle (270 degrees)
        innerRadius={20} // Adds an inner hole
        labelColor="common.white"
      />
    </Box>
  );
};

export default PartialPie;
