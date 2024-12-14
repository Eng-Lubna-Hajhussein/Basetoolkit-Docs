import * as React from "react";
import { Stack, SvgIcon, ToggleButton, ToggleButtonGroup } from "@basetoolkit/ui";

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <SvgIcon icon="format_align_left"  />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <SvgIcon icon="format_align_center" />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <SvgIcon icon="format_align_right" />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <SvgIcon icon="format_align_justify" />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control} aria-label="Medium sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
}
