export const source = `
import * as React from "react";
import { Typography, Pagination, Stack } from "@basetoolkit/ui";

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
`;
