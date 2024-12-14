import * as React from 'react';
import { BarChart, Box } from '@basetoolkit/ui';

export default function StackedData() {
  return (
    <Box display='flex' justifyContent='center'>
      <BarChart
        xAxis={["group A", "group B", "group C"]}
        yAxis={[0, 2, 4, 6, 8]}
        color={"red"}
        series={[
          {
            category: "group A",
            values: [
              { id: 1, value: 2, rootID: 0 },
              {
                id: 2,
                value: 2,
                rootID: 1,
                sameXPosition: true,
              },
              { id: 3, value: 2, rootID: 2, sameXPosition: false },
              { id: 6, value: 0.5, rootID: 3, sameXPosition: true },
              { id: 7, value: 0.5, rootID: 6, sameXPosition: true },
            ],
          },
          {
            category: "group B",
            values: [
              { id: 1, value: 4, rootID: 0 },
              { id: 2, value: 1, rootID: 1 },
              { id: 3, value: 2, rootID: 2, sameXPosition: true },
            ],
          },
          {
            category: "group C",
            values: [
              { id: 1, value: 4, rootID: 0 },
              { id: 2, value: 1, rootID: 1, sameXPosition: true },
              { id: 3, value: 2, rootID: 2, sameXPosition: true },
            ],
          },
        ]}
        barSize={40}
        barGap={20}
        xGap={40}
        margin={{ top: 20, right: 30, bottom: 50, left: 20 }}
        width={500}
        height={300}
        layout="vertical"
      />
    </Box>
  );
}
