export const source = `
import React from 'react';
import {SvgIcon} from '@basetoolkit/ui';

function FontSizeDemo() {
  return (
    <div>
      <SvgIcon icon="settings" fontSize={40} />
      <SvgIcon icon="settings" fontSize={60} />
      <SvgIcon icon="settings" fontSize={80} />
    </div>
  );
}

export default FontSizeDemo;
`;
