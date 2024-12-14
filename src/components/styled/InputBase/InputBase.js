import { TextField, cssInjection } from "@basetoolkit/ui";
import { textFieldClasses } from "@basetoolkit/ui/classes";

const InputBase = cssInjection(TextField)(({ theme }) => ({
  color: "default",
  width: "auto !important",
  py: 0,
  "& input::placeholder": {
    fontSize: "0.8em",
    color: "default",
  },
  [theme.breakpoints.up("sm")]: {
    width: "20ch",
    [`& .${textFieldClasses.focused}`]: {
      width: "25ch !important",
    },
  },
  [`& .${textFieldClasses.wrapper}`]: {
    width: "20ch",
    borderRadius: 2,
    paddingY: "3px !important",
    border: "none",
    transition: theme.transitions.create("width"),
  },
}));

export default InputBase;
