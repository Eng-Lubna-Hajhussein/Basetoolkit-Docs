export const source = `
import { Box, MobileDatePicker } from "@basetoolkit/ui";
import * as React from "react";

export default function BasicDatePicker() {
  return (
    <Box display="flex" justifyContent="center">
      <MobileDatePicker label="Basic date picker" />
    </Box>
  );
}
`;
