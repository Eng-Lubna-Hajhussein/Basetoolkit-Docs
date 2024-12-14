import React, { useState } from 'react';
import { Checkbox } from '@basetoolkit/ui';

const StateControl = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export default StateControl;
