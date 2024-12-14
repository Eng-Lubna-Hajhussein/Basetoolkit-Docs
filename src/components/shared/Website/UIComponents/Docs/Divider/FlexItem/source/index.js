export const source = `
import * as React from "react";
import { Box, Divider, SvgIcon } from "@basetoolkit/ui";

export default function FlexDivider() {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.paper",
        color: "text.secondary",
        "& svg": {
          m: 1,
        },
      }}
    >
      <SvgIcon icon="format_bold" />
      <Divider orientation="vertical" variant="middle" flexItem />
      <SvgIcon icon="format_italic" />
    </Box>
  );
}
`;
