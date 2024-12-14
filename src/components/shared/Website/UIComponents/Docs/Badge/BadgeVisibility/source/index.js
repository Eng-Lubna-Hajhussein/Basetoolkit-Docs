export const source = `
import * as React from "react";
import {
  FormControlLabel,
  Switch,
  Button,
  ButtonGroup,
  Badge,
  Box,
  SvgIcon,
  Stack,
} from "@basetoolkit/ui";
import { badgeClasses } from "@basetoolkit/ui/classes";

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        [\`& .\${badgeClasses.container}\`]: {
          marginRight: 4,
        },
      }}
    >
      <Stack direction={"row"}>
        <Badge color="secondary" badgeContent={count}>
          <SvgIcon icon="mail" variant="filled" />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <SvgIcon icon="remove" size="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <SvgIcon icon="add" size="small" />
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"} mt={2}>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <SvgIcon icon="mail" variant="filled" />
        </Badge>
        <FormControlLabel
          sx={{ color: "text.primary" }}
          control={
            <Switch checked={!invisible} onChange={handleBadgeVisibility} />
          }
          label="Show Badge"
        />
      </Stack>
    </Box>
  );
}
`;