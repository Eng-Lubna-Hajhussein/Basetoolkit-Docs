export const source = `
import React, { useState } from "react";
import { Autocomplete, TextField, Stack } from "@basetoolkit/ui";

const countryOptions = [
  { name: "Canada", code: "CA" },
  { name: "United States", code: "US" },
  { name: "Mexico", code: "MX" },
  { name: "Brazil", code: "BR" },
  { name: "Germany", code: "DE" },
];

export default function ControlledInputs() {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [countryInput, setCountryInput] = useState(countryOptions[0].name);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <div>{\`Selected: \${selectedCountry ? selectedCountry.name : null}\`}</div>
      <div>{\`Input: \${countryInput}\`}</div>

      <Autocomplete
        options={countryOptions}
        getOptionLabel={(option) => option.name}
        value={selectedCountry}
        onChange={(newValue) => setSelectedCountry(newValue)}
        inputValue={countryInput}
        onInputChange={(event, newInputValue) => setCountryInput(newInputValue)}
        renderInput={(params) => (
          <TextField {...params} label="Choose Country" />
        )}
      />
    </Stack>
  );
}
`;
