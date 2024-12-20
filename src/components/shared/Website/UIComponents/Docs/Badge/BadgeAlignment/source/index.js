export const source = `
import * as React from "react";
import {
  Stack,
  Badge,
  SvgIcon,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@basetoolkit/ui";

export default function BadgeMax() {
  const [anchorOrigin, setAnchorOrigin] = React.useState({
    vertical: "top",
    horizontal: "right",
  });
  return (
    <Stack spacing={2} direction="column" sx={{ color: "action.active" }}>
      <Stack
        justifyContent="center"
        direction="row"
        spacing={4}
        sx={{ color: "action.active" }}
      >
        <FormControl>
          <FormLabel>Vertical</FormLabel>
          <RadioGroup
            defaultValue={anchorOrigin.vertical}
            onChange={(e, value) => {
              setAnchorOrigin({ ...anchorOrigin, vertical: value });
            }}
          >
            <FormControlLabel value="top" control={<Radio />} label="top" />
            <FormControlLabel
              value="bottom"
              control={<Radio />}
              label="bottom"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Horizontal</FormLabel>
          <RadioGroup
            defaultValue={anchorOrigin.horizontal}
            onChange={(e, value) => {
              setAnchorOrigin({ ...anchorOrigin, horizontal: value });
            }}
          >
            <FormControlLabel value="right" control={<Radio />} label="right" />
            <FormControlLabel value="left" control={<Radio />} label="left" />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
        <Badge color="secondary" variant="dot" anchorOrigin={anchorOrigin}>
          <SvgIcon icon="dashboard" variant="filled" />
        </Badge>
        <Badge color="secondary" badgeContent={1} anchorOrigin={anchorOrigin}>
          <SvgIcon icon="dashboard" variant="filled" />
        </Badge>
        <Badge color="secondary" badgeContent={13} anchorOrigin={anchorOrigin}>
          <SvgIcon icon="dashboard" variant="filled" />
        </Badge>
        <Badge color="secondary" badgeContent={99} anchorOrigin={anchorOrigin}>
          <SvgIcon icon="dashboard" variant="filled" />
        </Badge>
        <Badge color="secondary" badgeContent={100} anchorOrigin={anchorOrigin}>
          <SvgIcon icon="dashboard" variant="filled" />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999} anchorOrigin={anchorOrigin}>
          <SvgIcon icon="dashboard" variant="filled" />
        </Badge>
      </Stack>
    </Stack>
  );
}
`;
