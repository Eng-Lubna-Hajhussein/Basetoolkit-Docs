import React from "react";
import { Box, Fab, SvgIcon } from "@basetoolkit/ui";

const ExtendedButtonSizes = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Fab variant="extended" size="small" color="secondary">
        <SvgIcon icon="upload" variant="filled" color="white" sx={{ mr: 1 }} />
        Small
      </Fab>
      <Fab variant="extended" size="medium" color="secondary">
        <SvgIcon icon="upload" variant="filled" color="white" sx={{ mr: 1 }} />
        Medium
      </Fab>
      <Fab variant="extended" color="secondary" size="large">
        <SvgIcon icon="upload" variant="filled" color="white" sx={{ mr: 1 }} />
        Large
      </Fab>
    </Box>
  );
};

export default ExtendedButtonSizes;
