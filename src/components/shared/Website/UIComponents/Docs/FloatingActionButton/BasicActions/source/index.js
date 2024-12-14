export const source = `
import React from "react";
import { Box, Fab, SvgIcon } from "@basetoolkit/ui";

const BasicActions = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Fab color="warning" aria-label="add">
        <SvgIcon color="white" icon="navigation" />
      </Fab>
      <Fab variant="extended" color="hotpink">
        <SvgIcon
          icon="home_work"
          variant="filled"
          color="white"
          sx={{ mr: 1 }}
        />
        Go
      </Fab>
      <Fab color="primary" aria-label="add">
        <SvgIcon color="white" icon="add" />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <SvgIcon color="white" variant="filled" icon="edit" />
      </Fab>
      <Fab variant="extended" color="success">
        <SvgIcon
          icon="navigation"
          variant="filled"
          color="white"
          sx={{ mr: 1 }}
        />
        Navigate
      </Fab>
      <Fab disabled aria-label="favorite">
        <SvgIcon icon="favorite" color="white" />
      </Fab>
    </Box>
  );
};

export default BasicActions;
`;
