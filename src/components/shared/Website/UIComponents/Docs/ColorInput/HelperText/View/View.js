import React, { useState } from "react";
import { ColorInput } from "@basetoolkit/ui";

export default function WithHelperText() {
  const [color, setColor] = useState("#00ff00");

  return (
    <ColorInput
      label="Color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      helperText="Pick your favorite color"
    />
  );
}
