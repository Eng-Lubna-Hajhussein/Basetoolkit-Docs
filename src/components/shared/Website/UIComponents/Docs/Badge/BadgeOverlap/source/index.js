export const source = `
import * as React from "react";
import { Box, Stack, Badge } from "@basetoolkit/ui";

const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

export default function BadgeOverlap() {
  return (
    <Stack spacing={3} direction="row">
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
      <Badge
        color="secondary"
        overlap="circular"
        badgeContent=" "
        variant="dot"
      >
        {circle}
      </Badge>
    </Stack>
  );
}
`;
