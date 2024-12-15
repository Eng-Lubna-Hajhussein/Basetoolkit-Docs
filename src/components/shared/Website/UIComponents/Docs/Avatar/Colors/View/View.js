import * as React from "react";
import { alpha, Avatar, Stack, useTheme,colors } from "@basetoolkit/ui";


export default function BackgroundLetterAvatars() {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={2}>
      <Avatar bgcolor="warning">A</Avatar>
      <Avatar bgcolor="secondary">B</Avatar>
      <Avatar bgcolor={alpha(theme.palette.secondary.main,.5)}>R</Avatar>
      <Avatar bgcolor={colors.red[500]}>L</Avatar>
      <Avatar bgcolor={colors.pink[500]}>LH</Avatar>
      <Avatar bgcolor={colors.green[500]}>YES</Avatar>
    </Stack>
  );
}
