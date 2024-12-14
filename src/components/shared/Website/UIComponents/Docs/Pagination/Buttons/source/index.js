export const source = `
import * as React from "react";
import { Pagination, Stack } from "@basetoolkit/ui";

export default function PaginationButtons() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  );
}
`;
