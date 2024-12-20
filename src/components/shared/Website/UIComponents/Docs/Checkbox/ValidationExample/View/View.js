import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  FormControlLabel,
} from "@basetoolkit/ui";

const ValidationExample = () => {
  const [state, setState] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleChange = (name) => {
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const error = Object.values(state).filter((v) => v).length !== 2;

  return (
    <FormControl>
      <FormLabel>Pick Two Options</FormLabel>
      <FormGroup>
        <FormControlLabel
          label="Option 1"
          checked={state.option1}
          onChange={() => handleChange("option1")}
          control={<Checkbox />}
        />
        <FormControlLabel
          label="Option 2"
          checked={state.option2}
          onChange={() => handleChange("option2")}
          control={<Checkbox />}
        />
        <FormControlLabel
          label="Option 3"
          checked={state.option3}
          onChange={() => handleChange("option3")}
          control={<Checkbox />}
        />
      </FormGroup>
      {error && (
        <FormHelperText error>Select exactly two options</FormHelperText>
      )}
    </FormControl>
  );
};

export default ValidationExample;
