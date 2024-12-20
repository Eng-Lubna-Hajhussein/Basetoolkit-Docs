import { DateCalendar, Stack } from "@basetoolkit/ui";
import * as React from "react";

export default function DateCalendarFormProps() {
  return (
    <Stack spacing={3}>
      <DateCalendar label="disabled" defaultValue={"2022-04-17"} disabled />

      <DateCalendar label="readOnly" defaultValue={"2022-04-17"} readOnly />
    </Stack>
  );
}
