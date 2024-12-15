import * as React from "react";
import { Avatar, Stack, SvgIcon, colors } from "@basetoolkit/ui";

export default function VariantAvatars() {
  const { deepOrange, green,pink } = colors;
  return (
    <Stack direction="row" spacing={2}>
      <Avatar bgcolor={deepOrange[500]} variant="square">
      <SvgIcon icon="home" color="common.white" variant="filled" /> 
      </Avatar>
      <Avatar bgcolor={green[500]} variant="rounded">
      <SvgIcon icon="assessment" color="common.white" variant="filled" /> 
      </Avatar>
      <Avatar bgcolor={pink[500]} variant="circle">
      <SvgIcon icon="email" color="common.white" variant="filled" /> 
      </Avatar>
    </Stack>
  );
}
