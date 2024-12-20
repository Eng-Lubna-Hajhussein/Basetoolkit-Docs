export const source = `
import * as React from 'react';
import { Box, TextField } from '@basetoolkit/ui';

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1,my:3, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField label="Filled success" variant="filled" color="success" focused />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </Box>
  );
}
`;
