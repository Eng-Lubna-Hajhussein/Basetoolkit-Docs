export const source = `
import * as React from 'react';
import { Breadcrumbs,Link } from '@basetoolkit/ui';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#base">
          Base
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="#core"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="#breadcrumbs"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </div>
  );
}
`;
