export const source = `
import * as React from "react";
import { Stack, Chip, SvgIcon } from "@basetoolkit/ui";

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<SvgIcon icon="done" />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<SvgIcon icon="delete" variant="filled" />}
        variant="outlined"
      />
    </Stack>
  );
}
`;
