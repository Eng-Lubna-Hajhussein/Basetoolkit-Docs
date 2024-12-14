import { Stack, TimePicker } from "@basetoolkit/ui";
import * as React from "react";

export default function TimePickerValue() {
  const [value, setValue] = React.useState("2022-04-17T15:30");

  return (
    <Stack direction={"row"} spacing={2}>
      <TimePicker
        label="Uncontrolled picker"
        defaultValue={"2022-04-17T15:30"}
      />
      <TimePicker
        label="Controlled picker"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Stack>
  );
}
