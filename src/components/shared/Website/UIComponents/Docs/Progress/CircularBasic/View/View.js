import * as React from "react";
import { CircularProgress, Box } from "@basetoolkit/ui";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
