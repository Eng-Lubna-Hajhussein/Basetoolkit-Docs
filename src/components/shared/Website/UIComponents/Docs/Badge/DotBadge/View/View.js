import * as React from "react";
import { Box, Badge, SvgIcon } from "@basetoolkit/ui";

export default function DotBadge() {
  return (
    <Box sx={{ color: "action.active" }}>
      <Badge color="secondary" variant="dot">
        <SvgIcon icon="mail" variant="filled" />
      </Badge>
    </Box>
  );
}
