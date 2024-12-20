export const source = `
import * as React from "react";
import { Chip, Stack } from "@basetoolkit/ui";

export default function ClickableAndDeletableChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="column" spacing={1}>
      <Chip
        label="Clickable Deletable"
        onClick={handleClick}
        onDelete={handleDelete}
        clickable
      />
      <Chip
        label="Clickable Deletable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
        clickable
      />
    </Stack>
  );
}
`;
