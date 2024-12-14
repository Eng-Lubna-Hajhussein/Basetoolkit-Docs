export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  Button,
  Tooltip,
  Stack,
} from "@basetoolkit/ui";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ tooltip: className }} />
))({
  width: 200,
  wordWrap: "break-word",
  whiteSpace: "normal",
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ tooltip: className }} />
))({
  maxWidth: "none",
});

const longText = \`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
\`;

export default function VariableWidth() {
  return (
    <Stack direction={"row"}>
      <CustomWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>Custom Width [200px]</Button>
      </CustomWidthTooltip>
      <NoMaxWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>No wrapping</Button>
      </NoMaxWidthTooltip>
    </Stack>
  );
}
`;
