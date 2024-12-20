export const source = `
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  SvgIcon,
} from "@basetoolkit/ui";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SvgIcon icon="menu" color="#fff" />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
`;
