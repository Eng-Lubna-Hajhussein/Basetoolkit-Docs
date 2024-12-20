export const source = `
import * as React from "react";
import { Stack, Badge, SvgIcon } from "@basetoolkit/ui";

export default function ShowZeroBadge() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
      <Badge color="secondary" badgeContent={0}>
        <SvgIcon icon="settings" variant="filled" />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero>
        <SvgIcon icon="settings" variant="filled" />
      </Badge>
    </Stack>
  );
}
`;
