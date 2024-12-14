import * as React from "react";
import { SvgIcon, ToggleButton, ToggleButtonGroup } from "@basetoolkit/ui";

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <SvgIcon icon="format_bold" />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <SvgIcon icon="format_italic" />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <SvgIcon icon="format_underlined" />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <SvgIcon icon="format_color_fill" />
        <SvgIcon icon="arrow_drop_down" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
