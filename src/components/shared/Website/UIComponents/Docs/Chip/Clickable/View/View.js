import * as React from "react";
import { Chip, Stack } from "@basetoolkit/ui";

export default function ClickableChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack direction="column" spacing={1}>
      <Chip label="Clickable" clickable onClick={handleClick} />
      <Chip label="Clickable" clickable variant="outlined" onClick={handleClick} />
    </Stack>
  );
}
