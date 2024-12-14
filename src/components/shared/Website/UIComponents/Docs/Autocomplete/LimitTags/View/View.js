import React, { useState } from 'react';
import { Autocomplete, TextField } from '@basetoolkit/ui';

const countryOptions = ['Canada', 'Brazil', 'Australia', 'Japan', 'Germany', 'France'];

export default function LimitTags() {
  const [value, setValue] = useState([countryOptions[0], countryOptions[1], countryOptions[2]]);

  return (
    <Autocomplete
      multiple
      options={countryOptions}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      limitTags={2}
      renderInput={(params) => <TextField {...params} label="Select Countries" />}
    />
  );
}
