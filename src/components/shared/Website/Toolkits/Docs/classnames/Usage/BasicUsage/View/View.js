import React from "react";
import classnames from "@basetoolkit/ui/classnames";
import { Divider, Grid, Typography } from "@basetoolkit/ui";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={7} container justifyContent="start">
          <Typography fontSize={14}>
            {"classnames('button', 'primary', 42, null, false)"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>
            "{classnames("button", "primary", 42, null, false)}"
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}