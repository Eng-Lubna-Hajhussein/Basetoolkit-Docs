export const source = `
import * as React from "react";
import { Skeleton, Box, colors } from "@basetoolkit/ui";

export default function SkeletonColor() {
    const {grey} = colors;
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        p: 8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Skeleton
        style={{ background: grey[900] }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
  );
}
`