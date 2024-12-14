export const source = `
import * as React from "react";
import { IconButton, Stack, SvgIcon } from "@basetoolkit/ui";

function IconButtonSizes() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton aria-label="small delete" size="small">
        <SvgIcon icon="delete" size="small" variant="filled" />
      </IconButton>
      <IconButton aria-label="medium delete">
        <SvgIcon icon="delete" size="medium" variant="filled" />
      </IconButton>
      <IconButton aria-label="large delete" size="large">
        <SvgIcon icon="delete" size="large" variant="filled" />
      </IconButton>
    </Stack>
  );
}

export default IconButtonSizes;
`;
