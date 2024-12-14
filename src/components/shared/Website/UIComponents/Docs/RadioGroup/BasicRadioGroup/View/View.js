import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@basetoolkit/ui';

const BasicRadioGroup = () => {
  return (
    <FormControl>
      <FormLabel id="basic-radio-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="basic-radio-group-label"
        defaultValue="female"
        name="basic-radio-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};

export default BasicRadioGroup;
