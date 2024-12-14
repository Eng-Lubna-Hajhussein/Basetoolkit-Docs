import * as React from "react";
import {
  Box,
  Gauge,
} from "@basetoolkit/ui";

export default function CustomColors() {
  return (
    <Box display="flex" justifyContent="center">
      <Gauge
        width={200}
        height={200}
        value={80}
        color="secondary"
        textColor="secondary"
      />
    </Box>
  );
}
