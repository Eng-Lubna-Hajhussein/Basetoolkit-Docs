export const source = `
import React, { useState } from "react";
import { Switch, FormControlLabel, LineChart } from "@basetoolkit/ui";

const InteractiveLineChart = () => {
  const xAxis = [0, 1, 2, 3, 4];
  const yAxis = [0, 10, 20, 30, 40];
  const [gridVertical, setGridVertical] = useState(true);
  const [gridHorizontal, setGridHorizontal] = useState(true);
  const [match, setMatch] = useState(true);

  const points = [
    { id: 1, value: [0, 10], matchID: 2, area: true },
    { id: 2, value: [1, 15], area: true },
    { id: 3, value: [2, 25], matchID: 4, area: true },
    { id: 4, value: [3, 35], area: true },
  ];

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={gridVertical}
            onChange={() => setGridVertical(!gridVertical)}
          />
        }
        label="Show Vertical Grid"
      />
      <FormControlLabel
        control={
          <Switch
            checked={gridHorizontal}
            onChange={() => setGridHorizontal(!gridHorizontal)}
          />
        }
        label="Show Horizontal Grid"
      />
      <FormControlLabel
        control={<Switch checked={match} onChange={() => setMatch(!match)} />}
        label="Match Points"
      />

      <LineChart
        xAxis={xAxis}
        yAxis={yAxis}
        points={points}
        width={400}
        height={300}
        grid={{ vertical: gridVertical, horizontal: gridHorizontal }}
        match={match}
      />
    </div>
  );
};

export default InteractiveLineChart;
`;
