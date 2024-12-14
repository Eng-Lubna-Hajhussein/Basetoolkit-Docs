export const source = `
import * as React from "react";
import {
  AppBar,
  GlobalStyles,
  Toolbar,
  IconButton,
  SvgIcon,
  Typography,
  Button,
  Fab,
  Snackbar,
  useTheme,
  Box,
} from "@basetoolkit/ui";

export default function FabIntegrationSnackbar() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        width={400}
        sx={{ height: 400, position: "relative", bgcolor: "divider" }}
      >
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" sx={{ mr: 2 }} aria-label="menu">
              <SvgIcon icon="menu" color="common.white" />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              App bar
            </Typography>
          </Toolbar>
        </AppBar>
        <Fab
          color="secondary"
          style={{
            position: "absolute",
            bottom: theme.spacing(2),
            right: theme.spacing(3),
          }}
        >
          <SvgIcon icon="add" color="common.white" />
        </Fab>
        <Snackbar
          open
          autoHideDuration={6000}
          message="Archived"
          action={
            <Button color="common.white" size="small">
              Undo
            </Button>
          }
          sx={{
            position: "absolute !important",
            bottom: "15% !important",
            left: "0 !important",
            width: "90%",
            boxSizing: "border-box",
            mx: "20px !important",
            mb:"10px !important",
            boxShadow:2,
            xs: { bottom: 90 + " !important" },
          }}
        />
      </Box>
    </React.Fragment>
  );
}
`;
