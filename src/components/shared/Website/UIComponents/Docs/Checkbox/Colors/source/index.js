export const source = `
import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@basetoolkit/ui";

const Colors = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        color="primary"
        label="Primary"
        defaultChecked
        control={<Checkbox />}
      />

      <FormControlLabel
        color="secondary"
        label="Secondary"
        defaultChecked
        control={<Checkbox />}
      />
      <FormControlLabel
        color="success"
        label="Success"
        defaultChecked
        control={<Checkbox />}
      />
      <FormControlLabel
        color="pink"
        label="Custom Pink"
        defaultChecked
        control={<Checkbox />}
      />
    </FormGroup>
  );
};

export default Colors;
`;
