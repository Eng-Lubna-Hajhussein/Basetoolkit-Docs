import * as React from "react";
import { Badge, Stack, SvgIcon } from "@basetoolkit/ui";

export default function ColorBadge() {
  return (
    <Stack spacing={4} direction="row">
      <Badge badgeContent={4} color="secondary">
        <SvgIcon icon="settings" variant="filled" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <SvgIcon icon="settings" variant="filled" />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <SvgIcon icon="settings" variant="filled" />
      </Badge>
      <Badge badgeContent={4} color="warning">
        <SvgIcon icon="settings" variant="filled" />
      </Badge>
      <Badge badgeContent={4} color="red">
        <SvgIcon icon="settings" variant="filled" />
      </Badge>
    </Stack>
  );
}
