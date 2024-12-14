export const source = `
import * as React from "react";
import { Stack, Switch } from "@basetoolkit/ui";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  return (
    <Stack direction={"row"} spacing={2}>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </Stack>
  );
}
`