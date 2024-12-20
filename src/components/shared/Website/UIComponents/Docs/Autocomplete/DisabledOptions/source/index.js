export const source = `
import React from "react";
import { Autocomplete, TextField } from "@basetoolkit/ui";

const fruitOptions = [
  { name: "Apple", disabled: false },
  { name: "Banana", disabled: true },
  { name: "Cherry", disabled: false },
  { name: "Date", disabled: true },
];

export default function DisabledOptions() {
  return (
    <Autocomplete
      options={fruitOptions}
      getOptionLabel={(option) => option.name}
      getOptionDisabled={(option) => option.disabled}
      renderInput={(params) => <TextField {...params} label="Choose Fruit" />}
    />
  );
}
`;
