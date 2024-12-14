import React from "react";
import { Stack, SvgIcon, Typography } from "@basetoolkit/ui";

function IconOptionsDemo() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack alignItems="center">
        <SvgIcon icon="home" variant="filled" />
        <Typography variant="caption">Home</Typography>
      </Stack>

      <Stack alignItems="center">
        <SvgIcon icon="settings" variant="outlined" />
        <Typography variant="caption">Settings</Typography>
      </Stack>

      <Stack alignItems="center">
        <SvgIcon icon="favorite" variant="round" />
        <Typography variant="caption">Favorite</Typography>
      </Stack>

      <Stack alignItems="center">
        <SvgIcon icon="alarm" variant="sharp" />
        <Typography variant="caption">Alarm</Typography>
      </Stack>
    </Stack>
  );
}

export default IconOptionsDemo;
