export const source = `
import * as React from "react";
import { Chip, Stack } from "@basetoolkit/ui";

export default function BasicChips() {
  return (
    <Stack direction="column" alignItems="start" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
`