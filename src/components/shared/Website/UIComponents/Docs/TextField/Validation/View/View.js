import { Box, Stack, TextField } from "@basetoolkit/ui";
import * as React from "react";

export default function ValidationTextFields() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Stack spacing={3}>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Error Input"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Error Input"
          helperText="Incorrect."
        />
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Error Input"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Error Input"
          helperText="Incorrect."
          variant="filled"
        />
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Error Input"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Error Input"
          helperText="Incorrect."
          variant="standard"
        />
      </Stack>
    </Box>
  );
}
