import * as React from "react";
import { SvgIcon, ToggleButton, ToggleButtonGroup } from "@basetoolkit/ui";

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState("list");

  const handleChange = (nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <SvgIcon variant="filled" icon="view_list" />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <SvgIcon variant="filled" icon="view_module" />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
        <SvgIcon variant="filled" icon="view_quilt" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
