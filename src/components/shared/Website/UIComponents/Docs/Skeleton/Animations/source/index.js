export const source = `
import * as React from "react";
import { Box, Skeleton } from "@basetoolkit/ui";

export default function Animations() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}
`;
