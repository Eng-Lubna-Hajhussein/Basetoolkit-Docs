export const source = `
import * as React from "react";
import { Pagination, Stack } from "@basetoolkit/ui";

export default function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        nextIcon="arrow_forward"
        previousIcon="arrow_back"
        count={10}
      />
    </Stack>
  );
}
`;
