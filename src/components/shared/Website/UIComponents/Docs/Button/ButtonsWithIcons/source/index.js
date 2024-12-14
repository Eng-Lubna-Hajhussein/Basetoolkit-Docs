export const source = `
import * as React from "react";
import { Button, Stack, SvgIcon } from "@basetoolkit/ui";

function IconButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<SvgIcon icon="delete" variant="filled" color="primary" />}
      >
        Remove
      </Button>
      <Button
        variant="contained"
        endIcon={<SvgIcon icon="send" variant="filled" color="common.white" />}
      >
        Send
      </Button>
    </Stack>
  );
}

export default IconButtons;
`;
