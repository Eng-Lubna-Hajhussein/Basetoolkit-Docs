export const source = `
import React, { useState } from "react";
import { ColorInput } from "@basetoolkit/ui";

export default function ControlledVsUncontrolled() {
  const [controlledColor, setControlledColor] = useState("#ff5733");

  return (
    <div>
      <div>
        <h3>Controlled Input</h3>
        <ColorInput
          label="Controlled"
          value={controlledColor}
          onChange={(e) => setControlledColor(e.target.value)}
        />
        <p>Selected Color: {controlledColor}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Uncontrolled Input</h3>
        <ColorInput label="Uncontrolled" defaultValue="#33c0ff" />
      </div>
    </div>
  );
}
`