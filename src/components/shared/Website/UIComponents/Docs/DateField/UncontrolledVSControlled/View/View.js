import * as React from "react";
import { DateField, Stack } from "@basetoolkit/ui";

export default function DateFieldValue() {
  const [value, setValue] = React.useState("2022-04-17");

  return (
    <Stack direction={"row"} spacing={2}>
      <DateField label="Uncontrolled field" defaultValue={"2022-04-17"} />
      <DateField
        label="Controlled field"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Stack>
  );
}
