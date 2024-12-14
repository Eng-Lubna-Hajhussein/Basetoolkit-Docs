import { Box, DatePicker } from "@basetoolkit/ui";
import * as React from "react";

export default function BasicDatePicker() {
  return (
    <Box display="flex" justifyContent="center">
      <DatePicker label="Basic date picker" />
    </Box>
  );
}
