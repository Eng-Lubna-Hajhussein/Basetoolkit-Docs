import * as React from "react";
import { Box, SparkLineChart } from "@basetoolkit/ui";

export default function BarPlotType() {
  return (
    <Box display="flex" justifyContent="center">
      <SparkLineChart
        data={[3, 7, 9, 5, 12, 8, 10]}
        height={100}
        width="100%"
        plotType="bar"
        showTooltip={true}
      />
    </Box>
  );
}
