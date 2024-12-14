export const source = `
import * as React from 'react';
import { Box } from '@basetoolkit/ui';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
`;
