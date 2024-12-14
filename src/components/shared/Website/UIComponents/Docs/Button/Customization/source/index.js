export const source = `
import * as React from "react";
import { Stack, cssInjection, ButtonBase } from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

const GradientButton = cssInjection(ButtonBase)({
  background: "linear-gradient(45deg, #ff6b6b, #f06595)",
  borderRadius: 2,
  color: "#fff",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    background: "linear-gradient(45deg, #f06595, #ff6b6b)",
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.3)",
  },
});

const OutlineButton = cssInjection(ButtonBase)({
  backgroundColor: "transparent",
  color: "#6a5acd",
  border: "2px solid #6a5acd",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    borderColor: "#483d8b",
    color: (theme) => theme.palette.getContrastText("#483d8b"),
    bgcolor: coloris("#483d8b").alpha(0.8).hex(),
  },
});

const BootstrapButton = cssInjection("button")({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  borderRadius: 1,
  lineHeight: 1.5,
  color: "#ffffff",
  typography: "button",
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  cursor: "pointer",
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
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

function Customization() {
  return (
    <Stack direction="row" spacing={2}>
      <GradientButton>Gradient Style</GradientButton>
      <OutlineButton>Outline Style</OutlineButton>
      <BootstrapButton>Bootstrap Button</BootstrapButton>
    </Stack>
  );
}

export default Customization;
`;
