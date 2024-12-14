export const source = `
import * as React from "react";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
} from "@basetoolkit/ui";

export default function BasicSelect() {
  const [age, setAge] = React.useState({label:"Ten",value:10});

  const handleChange = (newValue) => {
    setAge(newValue);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
`;
