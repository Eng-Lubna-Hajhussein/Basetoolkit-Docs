export const source = `
import React, { useState } from "react";
import { ColorInput } from "@basetoolkit/ui";

export default function FormPropsExample() {
  const [color, setColor] = useState("#ff5733");

  return (
    <div>
      <div>
        <h3>Disabled Input</h3>
        <ColorInput
          label="Disabled"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          disabled
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Read-Only Input</h3>
        <ColorInput label="Read Only" value="#33c0ff" readOnly />
      </div>
    </div>
  );
}
`;
