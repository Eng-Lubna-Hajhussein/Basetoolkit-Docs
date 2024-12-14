import { Box, TimePicker } from '@basetoolkit/ui';
import * as React from 'react';

export default function BasicTimePicker() {
  return (
    <Box display='flex' justifyContent='center'>
        <TimePicker  label="Basic time picker" />
    </Box>
  );
}
