import * as React from "react";
import { Box, Slider } from "@basetoolkit/ui";

function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
        thumbColor="secondary.dark"
      />
    </Box>
  );
}
