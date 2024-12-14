import * as React from "react";
import { Avatar, Stack, SvgIcon, colors } from "@basetoolkit/ui";

export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <SvgIcon variant="filled" color="common.white" icon="folder" />
      </Avatar>
      <Avatar bgcolor={colors.pink[500]}>
        <SvgIcon variant="filled" color="common.white" icon="pageview" />
      </Avatar>
      <Avatar bgcolor={colors.green[500]}>
        <SvgIcon variant="filled" color="common.white" icon="assignment" />
      </Avatar>
    </Stack>
  );
}
