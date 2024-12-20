export const source = `
import * as React from "react";
import { colors, Stack, Switch } from "@basetoolkit/ui";

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function ColorSwitches() {
  return (
    <Stack direction={"row"} spacing={2}>
      <Switch {...label} defaultChecked />
      <Switch {...label} defaultChecked color="secondary" />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="default" />
      <Switch {...label} defaultChecked color={colors.pink[600]} />
    </Stack>
  );
}
`;
