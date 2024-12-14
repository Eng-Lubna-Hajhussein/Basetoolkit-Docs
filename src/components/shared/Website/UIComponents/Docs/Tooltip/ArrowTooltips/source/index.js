export const source = `
import * as React from "react";
import { Button, Tooltip } from "@basetoolkit/ui";

export default function ArrowTooltips() {
  return (
    <Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>
  );
}
`;
