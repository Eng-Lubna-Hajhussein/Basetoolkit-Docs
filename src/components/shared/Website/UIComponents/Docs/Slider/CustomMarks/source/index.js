export const source = `
import * as React from 'react';
import { Box,Slider } from '@basetoolkit/ui';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return \`\${value}°C\`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 300,height:50}}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        tooltip
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
`