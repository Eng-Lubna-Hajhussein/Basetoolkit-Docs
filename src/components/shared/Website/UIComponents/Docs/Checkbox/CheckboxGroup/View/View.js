import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@basetoolkit/ui';

const CheckboxGroupDemo = () => {
  return (
    <FormGroup>
      <FormControlLabel label="Option 1" control={<Checkbox defaultChecked />} />
      <FormControlLabel label="Required Option" required control={<Checkbox />} />
      <FormControlLabel label="Disabled Option" control={<Checkbox disabled />} />
    </FormGroup>
  );
};

export default CheckboxGroupDemo;
