import React from "react";
import { DateCalendar, Box } from "@basetoolkit/ui";

export default function DisableFutureDatesDemo() {
  return (
    <Box display="flex" justifyContent="center">
      <DateCalendar
        label="Pick a Date"
        disableFuture={true}
      />
    </Box>
  );
}
