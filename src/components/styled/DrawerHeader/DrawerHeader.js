import { cssInjection } from "@basetoolkit/ui";

const DrawerHeader = cssInjection("div")(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  padding: theme.spacing(0, 1),
  py: 1,
  height: "55px",
}));

export default DrawerHeader;
