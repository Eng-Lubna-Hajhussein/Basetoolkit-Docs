export const source = `
import * as React from "react";
import { Box, Gauge } from "@basetoolkit/ui";

export default function CustomArcWidth() {
  return (
    <Box display="flex" justifyContent="center">
      <Gauge width={200} height={200} value={50} arcWidth={20} />
    </Box>
  );
}
`;
