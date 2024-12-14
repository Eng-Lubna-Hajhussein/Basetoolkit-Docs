import * as React from "react";
import { Box, Gauge } from "@basetoolkit/ui";

export default function HideText() {
  return (
    <Box display="flex" justifyContent="center">
      <Gauge width={200} height={200} value={40} hideText={true} />
    </Box>
  );
}
