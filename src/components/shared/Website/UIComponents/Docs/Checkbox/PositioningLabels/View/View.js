import React from 'react';
import { Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel } from '@basetoolkit/ui';

const PositioningLabels = () => {
  return (
    <FormControl>
      <FormLabel>Label Positions</FormLabel>
      <FormGroup row>
        <FormControlLabel label="Below" labelPlacement="bottom" control={<Checkbox />} />
        <FormControlLabel label="Right" labelPlacement="end" control={<Checkbox />} />
      </FormGroup>
    </FormControl>
  );
};

export default PositioningLabels;
