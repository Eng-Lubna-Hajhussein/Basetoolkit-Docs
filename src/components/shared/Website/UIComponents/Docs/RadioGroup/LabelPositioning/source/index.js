export const source = `
import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@basetoolkit/ui";

const LabelPositioning = () => {
  return (
    <FormControl>
      <FormLabel id="label-position-group">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="label-position-group"
        name="label-position-group"
        defaultValue="top"
      >
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
  );
};

export default LabelPositioning;
`;
