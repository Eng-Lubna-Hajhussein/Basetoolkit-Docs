export const source = `
import * as React from "react";
import { CircularProgress, Stack } from "@basetoolkit/ui";

export default function CircularSize() {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <CircularProgress size="30px" />
      <CircularProgress size={40} />
      <CircularProgress size="3rem" />
    </Stack>
  );
}
`;
