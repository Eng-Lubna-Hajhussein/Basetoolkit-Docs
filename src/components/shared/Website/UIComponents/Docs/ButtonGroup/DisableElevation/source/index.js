export const source = `
import React from "react";
import { Button, ButtonGroup } from "@basetoolkit/ui";

export default function DisableElevationButtonGroup() {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="disable elevation group"
    >
      <Button>Option A</Button>
      <Button>Option B</Button>
    </ButtonGroup>
  );
}
`;
