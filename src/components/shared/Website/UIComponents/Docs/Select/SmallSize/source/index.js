export const source = `
import * as React from "react";
import { MenuItem, FormControl, Select } from "@basetoolkit/ui";

export default function SelectSmall() {
  const [age, setAge] = React.useState({ value: "", label: <em>None</em> });

  const handleChange = (newValue) => {
    setAge(newValue);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        autoWidth
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
`