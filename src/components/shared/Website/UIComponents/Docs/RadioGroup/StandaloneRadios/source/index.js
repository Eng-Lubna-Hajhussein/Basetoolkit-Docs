export const source = `
import React, { useState } from 'react';
import { Radio } from '@basetoolkit/ui';

const StandaloneRadios = () => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        inputProps={{ 'aria-label': 'Option A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        inputProps={{ 'aria-label': 'Option B' }}
      />
    </div>
  );
};

export default StandaloneRadios;
`;
