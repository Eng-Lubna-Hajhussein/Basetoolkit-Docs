export const source = `
import * as React from "react";
import { Box, Grid, Button, Tooltip } from "@basetoolkit/ui";

export default function PositionedTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Add" placement="top">
            <Button>top</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Add" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={6}>
          <Tooltip title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid
          item
          container
          xs={6}
          direction="column"
          sx={{ alignItems: "flex-end" }}
        >
          <Grid item>
            <Tooltip title="Add" placement="right-start">
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="bottom-start">
            <Button>bottom-start</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Add" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Add" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
`;
