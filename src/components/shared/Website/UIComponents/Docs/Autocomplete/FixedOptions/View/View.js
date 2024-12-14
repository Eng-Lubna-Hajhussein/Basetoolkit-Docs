import React, { useState } from 'react';
import { Autocomplete, TextField, Chip } from '@basetoolkit/ui';

const colorOptions = ['Red', 'Green', 'Blue', 'Yellow'];
const fixedColors = ['Green'];

export default function FixedOptions() {
  const [value, setValue] = useState([...fixedColors,colorOptions[0],colorOptions[2]]);

  return (
    <Autocomplete
      multiple
      options={colorOptions}
      value={value}
      onChange={(newValue) => {
        setValue([...fixedColors, ...newValue.filter((color) => !fixedColors.includes(color))]);
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option}
            sx={{mr:1}}
            {...getTagProps({ index })}
            onDelete={() => {
              setValue(value.filter((opt) => opt !== option));
            }}
            disabled={fixedColors.includes(option)}
          />
        ))
      }
      renderInput={(params) => <TextField {...params} label="Choose Colors" />}
    />
  );
}
