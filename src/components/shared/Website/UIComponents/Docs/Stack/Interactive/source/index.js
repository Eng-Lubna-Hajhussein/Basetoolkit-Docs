export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  Box,
  Paper,
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
    display: "flex",
    alignItems: "center",
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
  const [spacing, setSpacing] = React.useState(2);
  return (
    <Stack spacing={2} width={"100%"}>
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          spacing={spacing}
          direction={direction}
          justifyContent={justifyContent}
          alignItems={alignItems}
        >
          <Item height={20}>Cell 1</Item>

          <Item height={40}>Cell 2</Item>

          <Item height={60}>Cell 3</Item>
        </Stack>
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
              value={"flex-start"}
              control={<Radio />}
              label="flex-start"
            />
            <FormControlLabel
              value={"center"}
              control={<Radio />}
              label="center"
            />
            <FormControlLabel
              value={"flex-end"}
              control={<Radio />}
              label="flex-end"
            />
            <FormControlLabel
              value={"space-between"}
              control={<Radio />}
              label="space-between"
            />
            <FormControlLabel
              value={"space-around"}
              control={<Radio />}
              label="space-around"
            />
            <FormControlLabel
              value={"space-evenly"}
              control={<Radio />}
              label="space-evenly"
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
              value={"flex-start"}
              control={<Radio />}
              label="flex-start"
            />
            <FormControlLabel
              value={"center"}
              control={<Radio />}
              label="center"
            />
            <FormControlLabel
              value={"flex-end"}
              control={<Radio />}
              label="flex-end"
            />
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
      </Stack>
    </Stack>
  );
}
`;
