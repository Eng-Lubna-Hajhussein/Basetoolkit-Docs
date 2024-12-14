export const source = `
import React from "react";
import { Button, ButtonGroup, Stack } from "@basetoolkit/ui";

const buttons = [
  <Button key="one">Option A</Button>,
  <Button key="two">Option B</Button>,
  <Button key="three">Option C</Button>,
];

export default function GroupOrientation() {
  return (
    <Stack spacing={2} direction="row">
      <ButtonGroup
        orientation="vertical"
        variant="outlined"
        aria-label="vertical outlined group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        variant="contained"
        aria-label="vertical contained group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        variant="text"
        aria-label="vertical text group"
      >
        {buttons}
      </ButtonGroup>
    </Stack>
  );
}
`;
