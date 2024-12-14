export const source = `
import * as React from "react";
import { Box, useTheme, PieChart } from "@basetoolkit/ui";

export default function Usage() {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent="center">
      <PieChart
        series={[
          {
            value: 25,
            label: "A",
            color: theme.palette.primary.main,
            arcLabel: (item) => \`\${item.label} (\${item.value})\`,
          },
          { value: 25, label: "B", color: theme.palette.secondary.main },
          { value: 25, label: "C", color: theme.palette.warning.main },
          { value: 25, label: "D", color: theme.palette.error.main },
        ]}
        color="black"
        width={300}
        height={200}
        paddingAngle={0}
        innerRadius={50}
        arcLabelMinAngle={60}
        labelColor="common.white"
        labelSize={15}
        // startAngle={-90}
        // endAngle={180}
      />
    </Box>
  );
}
`