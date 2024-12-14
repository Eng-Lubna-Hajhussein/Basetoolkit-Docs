export const source = `
import * as React from "react";
import { Box, Gauge } from "@basetoolkit/ui";

export default function PointerGauge() {
  return (
    <Box display="flex" justifyContent="center">
      <Gauge width={200} height={200} value={50} hideText pointer={true} />
    </Box>
  );
}
`;
