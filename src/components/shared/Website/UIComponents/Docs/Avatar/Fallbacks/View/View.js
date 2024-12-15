import * as React from "react";
import { Avatar, Stack, colors } from "@basetoolkit/ui";

export default function FallbackAvatars() {
  const { deepOrange } = colors;
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        bgcolor={"warning"}
        alt="Lubna Hajhussein"
        src="/broken-image.jpg"
      >
        L
      </Avatar>
      <Avatar
        bgcolor={deepOrange[600]}
        alt="Omar Ali"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
}
