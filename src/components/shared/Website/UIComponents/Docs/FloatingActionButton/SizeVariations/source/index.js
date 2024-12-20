export const source = `
import React from "react";
import { Box, Fab, SvgIcon } from "@basetoolkit/ui";

const SizeVariations = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Fab size="small" color="primary" aria-label="add">
        <SvgIcon icon="edit" variant="filled" color="white" />
      </Fab>
      <Fab size="medium" color="primary" aria-label="add">
        <SvgIcon icon="edit" variant="filled" color="white" />
      </Fab>
      <Fab size="large" color="primary" aria-label="add">
        <SvgIcon icon="edit" variant="filled" color="white" />
      </Fab>
    </Box>
  );
};

export default SizeVariations;
`;
