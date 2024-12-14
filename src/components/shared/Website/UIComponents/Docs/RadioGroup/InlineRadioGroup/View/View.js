import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@basetoolkit/ui';

const InlineRadioGroup = () => {
  return (
    <FormControl>
      <FormLabel id="inline-radio-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="inline-radio-group-label"
        name="inline-radio-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" control={<Radio />} label="Other" disabled />
      </RadioGroup>
    </FormControl>
  );
};

export default InlineRadioGroup;
