export const source = `
import React from "react";
import { DateCalendar, Box } from "@basetoolkit/ui";

export default function MaxDateDemo() {
  return (
    <Box display="flex" justifyContent="center">
      <DateCalendar
        label="Pick a Date"
        maxDate="2024-12-31"
      />
    </Box>
  );
}
`;
