export const source = `
import * as React from "react";
import { Box, Slider } from "@basetoolkit/ui";

function valuetext(value) {
  return \`\${value}°C\`;
}

export default function DiscreteSliderSteps() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        step={0.00000001}
        marks
        tooltip
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
`;
