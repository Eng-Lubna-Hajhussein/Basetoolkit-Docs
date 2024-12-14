export const source = `
import React, { useState } from 'react';
import { Switch, FormControlLabel ,SparkLineChart} from '@basetoolkit/ui';

const TooltipsExample = () => {
  const data = [4, 5, 6, 8, 10, 7, 9];
  const [showTooltip, setShowTooltip] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={<Switch checked={showTooltip} onChange={() => setShowTooltip(!showTooltip)} />}
        label="Show Tooltip"
      />
      <SparkLineChart
        data={data}
        height={100}
        width="100%"
        plotType="line"
        showTooltip={showTooltip}
      />
    </div>
  );
};

export default TooltipsExample;
`;
