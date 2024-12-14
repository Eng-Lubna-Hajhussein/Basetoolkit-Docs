export const source = `
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SvgIcon,
} from "@basetoolkit/ui";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="common.white"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SvgIcon icon="menu" color="common.white" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="common.white">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
`;
