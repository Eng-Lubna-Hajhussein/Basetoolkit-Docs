import * as React from "react";
import { IconButton, Stack, SvgIcon } from "@basetoolkit/ui";

function IconButtonsDemo() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="remove">
        <SvgIcon icon="delete" variant="filled" />
      </IconButton>
      <IconButton aria-label="alarm" color="secondary">
        <SvgIcon icon="delete" color="secondary" variant="filled" />
      </IconButton>
      <IconButton aria-label="cart" color="primary">
        <SvgIcon icon="shopping_cart" color="primary" variant="filled" />
      </IconButton>
    </Stack>
  );
}

export default IconButtonsDemo;
