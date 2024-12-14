export const source = `
import * as React from "react";
import { Button, Stack, Box } from "@basetoolkit/ui";

function ButtonSizes() {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={1}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small">
            Small
          </Button>
          <Button variant="outlined" size="medium">
            Medium
          </Button>
          <Button variant="outlined" size="large">
            Large
          </Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ButtonSizes;
`;
