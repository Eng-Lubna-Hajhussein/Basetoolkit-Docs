export const source = `
import { Box, TimePicker } from "@basetoolkit/ui";
import * as React from "react";

export default function TimePickerShowSeconds() {
  return (
    <Box display="flex" justifyContent="center">
      <TimePicker
        label="Basic time field"
        showSeconds
        defaultValue="2022-04-17T15:30:45"
      />
    </Box>
  );
}
`