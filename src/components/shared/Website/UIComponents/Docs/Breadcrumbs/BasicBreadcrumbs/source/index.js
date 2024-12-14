export const source = `
import * as React from "react";
import { Typography, Breadcrumbs, Link } from "@basetoolkit/ui";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
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
        <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}
`;
