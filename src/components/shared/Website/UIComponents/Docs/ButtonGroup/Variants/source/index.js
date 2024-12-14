export const source = `
import React from "react";
import { Button, ButtonGroup, Stack } from "@basetoolkit/ui";

export default function VariantButtonGroup() {
  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <ButtonGroup variant="contained" aria-label="contained button group">
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroup>
    </Stack>
  );
}
`;
