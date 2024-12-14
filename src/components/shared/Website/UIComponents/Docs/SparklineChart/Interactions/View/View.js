import React, { useState } from 'react';
import { Switch, FormControlLabel ,SparkLineChart} from '@basetoolkit/ui';

const DynamicControlsExample = () => {
  const data = [4, 5, 6, 8, 10, 7, 9];
  const [showTooltip, setShowTooltip] = useState(true);
  const [showHighlight, setShowHighlight] = useState(true);

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={showTooltip} onChange={() => setShowTooltip(!showTooltip)} />}
        label="Show Tooltip"
      />
      <FormControlLabel
        control={<Switch checked={showHighlight} onChange={() => setShowHighlight(!showHighlight)} />}
        label="Show Highlight"
      />
      <SparkLineChart
        data={data}
        height={100}
        width="100%"
        plotType="line"
        showTooltip={showTooltip}
        showHighlight={showHighlight}
      />
    </div>
  );
};

export default DynamicControlsExample;
