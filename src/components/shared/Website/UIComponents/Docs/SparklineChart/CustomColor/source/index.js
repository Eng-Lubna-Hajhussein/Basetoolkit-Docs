export const source = `
import * as React from "react";
import { Box, SparkLineChart } from "@basetoolkit/ui";

export default function CustomColor() {
  return (
    <Box display="flex" justifyContent="center">
      <SparkLineChart
        data={[4, 5, 6, 8, 10, 7, 9]}
        height={100}
        width="100%"
        plotType="line"
        color="secondary"
        showTooltip={true}
      />
    </Box>
  );
}
`;
