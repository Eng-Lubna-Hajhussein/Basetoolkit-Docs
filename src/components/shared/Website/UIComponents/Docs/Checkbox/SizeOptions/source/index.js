export const source = `
import * as React from 'react';
import { Checkbox } from '@basetoolkit/ui';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BasicCheckboxesDemo() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}
`