import * as React from "react";
import { IconButton, SvgIcon, Tooltip } from "@basetoolkit/ui";

export default function BasicTooltip() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <SvgIcon icon="delete" variant="filled" />
      </IconButton>
    </Tooltip>
  );
}
