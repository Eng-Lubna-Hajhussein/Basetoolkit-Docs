import * as React from "react";
import { Box, Tooltip } from "@basetoolkit/ui";

export default function FollowCursorTooltips() {
  return (
    <Tooltip title="You don't have permission to do this" followCursor>
      <Box sx={{ bgcolor: "text.disabled", color: "divider", p: 2 }}>
        Disabled Action
      </Box>
    </Tooltip>
  );
}
