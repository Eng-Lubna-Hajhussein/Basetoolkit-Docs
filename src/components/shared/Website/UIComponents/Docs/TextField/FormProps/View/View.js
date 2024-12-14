import { Box, Grid, TextField } from "@basetoolkit/ui";
import * as React from "react";

export default function FormPropsTextFields() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-password-input"
            label="autoComplete"
            autoComplete="autocomplete-text"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="outlined-number"
            label="Shrink Label"
            type="number"
            shrink
          />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-search" label="Search field" type="search" />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            variant="filled"
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-number"
            label="Shrink Label"
            type="number"
            variant="filled"
            shrink
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            variant="standard"
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-number"
            label="Shrink Number"
            type="number"
            variant="standard"
            shrink
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
