export const source = `
import { Box, TimeField } from '@basetoolkit/ui';
import * as React from 'react';

export default function BasicTimeField() {
  return (
    <Box display='flex' justifyContent='center' >
        <TimeField label="Basic time field" />
    </Box>
  );
}
`;
