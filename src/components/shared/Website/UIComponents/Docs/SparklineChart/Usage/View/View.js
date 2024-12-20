import * as React from "react";
import { Stack, SparkLineChart } from "@basetoolkit/ui";

export default function Usage() {
  return (
    <Stack spacing={2}>
      <SparkLineChart
        data={[1, 4, 2, 5, 7, 2, 4, 6]}
        height={100}
        width={300}
        color="red"
      />
      <SparkLineChart
        data={[0, 2, 3, 4, 6, 8, 7, 9, 15, 6, 8, 7, 12]}
        yAxis={{
          min: 0,
          max: 100,
        }}
        height={100}
        width={300}
        area={true}
      />
      <SparkLineChart
        data={[3, -10, -2, 5, 7, -2, 4, 6]}
        height={100}
        width={300}
        curve="smooth"
        showTooltip={false}
        plotType="line"
        area
      />
      <SparkLineChart
        plotType="bar"
        data={[1, 4, 2, 5, 7, 2, 4, 6, 1]}
        height={100}
        width={200}
      />
    </Stack>
  );
}
