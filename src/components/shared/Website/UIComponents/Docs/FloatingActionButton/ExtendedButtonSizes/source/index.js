export const source = `
import * as React from "react";
import { Box, Fab, SvgIcon } from "@basetoolkit/ui";

export default function FloatingActionButtons() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <SvgIcon icon="add" color="common.white" />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <SvgIcon icon="edit" color="common.white" variant="filled" />
      </Fab>
      <Fab variant="extended" textColor="common.black">
        <SvgIcon icon="navigation" color="common.black" variant="filled"  sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <SvgIcon icon="favorite" color="divider" />
      </Fab>
    </Box>
  );
}
`;
