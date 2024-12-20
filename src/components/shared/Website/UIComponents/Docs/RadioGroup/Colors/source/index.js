export const source = `
import React, { useState } from 'react';
import { Radio, colors } from '@basetoolkit/ui';

const CustomColorRadios = () => {
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
      <Radio {...controlProps('a')} />
      <Radio {...controlProps('b')} color="secondary" />
      <Radio {...controlProps('c')} color="success" />
      <Radio {...controlProps('d')} color="default" />
      <Radio
        {...controlProps('e')}
        sx={{
          color: colors.pink[800],
          '&.Mui-checked': { color: colors.pink[600] },
        }}
      />
    </div>
  );
};

export default CustomColorRadios;
`;
