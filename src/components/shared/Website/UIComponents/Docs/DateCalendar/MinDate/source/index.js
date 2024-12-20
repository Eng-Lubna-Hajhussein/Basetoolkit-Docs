export const source = `
import React from "react";
import { DateCalendar, Box } from "@basetoolkit/ui";

export default function MinDateDemo() {
  return (
    <Box display="flex" justifyContent="center">
      <DateCalendar label="Pick a Date" minDate="2023-09-01" />
    </Box>
  );
}
`;
