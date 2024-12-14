import React from "react";
import { Divider, Grid, Typography } from "@basetoolkit/ui";
import classnames from "@basetoolkit/ui/classnames";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={7} container justifyContent="start">
          <Typography fontSize={14}>{"classnames({ button: true, disabled: false, 'is-active': 1, hidden: 0 })"}</Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>"{classnames({ button: true, disabled: false, 'is-active': 1, hidden: 0 })}"</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
