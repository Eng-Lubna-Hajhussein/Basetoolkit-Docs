export const source = `
import * as React from "react";
import { DatePicker, Stack } from "@basetoolkit/ui";

export default function FormPropsDatePickers() {
  return (
    <Stack spacing={2}>
      <DatePicker label="disabled" value={"2022-12-29"} disabled />
      <DatePicker label="readOnly" value={"2022-04-17"} readOnly />
      <DatePicker label="name" name="startDate" />
    </Stack>
  );
}
`;
