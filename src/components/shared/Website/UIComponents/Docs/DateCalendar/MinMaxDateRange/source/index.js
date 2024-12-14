export const source = `
import React from "react";
import { DateCalendar, Box } from "@basetoolkit/ui";

export default function DateRangeDemo() {
  return (
    <Box display="flex" justifyContent="center">
      <DateCalendar
        label="Pick a Date"
        minDate="2023-11-01"
        maxDate="2024-11-21"
      />
    </Box>
  );
}
`