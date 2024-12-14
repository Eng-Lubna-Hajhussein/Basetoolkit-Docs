import React from "react";
import { Button, ButtonGroup, Stack } from "@basetoolkit/ui";

export default function BasicButtonGroup() {
  return (
    <Stack direction={"row"} spacing={1.2}>
      <Stack direction={"column"} spacing={2.5}>
        <ButtonGroup
          color="success"
          variant="contained"
          aria-label="basic button group"
        >
          <Button>Save</Button>
          <Button>Copy</Button>
          <Button>Submit</Button>
        </ButtonGroup>
        <ButtonGroup
          color="black"
          textColor="warning"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button>Save</Button>
          <Button>Copy</Button>
          <Button>Submit</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Save</Button>
          <Button>Copy</Button>
          <Button>Submit</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"column"} spacing={2.5}>
        <ButtonGroup
          colorDarkenDegrees={2}
          variant="contained"
          aria-label="darken button group"
        >
          <Button>Save</Button>
          <Button>Copy</Button>
          <Button>Submit</Button>
        </ButtonGroup>

        <ButtonGroup
          colorLightenDegrees={2}
          variant="contained"
          aria-label="lighten button group"
        >
          <Button>Save</Button>
          <Button>Copy</Button>
          <Button>Submit</Button>
        </ButtonGroup>

        <ButtonGroup
          alpha={0.5}
          variant="contained"
          aria-label="alpha button group"
        >
          <Button>Save</Button>
          <Button>Copy</Button>
          <Button>Submit</Button>
        </ButtonGroup>
      </Stack>
      <ButtonGroup
        variant="contained"
        alpha={0.8}
        orientation="vertical"
        aria-label="vertical outlined button group"
        color="secondary"
      >
        <Button>Save</Button>
        <Button>Copy</Button>
        <Button>Add</Button>
        <Button>Submit</Button>
      </ButtonGroup>
      <ButtonGroup
        colorLightenDegrees={2}
        variant="outlined"
        orientation="vertical"
        aria-label="vertical darken button group"
        color="secondary"
        textColor="secondary"
      >
        <Button>Save</Button>
        <Button>Copy</Button>
        <Button>Add</Button>
        <Button>Submit</Button>
      </ButtonGroup>
      <ButtonGroup
        colorDarkenDegrees={2}
        color="secondary"
        textColor="secondary"
        variant="text"
        orientation="vertical"
        aria-label="vertical text button group"
      >
        <Button>Save</Button>
        <Button>Copy</Button>
        <Button>Add</Button>
        <Button>Submit</Button>
      </ButtonGroup>
    </Stack>
  );
}
