export const source = `
import * as React from 'react';
import { Badge,SvgIcon } from '@basetoolkit/ui';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <SvgIcon icon='mail' variant='filled' />
    </Badge>
  );
}
`