import React, { useState } from 'react';
import { TextField, Autocomplete, Checkbox, Stack, Box } from '@basetoolkit/ui';

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
  { label: 'Option 5', value: 5 },
];

export default function CheckboxAutocompleteDemo() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={(option) => option.label}
        value={selectedOptions}
        onChange={(newValue) => setSelectedOptions(newValue)}
        disableCloseOnSelect
        renderOption={(props, option, { selected,onSelect }) => (
          <Box display='flex' alignItems='center' {...props} onChange={onSelect}>
            <Checkbox
              checked={selected}
              sx={{ marginRight: 1 }}
            />
            {option.label}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Select options" />}
      />
    </Stack>
  );
}
