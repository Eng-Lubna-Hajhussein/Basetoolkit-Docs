export const source = `
import * as React from "react";
import { Card, Divider, SvgIcon } from "@basetoolkit/ui";

export default function VerticalDividerMiddle() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        color: "text.secondary",
        "& svg": {
          m: 1,
        },
      }}
    >
      <SvgIcon icon="format_align_left" />
      <SvgIcon icon="format_align_center" />
      <SvgIcon icon="format_align_right" />
      <Divider orientation="vertical" variant="middle" flexItem />
      <SvgIcon icon="format_bold" />
    </Card>
  );
}
`;
