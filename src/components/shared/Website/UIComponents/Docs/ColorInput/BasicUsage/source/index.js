export const source = `
import React, { useState } from "react";
import { ColorInput } from "@basetoolkit/ui";

export default function BasicUsage() {
  const [color, setColor] = useState("#ff0000");

  return (
    <ColorInput
      label="Pick a Color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
}
`