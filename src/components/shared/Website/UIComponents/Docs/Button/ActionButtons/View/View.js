import * as React from "react";
import { Button, Stack } from "@basetoolkit/ui";

function ActionButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>Confirm</Button>
      <Button disabled>Not Available</Button>
      <Button href="#link">More Info</Button>
    </Stack>
  );
}

export default ActionButtons;
