import * as React from "react";
import { Typography, Breadcrumbs, Link, SvgIcon } from "@basetoolkit/ui";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="#base"
        >
          <SvgIcon icon="home" variant="filled" sx={{ mr: 0.5 }} size="small" />
          Base
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="#core"
        >
          <SvgIcon icon="whatshot" sx={{ mr: 0.5 }} size="small" />
          Core
        </Link>
        <Typography
          color="text.primary"
          style={{ display: "flex", alignItems: "center" }}
        >
          <SvgIcon icon="grain" sx={{ mr: 0.5 }} size="small" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
