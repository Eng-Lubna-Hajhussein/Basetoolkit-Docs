import * as React from "react";
import { Box, LineChart } from "@basetoolkit/ui";

export default function MatchSpecificPoints() {
  const xAxis = [0, 1, 2, 3, 4];
  const yAxis = [0, 10, 20, 30, 40];
  const points = [
    { id: 1, value: [0, 10], matchID: 2 },
    { id: 2, value: [1, 15] },
    { id: 3, value: [2, 25], matchID: 4 },
    { id: 4, value: [3, 35] },
  ];

  return (
    <Box display="flex" justifyContent="center">
      <LineChart
        xAxis={xAxis}
        yAxis={yAxis}
        points={points}
        width={400}
        height={300}
        match={true}
        matchColor="warning"
        pointColor="secondary"
      />
    </Box>
  );
}
