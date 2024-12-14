import * as React from "react";
import { Button, Stack } from "@basetoolkit/ui";

function BasicVariants() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export default BasicVariants;
