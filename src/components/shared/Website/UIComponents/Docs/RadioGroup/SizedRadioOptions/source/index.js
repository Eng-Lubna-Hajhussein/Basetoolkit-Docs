export const source = `
import React, { useState } from 'react';
import { Radio } from '@basetoolkit/ui';

const SizedRadioOptions = () => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    inputProps: { 'aria-label': item },
  });

  return (
    <div>
      <Radio {...controlProps('a')} size="small" />
      <Radio {...controlProps('b')} />
      <Radio {...controlProps('c')} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
    </div>
  );
};

export default SizedRadioOptions;
`;
