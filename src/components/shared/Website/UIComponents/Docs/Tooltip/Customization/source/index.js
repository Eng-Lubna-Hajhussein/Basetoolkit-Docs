export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  Button,
  Tooltip,
  Typography,
  Stack,
} from "@basetoolkit/ui";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} color="common.white" classes={{ tooltip: className }} />
))(({ theme }) => ({
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    px:1
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    arrow
    arrowColor="common.black"
    color="common.black"
    classes={{ tooltip: className }}
  />
))(() => ({
  px: 1,
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ tooltip: className }} />
))(({ theme }) => ({
  backgroundColor: "#f5f5f9 !important",
  color: "rgba(0, 0, 0, 0.87)",
  width: 220,
  fontSize: theme.typography.pxToRem(12),
  border: "1px solid #dadde9",
  wordWrap: "break-word",
  whiteSpace: "normal",
}));

export default function CustomizedTooltips() {
  return (
    <Stack direction={"row"}>
      <LightTooltip title="Add">
        <Button>Light</Button>
      </LightTooltip>
      <BootstrapTooltip title="Add">
        <Button>Bootstrap</Button>
      </BootstrapTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>
    </Stack>
  );
}
`;
