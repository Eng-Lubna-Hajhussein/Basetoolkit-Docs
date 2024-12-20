export const source = `
import * as React from "react";
import { DatePicker, Stack } from "@basetoolkit/ui";

export default function FormPropsDatePickers() {
  return (
    <Stack spacing={2} justifyContent="center">
      <DatePicker label="secondary" inputColor="secondary" color="secondary" />
      <DatePicker label="yellow" inputColor="yellow" color="yellow" />
      <DatePicker label="black" inputColor="black" color="black" />
    </Stack>
  );
}
`;
