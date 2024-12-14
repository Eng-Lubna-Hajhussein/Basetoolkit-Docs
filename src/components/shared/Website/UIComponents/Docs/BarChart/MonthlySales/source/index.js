export const source = `
import * as React from "react";
import { BarChart, Box } from "@basetoolkit/ui";

export default function MonthlySales() {
  const monthlySalesData = {
    xAxis: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    yAxis: [0, 100, 200, 300, 400],
    series: [
      { category: "Jan", values: [{ id: 1, value: 150 }] },
      { category: "Feb", values: [{ id: 2, value: 180 }] },
      { category: "Mar", values: [{ id: 3, value: 250 }] },
      { category: "Apr", values: [{ id: 4, value: 300 }] },
      { category: "May", values: [{ id: 5, value: 370 }] },
      { category: "Jun", values: [{ id: 6, value: 400 }] },
    ],
  };
  return (
    <Box display="flex" justifyContent="center">
      <BarChart
        xAxis={monthlySalesData.xAxis}
        yAxis={monthlySalesData.yAxis}
        series={monthlySalesData.series}
        color="primary"
        overallColor={true}
        barSize={30}
        xGap={15}
        margin={{ top: 20, right: 20, bottom: 60, left: 40 }}
        width={600}
        height={400}
      />
    </Box>
  );
}
`;
