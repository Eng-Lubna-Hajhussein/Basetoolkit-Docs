export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Badge,
  MenuItem,
  Menu,
  SvgIcon,
} from "@basetoolkit/ui";
import { textFieldClasses } from "@basetoolkit/ui/classes";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 1,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    // width: "25ch !important",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  px: theme.spacing( 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& input::placeholder": {
    fontSize: ".9em",
    color:"white"
  },
  "& input":{
    color:"white",
    caretColor:"white"
  },
  [\`& .\${textFieldClasses.wrapper}\`]: {
    padding: theme.spacing(1, 1, 1, 0),
    border:"none !important",
    // vertical padding + font size from searchIcon
    paddingLeft: \`calc(1em + \${theme.spacing(4)})\`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch !important",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton disableRipple style={{overflow:"initial"}} size="large" aria-label="show 4 new mails">
          <Badge badgeContent={4} color="error">
            <SvgIcon icon="mail" color="#fff" variant="filled" />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton disableRipple style={{overflow:"initial"}} aria-label="show 17 new notifications">
          <Badge badgeContent={17} color="error">
            <SvgIcon icon="notifications" color="#fff" variant="filled" />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
        
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <SvgIcon icon="account_circle" color="#fff" variant="filled" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
            <SvgIcon icon="menu" color="#fff" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "block", xs: { display: "none" } }}
          >
            Basetoolkit
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SvgIcon icon="search" color="#fff" />
            </SearchIconWrapper>
            <StyledInput
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", xs: { display: "none" } }}>
            <IconButton disableRipple style={{overflow:"initial"}} aria-label="show 4 new mails">
              <Badge badgeContent={4} color="error">
                <SvgIcon icon="mail" variant="filled" color="#fff" />
              </Badge>
            </IconButton>
            <IconButton disableRipple style={{overflow:"initial"}} aria-label="show 17 new notifications">
              <Badge  badgeContent={17} color="error">
                <SvgIcon icon="notifications" variant="filled" color="#fff" />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <SvgIcon icon="account_circle" variant="filled" color="#fff" />
            </IconButton>
          </Box>
          <Box sx={{ display: "none", xs: { display: "flex" } }}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <SvgIcon icon="more" color="#fff" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
`