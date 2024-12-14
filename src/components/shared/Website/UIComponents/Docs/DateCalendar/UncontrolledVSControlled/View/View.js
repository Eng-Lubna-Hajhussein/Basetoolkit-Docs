import { DateCalendar, Stack } from "@basetoolkit/ui";
import * as React from "react";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(("2022-04-17"));

  return (
    <Stack spacing={3}>
      <DateCalendar defaultValue={"2022-04-17"} label="uncontrolled" />
      <DateCalendar label="controlled" value={value} onChange={(newValue) => setValue(newValue)} />
    </Stack>
  );
}
