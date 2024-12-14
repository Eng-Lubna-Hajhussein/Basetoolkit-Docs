import React from "react";
import { DateCalendar, Box } from "@basetoolkit/ui";

export default function DisablePastDatesDemo() {
  return (
    <Box display="flex" justifyContent="center">
      <DateCalendar
        label="Pick a Date"
        disablePast={true}
      />
    </Box>
  );
}
