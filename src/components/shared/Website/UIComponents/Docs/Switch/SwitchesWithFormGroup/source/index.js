export const source = `
import * as React from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
} from "@basetoolkit/ui";

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl variant="standard">
      <FormLabel>Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.gilad}
              onChange={handleChange}
              name="gilad"
            />
          }
          label="Gilad Gray"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.jason}
              onChange={handleChange}
              name="jason"
            />
          }
          label="Jason Killian"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.antoine}
              onChange={handleChange}
              name="antoine"
            />
          }
          label="Antoine Llorca"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
}
`;
