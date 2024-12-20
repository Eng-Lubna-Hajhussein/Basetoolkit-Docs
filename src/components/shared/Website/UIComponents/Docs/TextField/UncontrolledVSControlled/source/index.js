export const source = `
import { Box, TextField } from '@basetoolkit/ui';
import * as React from 'react';

export default function StateTextFields() {
  const [name, setName] = React.useState('Cat in the Hat');

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1,my:3, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Controlled"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
      />
    </Box>
  );
}
`;
