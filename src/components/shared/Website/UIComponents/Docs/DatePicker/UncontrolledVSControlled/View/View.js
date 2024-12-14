import { Box, DatePicker, Stack } from "@basetoolkit/ui";
import * as React from "react";

export default function DatePickerValue() {
  const [value, setValue] = React.useState("2022-04-17");

  return (
    <Stack direction={"row"} spacing={2}>
      <DatePicker label="Uncontrolled picker" defaultValue={"2022-04-17"} />
      <DatePicker
        label="Controlled picker"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Stack>
  );
}
