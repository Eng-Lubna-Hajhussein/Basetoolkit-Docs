export const source = `
import * as React from "react";
import { Stack, LinearProgress } from "@basetoolkit/ui";

export default function LinearColor() {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}
`;
