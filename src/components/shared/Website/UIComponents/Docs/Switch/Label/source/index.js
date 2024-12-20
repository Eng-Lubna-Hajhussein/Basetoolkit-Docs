export const source = `
import * as React from "react";
import { FormGroup, FormControlLabel, Switch } from "@basetoolkit/ui";

export default function SwitchLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel required control={<Switch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  );
}
`;
