import * as React from "react";
import { Box, Stack, Slider, SvgIcon } from "@basetoolkit/ui";

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <SvgIcon variant="filled" color="common.black" icon="volume_down" />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <SvgIcon variant="filled" color="common.black" icon="volume_up" />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}
