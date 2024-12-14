import * as React from "react";
import { Breadcrumbs, Typography, Link, Stack, SvgIcon } from "@basetoolkit/ui";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="#base"
      onClick={handleClick}
    >
      Base
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="#core"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Breadcrumb
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<SvgIcon icon="navigate_next" fontSize={18} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
