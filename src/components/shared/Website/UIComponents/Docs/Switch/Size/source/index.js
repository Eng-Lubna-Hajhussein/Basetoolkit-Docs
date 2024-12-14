export const source = `
import * as React from "react";
import { Stack, Switch } from "@basetoolkit/ui";

const label = { inputProps: { "aria-label": "Size switch demo" } };

export default function SwitchesSize() {
  return (
    <Stack direction={"row"} spacing={2} alignItems="center">
      <Switch {...label} defaultChecked size="small" />
      <Switch {...label} defaultChecked />
    </Stack>
  );
}
`;
