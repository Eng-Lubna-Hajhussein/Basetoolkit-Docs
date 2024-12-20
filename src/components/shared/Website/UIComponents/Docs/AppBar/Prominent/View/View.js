import * as React from "react";
import {
  cssInjection as styled,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  SvgIcon,
} from "@basetoolkit/ui";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start !important",
  paddingTop: theme.spacing(1) +" !important",
  paddingBottom: theme.spacing(2) +" !important",
  "@media all": {
    height: 128,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" height={"fit-content"} >
        <StyledToolbar>
          <IconButton edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
            <SvgIcon icon="menu" color="#fff" />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            Basetoolkit
          </Typography>
          <IconButton aria-label="search">
            <SvgIcon icon="search" color="#fff" />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end">
            <SvgIcon icon="more_vert" color="#fff" />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
