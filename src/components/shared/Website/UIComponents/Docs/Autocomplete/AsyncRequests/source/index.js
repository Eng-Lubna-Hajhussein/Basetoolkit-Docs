export const source = `
import React, { useState } from "react";
import { TextField, Autocomplete, Stack } from "@basetoolkit/ui";

function simulateApiRequest(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

const asyncCountryOptions = [
  { name: "Canada" },
  { name: "United States" },
  { name: "Mexico" },
  { name: "Brazil" },
  { name: "Germany" },
  { name: "France" },
  { name: "Japan" },
  { name: "China" },
  { name: "Australia" },
];

export default function AsyncAutocompleteDemo() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOpen = async () => {
    setOpen(true);
    setLoading(true);
    await simulateApiRequest(1000); // Simulate loading time
    setOptions([...asyncCountryOptions]);
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        options={options}
        getOptionLabel={(option) => option.name}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Country"
            placeholder="Search for a country"
          />
        )}
      />
    </Stack>
  );
}
`;
