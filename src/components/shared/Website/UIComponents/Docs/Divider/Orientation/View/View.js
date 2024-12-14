import * as React from "react";
import { Divider, Box, SvgIcon } from "@basetoolkit/ui";

export default function VerticalDividers() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        bgcolor: "background.paper",
        color: "text.secondary",
        "& svg": {
          m: 1,
        },
      }}
    >
      <SvgIcon icon="format_align_left" />
      <SvgIcon icon="format_align_center" />
      <SvgIcon icon="format_align_right" />
      <Divider orientation="vertical" flexItem />
      <SvgIcon icon="format_bold" />
    </Box>
  );
}
