import React from "react";
import { Button, ButtonGroup, Divider, Stack } from "@basetoolkit/ui";

const buttons = [
  <Button key="one">Small</Button>,
  <Button key="two">Default</Button>,
  <Button key="three">Large</Button>,
];

export default function GroupSizesColors() {
  return (
    <Stack direction={"row"} spacing={2}>
      <Stack alignItems="center" spacing={2}>
        <ButtonGroup
          size="small"
          color="primary"
          variant="text"
          aria-label="small button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          color="warning"
          textColor="warning"
          variant="outlined"
          aria-label="medium button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          size="large"
          color="error"
          textColor="error"
          aria-label="large button group"
        >
          {buttons}
        </ButtonGroup>
      </Stack>
      <Divider orientation="vertical" />
      <Stack direction={"row"} spacing={2} alignItems="center">
        <ButtonGroup
          orientation="vertical"
          size="small"
          variant="text"
          color="primary"
          aria-label="small button group vertical"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          color="warning"
          variant="outlined"
          textColor="warning"
          aria-label="medium button group vertical"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          size="large"
          aria-label="large button group vertical"
        >
          {buttons}
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
