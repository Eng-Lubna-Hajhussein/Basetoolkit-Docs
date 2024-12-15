import * as React from "react";
import { Chip, Stack } from "@basetoolkit/ui";

export default function SizesChips() {
  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <Stack direction="row" spacing={2}>
        <Chip label="Small" size="small" />
        <Chip label="Medium" size="medium" />
        <Chip label="Large" size="large" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Chip label="Small" size="small" variant="outlined" />
        <Chip label="Medium" size="medium" variant="outlined" />
        <Chip label="Large" size="large" variant="outlined" />
      </Stack>
    </Stack>
  );
}
