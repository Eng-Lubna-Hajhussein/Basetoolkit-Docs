import * as React from "react";
import {
  cssInjection as styled,
  alpha,
  Box,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  SvgIcon,
  AppBar
} from "@basetoolkit/ui";
import { textFieldClasses } from "@basetoolkit/ui/classes";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 1,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  px: theme.spacing(1),
  height: 40,
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "inherit",
  width: "auto !important",
  color:"white",
  "& input::placeholder": {
    fontSize: ".9em",
    color:"white"
  },
  "& input":{
    color:"white",
    caretColor:"white"
  },
  [theme.breakpoints.up("sm")]: {
    width: "10ch",
    [`& .${textFieldClasses.focused}`]: {
      width: "15ch !important",
    },
  },
  [`& .${textFieldClasses.wrapper}`]: {
    width: "10ch",
    borderRadius: 1,
    height: 25,
    padding: theme.spacing(1, 1, 1, 0),
    border: "none",
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <SvgIcon icon="menu" color="white" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "block", xs: { display: "none" }, flexGrow: 1 }}
          >
            Basetoolkit
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SvgIcon icon="search" color="white" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
