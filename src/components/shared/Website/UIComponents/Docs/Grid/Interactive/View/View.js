import * as React from "react";
import {
  cssInjection as styled,
  Box,
  Paper,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from "@basetoolkit/ui";

const Item = styled((props) => <Paper bgcolor="divider" p={2} {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    display:"flex",alignItems:"center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027 !important",
    }),
  })
);

export default function InteractiveGrid() {
  const [direction, setDirection] = React.useState("row");
  const [justifyContent, setJustifyContent] = React.useState("center");
  const [alignItems, setAlignItems] = React.useState("center");
  return (
    <Stack spacing={2} width={"100%"}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction={direction}
          justifyContent={justifyContent}
          alignItems={alignItems}
        >
          <Grid item>
            <Item height={20}>Cell 1</Item>
          </Grid>
          <Grid item>
            <Item height={40}>Cell 2</Item>
          </Grid>
          <Grid item>
            <Item height={60}>Cell 3</Item>
          </Grid>
        </Grid>
      </Box>
      <Stack width={"100%"} px={2} spacing={2}>
        <FormControl>
          <FormLabel id="direction-row-radio-buttons-group-label">
            direction
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="direction-row-radio-buttons-group-label"
            name="direction-radio-buttons-group"
            onChange={(e, value) => setDirection(value)}
            value={direction}
          >
            <FormControlLabel value={"row"} control={<Radio />} label="row" />
            <FormControlLabel
              value={"column"}
              control={<Radio />}
              label="column"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="justifyContent-row-radio-buttons-group-label">
            justifyContent
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="justifyContent-row-radio-buttons-group-label"
            name="justifyContent-radio-buttons-group"
            onChange={(e, value) => setJustifyContent(value)}
            value={justifyContent}
          >
            <FormControlLabel
              value={"start"}
              control={<Radio />}
              label="start"
            />
            <FormControlLabel
              value={"center"}
              control={<Radio />}
              label="center"
            />
            <FormControlLabel value={"end"} control={<Radio />} label="end" />
            <FormControlLabel
              value={"between"}
              control={<Radio />}
              label="between"
            />
            <FormControlLabel
              value={"around"}
              control={<Radio />}
              label="around"
            />
            <FormControlLabel
              value={"evenly"}
              control={<Radio />}
              label="evenly"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="alignItems-row-radio-buttons-group-label">
            alignItems
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="alignItems-row-radio-buttons-group-label"
            name="alignItems-radio-buttons-group"
            onChange={(e, value) => setAlignItems(value)}
            value={alignItems}
          >
            <FormControlLabel
              value={"start"}
              control={<Radio />}
              label="start"
            />
            <FormControlLabel
              value={"center"}
              control={<Radio />}
              label="center"
            />
            <FormControlLabel value={"end"} control={<Radio />} label="end" />
            <FormControlLabel
              value={"stretch"}
              control={<Radio />}
              label="stretch"
            />
            <FormControlLabel
              value={"baseline"}
              control={<Radio />}
              label="baseline"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Stack>
  );
}
