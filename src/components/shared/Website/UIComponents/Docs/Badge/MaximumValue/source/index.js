export const source = `
import * as React from "react";
import { Stack, Badge, SvgIcon } from "@basetoolkit/ui";

export default function BadgeMax() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
      <Badge color="secondary" badgeContent={99}>
        <SvgIcon icon="mail" variant="filled" />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <SvgIcon icon="mail" variant="filled" />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <SvgIcon icon="mail" variant="filled" />
      </Badge>
    </Stack>
  );
}
`;