import * as React from "react";
import {
  Box,
  Gauge,
} from "@basetoolkit/ui";

export default function CustomArc() {
  return (
    <Box display="flex" justifyContent="center">
      <Gauge
        width={200}
        height={200}
        value={75}
        startAngle={-90}
        endAngle={90}
      />
    </Box>
  );
}
