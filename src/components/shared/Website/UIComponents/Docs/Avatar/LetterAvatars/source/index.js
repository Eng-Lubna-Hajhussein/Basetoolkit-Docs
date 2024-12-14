export const source = `
import * as React from "react";
import { Avatar, Stack, colors } from "@basetoolkit/ui";

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar bgcolor={colors.deepOrange[500]}>N</Avatar>
      <Avatar bgcolor={colors.deepPurple[500]}>OP</Avatar>
    </Stack>
  );
}
`