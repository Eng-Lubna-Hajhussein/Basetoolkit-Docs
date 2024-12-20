export const source = `
import * as React from "react";
import { MenuItem, FormControl, Select } from "@basetoolkit/ui";

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState({ value: "", label: <em>None</em> });

  const handleChange = (newValue) => {
    setAge(newValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
`;
