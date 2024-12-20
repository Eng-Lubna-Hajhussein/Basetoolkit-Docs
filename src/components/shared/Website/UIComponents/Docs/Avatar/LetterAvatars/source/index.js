export const source = `
import * as React from "react";
import { Avatar, Stack, colors } from "@basetoolkit/ui";

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar color="warning">R</Avatar>
      <Avatar bgcolor={colors.red[500]}>L</Avatar>
      <Avatar bgcolor={colors.pink[500]}>LH</Avatar>
      <Avatar bgcolor={colors.green[500]}>YES</Avatar>
    </Stack>
  );
}
`;
