export const source = `
import { Stack, TimeField } from "@basetoolkit/ui";
import * as React from "react";

export default function TimeFieldValue() {
  const [value, setValue] = React.useState("2022-04-17T15:30");

  return (
    <Stack direction={"row"} spacing={2}>
      <TimeField label="Uncontrolled field" defaultValue={"2022-04-17T15:30"} />
      <TimeField
        label="Controlled field"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Stack>
  );
}
`;
