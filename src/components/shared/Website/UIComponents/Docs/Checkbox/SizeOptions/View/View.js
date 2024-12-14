import React from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@basetoolkit/ui";

const SizeOptions = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        size="small"
        label="Small"
        defaultChecked
        control={<Checkbox />}
      />

      <FormControlLabel label="Medium" defaultChecked control={<Checkbox />} />
      <FormControlLabel
        label="Large"
        defaultChecked
        size="large"
        control={<Checkbox />}
      />
    </FormGroup>
  );
};

export default SizeOptions;
