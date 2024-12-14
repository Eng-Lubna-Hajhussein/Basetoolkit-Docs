export const source = `
import * as React from "react";
import { Badge, Stack, SvgIcon } from "@basetoolkit/ui";

export default function ColorBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <SvgIcon icon="mail" variant="filled" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <SvgIcon icon="mail" variant="filled" />
      </Badge>
    </Stack>
  );
}
`