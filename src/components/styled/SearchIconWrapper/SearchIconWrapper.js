import { cssInjection } from "@basetoolkit/ui";

const SearchIconWrapper = cssInjection("div")(({ theme }) => ({
  px: theme.spacing(1),
  height: 40,
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default SearchIconWrapper;
