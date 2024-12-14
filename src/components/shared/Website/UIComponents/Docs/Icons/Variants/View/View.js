import React from 'react';
import { Stack, SvgIcon, Typography } from '@basetoolkit/ui';

function Variants() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack alignItems="center">
        <SvgIcon icon="home" variant="filled" />
        <Typography variant="caption">Filled</Typography>
      </Stack>
      
      <Stack alignItems="center">
        <SvgIcon icon="home" variant="outlined" />
        <Typography variant="caption">Outlined</Typography>
      </Stack>
      
      <Stack alignItems="center">
        <SvgIcon icon="home" variant="round" />
        <Typography variant="caption">Round</Typography>
      </Stack>
      
      <Stack alignItems="center">
        <SvgIcon icon="home" variant="sharp" />
        <Typography variant="caption">Sharp</Typography>
      </Stack>
      
    </Stack>
  );
}

export default Variants;
