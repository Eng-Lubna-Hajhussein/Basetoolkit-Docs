export const source = `
import { Box, TimeField } from "@basetoolkit/ui";
import * as React from "react";

export default function TimeFieldShowSeconds() {
  return (
    <Box display="flex" justifyContent="center">
      <TimeField
        label="Basic time field"
        showSeconds
        defaultValue="2022-04-17T15:30:45"
      />
    </Box>
  );
}
`;
