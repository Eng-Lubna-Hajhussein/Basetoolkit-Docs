import * as React from "react";
import { Box, SparkLineChart } from "@basetoolkit/ui";

export default function CustomYAxis() {
  return (
    <Box display="flex" justifyContent="center">
      <SparkLineChart
        data={[5, 10, 8, 12, 6, 14, 10]}
        height={100}
        width="100%"
        plotType="line"
        showTooltip={true}
        yAxis={{ min: 0, max: 20 }}
      />
    </Box>
  );
}
