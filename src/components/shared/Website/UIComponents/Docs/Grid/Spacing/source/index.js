export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  Box,
  Paper,
  Grid,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@basetoolkit/ui";

const Item = styled((props) => <Paper bgcolor="divider" p={2} {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027 !important",
    }),
  })
);

export default function BasicGrid() {
  const [spacing, setSpacing] = React.useState(2);
  return (
    <Stack spacing={2} width={"100%"}>
      <Box width={"100%"} px={2}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Spacing</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e, value) => setSpacing(+value)}
            value={spacing}
          >
            <FormControlLabel value={0} control={<Radio />} label="0" />
            <FormControlLabel value={0.5} control={<Radio />} label="0.5" />
            <FormControlLabel value={1} control={<Radio />} label="1" />
            <FormControlLabel value={2} control={<Radio />} label="2" />
            <FormControlLabel value={3} control={<Radio />} label="3" />
            <FormControlLabel value={4} control={<Radio />} label="4" />
            <FormControlLabel value={8} control={<Radio />} label="8" />
            <FormControlLabel value={12} control={<Radio />} label="12" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={spacing} justifyContent="center">
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
`;
