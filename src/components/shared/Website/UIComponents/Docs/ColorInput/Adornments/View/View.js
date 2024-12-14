import React, { useState } from "react";
import { ColorInput, SvgIcon } from "@basetoolkit/ui";

export default function CustomIcons() {
  const [color, setColor] = useState("#ff9900");

  return (
    <ColorInput
      label="Custom Icon"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      InputProps={{
        startAdornment: <SvgIcon icon="palette" />,
        endAdornment: <SvgIcon icon="brush" />,
      }}
    />
  );
}
