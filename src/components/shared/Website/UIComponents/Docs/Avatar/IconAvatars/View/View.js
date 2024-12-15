import * as React from "react";
import { Avatar, Stack, SvgIcon, colors } from "@basetoolkit/ui";

export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar bgcolor={colors.blue[500]}>
        <SvgIcon variant="filled" color="common.white" icon="facebook" />
      </Avatar>
      <Avatar bgcolor={colors.pink[500]}>
        <SvgIcon variant="filled" color="common.white" icon="search" />
      </Avatar>
      <Avatar bgcolor={colors.green[500]}>
        <SvgIcon variant="filled" color="common.white" icon="account_box" />
      </Avatar>
      <Avatar bgcolor="warning">
        <SvgIcon variant="filled" color="common.white" icon="railway_alert" />
      </Avatar>
      <Avatar bgcolor={"error"}>
        <SvgIcon variant="filled" color="common.white" icon="error" />
      </Avatar>
      <Avatar bgcolor={colors.cyan[500]}>
        <SvgIcon variant="filled" color="common.white" icon="home" />
      </Avatar>
    </Stack>
  );
}
