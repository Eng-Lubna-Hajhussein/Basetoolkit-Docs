export const source = `
import * as React from "react";
import { Chip, Stack } from "@basetoolkit/ui";

export default function ColorChips() {
  return (
    <Stack spacing={1} sx={{ alignItems: "center" }}>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
    </Stack>
  );
}
`