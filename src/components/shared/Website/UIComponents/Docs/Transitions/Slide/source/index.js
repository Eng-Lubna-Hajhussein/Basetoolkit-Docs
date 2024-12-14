export const source = `
import * as React from "react";
import { Box, Switch, Paper, Slide, FormControlLabel } from "@basetoolkit/ui";

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={(theme) => ({
          fill: theme.palette.common.white,
          stroke: theme.palette.divider,
          strokeWidth: 1,
        })}
      />
    </svg>
  </Paper>
);

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180, width: 130, position: "relative", zIndex: 1 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Box>
  );
}
`;
