export const source = `
import * as React from "react";
import { Button, Grid } from "@basetoolkit/ui";

function BasicButtonDemo() {
  const buttonsProps = [
    { label: "Contained Variant", variant: "contained" },
    { label: "Text Variant", variant: "text" },
    { label: "Outlined Variant", variant: "outlined" },
    { label: "Warning Color", variant: "contained", color: "warning" },
    { label: "Secondary Color", variant: "contained", color: "secondary" },
    { label: "Red Color", variant: "contained", color: "red" },
    {
      label: "color Darken Degrees",
      variant: "contained",
      colorDarkenDegrees: "4",
    },
    {
      label: "color Lighten Degrees",
      variant: "contained",
      colorLightenDegrees: "4",
    },
    { label: "Alpha", variant: "contained", alpha: ".5" },
  ];

  return (
    <Grid container spacing={2}>
      {buttonsProps.map((config, index) => (
        <Grid item container xs={4} key={index} justifyContent="center">
          <Button {...config} fullWidth>
            {config.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default BasicButtonDemo;
`;
