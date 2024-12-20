import * as React from "react";
import { Badge, Stack, SvgIcon } from "@basetoolkit/ui";

export default function SimpleBadge() {
  return (
    <Stack spacing={4} direction={"row"}>
      <Badge badgeContent={4} color="primary">
        <SvgIcon icon="mail" variant="filled" />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <SvgIcon icon="phone" variant="filled" />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <SvgIcon icon="settings" variant="filled" />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <SvgIcon icon="dashboard" variant="filled" />
      </Badge>
    </Stack>
  );
}
