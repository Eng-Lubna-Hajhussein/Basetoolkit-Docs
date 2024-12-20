export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  alpha,
  TextField,
  Box,
  InputLabel,
  FormControl,
  SvgIcon,
} from "@basetoolkit/ui";

import { textFieldClasses } from "@basetoolkit/ui/classes";

const BootstrapInput = styled(TextField)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  [\`& .\${textFieldClasses.focused}\`]: {
    boxShadow: \`\${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem\`,
    borderColor: theme.palette.primary.main,
  },
  [\`& .\${textFieldClasses.wrapper}\`]: {
    borderRadius: "8px !important",
    position: "relative",
    backgroundColor: "#F3F6F9 !important",
    border: "1px solid",
    borderColor: "#E0E3E7",
    "&:hover": { borderColor: "#E0E3E7" },
    fontSize: 16,
    width: "auto",
    padding: "10px 12px !important",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

const YoutubeInput = styled(TextField)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  [\`& .\${textFieldClasses.wrapper}\`]: {
    borderRadius: "25px !important",
    position: "relative",
    border: "1px solid",
    borderColor: "#E0E3E7",
    "&:hover": { borderColor: "#E0E3E7" },
    fontSize: 16,
    width: "auto",
    padding: "10px 12px !important",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

const GradientInput = styled(TextField)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  [\`& .\${textFieldClasses.label}\`]: {
    background:"transparent !important",
    top: "2px !important",
    left: "8px !important",
    color:"white"
  },
  [\`& .\${textFieldClasses.wrapper}\`]: {
    borderTopLeftRadius: "8px !important",
    borderTopRightRadius: "8px !important",
    background:theme=>\`linear-gradient(45deg, \${theme.palette.secondary.light}, \${theme.palette.primary.light}) !important\`,
    position: "relative",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px !important",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

const RedditTextField = styled((props) => (
  <TextField
    slotProps={{
      input: { disableUnderline: true },
    }}
    {...props}
  />
))(({ theme }) => ({
  [\`& .\${textFieldClasses.focused}\`]: {
    backgroundColor: "transparent",
    boxShadow: \`\${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px\`,
    borderColor: theme.palette.primary.main,
  },
  [\`& .\${textFieldClasses.label}\`]: {
    top: "4px !important",
    left: "8px !important",
  },
  [\`& .\${textFieldClasses.wrapper}\`]: {
    overflow: "hidden",
    borderRadius: 1,
    border: "1px solid",
    backgroundColor: "#F3F6F9",
    borderColor: "#E0E3E7",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    padding: "8px 12px !important",
    pt: "12px !important",
    "&:hover": {
      backgroundColor: "transparent",
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

export default function CustomizedInputsStyled() {
  return (
    <Box
      component="form"
      noValidate
      sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
    >
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </InputLabel>
        <BootstrapInput
          style={{ marginTop: 1 }}
          defaultValue="react-bootstrap"
          id="bootstrap-input"
        />
      </FormControl>
      <FormControl variant="standard">
        <GradientInput
          style={{ marginTop: 25 }}
          defaultValue="gradient-style"
          id="gradient-input"
          label="gradient-input"
        />
      </FormControl>
      <RedditTextField
        label="Reddit"
        defaultValue="react-reddit"
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 25 }}
      />
        <FormControl variant="outlined">
        <YoutubeInput
          style={{ marginTop: 25 }}
          placeholder="Search"
          id="search-input"
          InputProps={{endAdornment:<SvgIcon icon="search" />}}
        />
      </FormControl>
    </Box>
  );
}
`;
