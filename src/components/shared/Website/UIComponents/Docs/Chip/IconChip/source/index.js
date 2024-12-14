export const source = `
import * as React from "react";
import { Chip, Stack, SvgIcon } from "@basetoolkit/ui";

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<SvgIcon icon="face" variant="filled" fontSize={20} />} label="With Icon" />
      <Chip
        icon={<SvgIcon icon="face" variant="filled" fontSize={20} />}
        label="With Icon"
        variant="outlined"
      />
    </Stack>
  );
}
`