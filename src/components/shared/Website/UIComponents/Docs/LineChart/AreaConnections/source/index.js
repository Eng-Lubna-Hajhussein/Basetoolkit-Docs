export const source = `
import * as React from "react";
import { Box, LineChart } from "@basetoolkit/ui";

export default function AreaConnections() {
  return (
    <Box display="flex" justifyContent="center">
      <LineChart
        xAxis={[0, 1, 2, 3, 5, 5.5, 8, 10]}
        yAxis={[0, 2, 4, 5.5, 6, 8, 10]}
        points={[
          { id: 4, value: [5, 8.5], area: true },
          { id: 1, value: [1, 2], area: true },
          { id: 2, value: [2, 5.5], matchID: 1, area: true },
          { id: 5, value: [5.5, 10], matchID: 4, area: true },
          { id: 3, value: [3, 2], matchID: 2, area: true },
          { id: 6, value: [8, 1.5], matchID: 5, area: true },
          { id: 7, value: [10, 5], matchID: 6, area: true },
        ]}
        match={true}
        width={400}
        height={300}
        grid={{ vertical: true, horizontal: true }}
        areaColor="primary.light"
        pointColor="inherit"
        matchColor="primary"
      />
    </Box>
  );
}
`;
