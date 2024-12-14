import { AppBar as BasetoolkitAppBar, cssInjection } from "@basetoolkit/ui";

const AppBar = cssInjection(BasetoolkitAppBar, {
  shouldForwardProp: (prop) => !["open","hoverOpen", "drawerWidth"].includes(prop),
})(({ theme, open, drawerWidth }) => ({
  p: "0px !important",
  boxShadow: 0,
  width: `calc(100% - (${theme.spacing(7)} + 1px))`,

  ml: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - (${theme.spacing(10)} + 1px))`,
    ml: `calc(${theme.spacing(10)} + 1px)`,
  },
  variants: [
    {
      props: { open: true },
      style: {
        marginLeft: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
  ],
}));

export default AppBar;
