export const source = `
import * as React from "react";
import { ToggleButton, ToggleButtonGroup, SvgIcon } from "@basetoolkit/ui";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = ( newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <SvgIcon icon="format_align_left" />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <SvgIcon icon="format_align_center"  />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <SvgIcon icon="format_align_right"  />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <SvgIcon icon="format_align_justify" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;
