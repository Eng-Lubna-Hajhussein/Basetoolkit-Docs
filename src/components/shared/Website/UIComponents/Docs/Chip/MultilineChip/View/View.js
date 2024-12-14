import * as React from "react";
import { Chip, Box } from "@basetoolkit/ui";
import { chipClasses } from "@basetoolkit/ui/classes";

export default function MultilineChips() {
  return (
    <Box sx={{ width: 100 }}>
      <Chip
        sx={{
          height: "auto",
          [`& .${chipClasses.label}`]: {
            display: "block",
            whiteSpace: "normal",
          },
        }}
        label="This is a chip that has multiple lines."
      />
    </Box>
  );
}
