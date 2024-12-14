export const source = `
import * as React from "react";
import { Pagination, Stack } from "@basetoolkit/ui";

export default function PaginationSize() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Stack>
  );
}
`;
