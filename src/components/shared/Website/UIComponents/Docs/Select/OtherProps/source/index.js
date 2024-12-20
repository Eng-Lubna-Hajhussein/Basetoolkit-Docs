export const source = `
import * as React from "react";
import {
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Stack,
} from "@basetoolkit/ui";

export default function SelectOtherProps() {
  const [age, setAge] = React.useState({ value: "", label: <em>None</em> });

  const handleChange = (newValue) => {
    setAge(newValue);
  };

  return (
    <Stack direction={"row"}>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          autoWidth
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          autoWidth
          label="Age"
          onChange={handleChange}
          renderValue={(value) => \`⚠️  - \${value}\`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl readOnly sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          autoWidth
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          autoWidth
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </Stack>
  );
}
`;
