import { alpha ,cssInjection} from "@basetoolkit/ui";

const Search = cssInjection("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 2,
  backgroundColor: alpha(theme.palette.divider, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.divider, 0.5),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default Search;
