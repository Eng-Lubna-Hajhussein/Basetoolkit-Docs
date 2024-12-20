export const source = `
import React from "react";
import { Stack, SvgIcon } from "@basetoolkit/ui";

function ColorDemo() {
  return (
    <Stack direction="row" spacing={2}>
      <SvgIcon icon="favorite" color="primary" />
      <SvgIcon icon="favorite" color="secondary" />
      <SvgIcon icon="favorite" color="#FF5722" /> 
    </Stack>
  );
}

export default ColorDemo;
`;
