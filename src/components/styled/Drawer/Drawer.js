import { Drawer as BasetoolkitDrawer, cssInjection } from "@basetoolkit/ui";

const openedMixin = (theme, drawerWidth) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const Drawer = cssInjection(BasetoolkitDrawer, {
  shouldForwardProp: (prop) => !["open", "drawerWidth"].includes(prop),
})(({ theme, open, drawerWidth }) => ({
  width: drawerWidth,
  boxShadow: "none !important",
  borderRight: `1px solid ${theme.palette.divider}`,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  maxHeight: "100vh",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: "0px",
  },
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.divider,
    borderRadius: 0,
    cursor: "pointer",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.grey[100],
  },
  ...(open
    ? { ...openedMixin(theme, drawerWidth) }
    : {
        ...closedMixin(theme),
      }),
}));

export default Drawer;
