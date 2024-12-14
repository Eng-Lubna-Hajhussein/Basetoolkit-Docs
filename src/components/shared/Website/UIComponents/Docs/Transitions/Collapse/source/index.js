export const source = `
import * as React from "react";
import {
  Box,
  Switch,
  Paper,
  Collapse,
  FormControlLabel,
} from "@basetoolkit/ui";

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

export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 300 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box
        sx={{
          "& > :not(style)": {
            display: "flex",
            justifyContent: "space-around",
            height: 120,
            width: 250,
          },
        }}
      >
        <div>
          <Collapse in={checked}>{icon}</Collapse>
          <Collapse in={checked} collapsedSize={"40px"}>
            {icon}
          </Collapse>
        </div>
        <div>
          <Box sx={{ width: "50%" }}>
            <Collapse orientation="horizontal" in={checked}>
              {icon}
            </Collapse>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={"40px"}>
              {icon}
            </Collapse>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
`;