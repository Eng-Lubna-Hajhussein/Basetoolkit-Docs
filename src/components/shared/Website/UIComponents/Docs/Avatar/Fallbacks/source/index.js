export const source = `
import * as React from "react";
import { Avatar, Stack, colors } from "@basetoolkit/ui";

export default function FallbackAvatars() {
  const { deepOrange } = colors;
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        bgcolor={deepOrange[500]}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      <Avatar
        bgcolor={deepOrange[500]}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
}
`;
