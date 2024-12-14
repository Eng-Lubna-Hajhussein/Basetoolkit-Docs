import * as React from "react";
import { Button, Stack } from "@basetoolkit/ui";

function ColorOptions() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="primary">Primary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
}

export default ColorOptions;
