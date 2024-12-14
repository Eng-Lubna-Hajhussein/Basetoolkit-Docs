export const source = `
import React from "react";
import { SvgIcon, ButtonGroup, Button, LoadingButton } from "@basetoolkit/ui";

export default function LoadingButtonGroup() {
  return (
    <ButtonGroup variant="outlined" aria-label="loading button group">
      <Button>Submit</Button>
      <LoadingButton>Fetch data</LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SvgIcon icon="copy_all" />}
      >
        Copy
      </LoadingButton>
    </ButtonGroup>
  );
}
`;
