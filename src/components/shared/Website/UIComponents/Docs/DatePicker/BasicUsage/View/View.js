import * as React from "react";
import { Box, DatePicker } from "@basetoolkit/ui";

export default function BasicDatePicker() {
  return (
    <Box display="flex" justifyContent="center">
      <DatePicker label="Basic date picker" />
    </Box>
  );
}
