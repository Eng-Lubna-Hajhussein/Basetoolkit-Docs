import * as React from "react";
import { Avatar, Stack, SvgIcon, colors } from "@basetoolkit/ui";

export default function VariantAvatars() {
  const { deepOrange, green } = colors;
  return (
    <Stack direction="row" spacing={2}>
      <Avatar bgcolor={deepOrange[500]} variant="square">
        N
      </Avatar>
      <Avatar bgcolor={green[500]} variant="rounded">
        <SvgIcon icon="assignment" color="common.white" variant="filled" />
      </Avatar>
    </Stack>
  );
}
