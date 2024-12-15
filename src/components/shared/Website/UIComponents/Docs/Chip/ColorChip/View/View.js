import * as React from "react";
import { Chip, Stack } from "@basetoolkit/ui";

export default function ColorChips() {
  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <Stack direction="row" spacing={2}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
        <Chip label="default" color="default" />
        <Chip label="error" color="error" />
        <Chip label="info" color="info" />
        <Chip label="success" color="success" />
        <Chip label="warning" color="warning" />
        <Chip label="red" color="red" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
        <Chip label="default" color="default" variant="outlined" />
        <Chip label="error" color="error" variant="outlined" />
        <Chip label="info" color="info" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
        <Chip label="warning" color="warning" variant="outlined" />
        <Chip label="red" color="red" variant="outlined" />
      </Stack>
    </Stack>
  );
}
