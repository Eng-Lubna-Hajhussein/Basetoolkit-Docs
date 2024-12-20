export const source = `
import * as React from "react";
import { Box, Rating, SvgIcon, Typography } from "@basetoolkit/ui";

export default function CustomizedRating() {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Custom icon and color</Typography>
      <Rating
        name="customized-color"
        defaultValue={2}
        precision={0.5}
        filledColor="#ff6d75"
        icon={"favorite"}
        emptyIcon={<SvgIcon icon="favorite_border" />}
      />
    </Box>
  );
}
`;
