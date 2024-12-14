export const source = `
import React from 'react';
import { Stack,SvgIcon } from '@basetoolkit/ui';

function SizeDemo() {
  return (
    <Stack direction="row" spacing={2}>
      <SvgIcon icon="search" size="small" />
      <SvgIcon icon="search" size="medium" />
      <SvgIcon icon="search" size="large" />
    </Stack>
  );
}

export default SizeDemo;
`