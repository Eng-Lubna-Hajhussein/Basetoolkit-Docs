import * as React from "react";
import {
  Paper,
  TextField,
  Divider,
  IconButton,
  SvgIcon,
} from "@basetoolkit/ui";
import { textFieldClasses } from "@basetoolkit/ui/classes";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SvgIcon icon="menu" />
      </IconButton>
      <TextField
        sx={{
          ml: 1,
          flex: 1,
          [`& .${textFieldClasses.wrapper}`]: { border: "none !important" },
        }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SvgIcon icon="search" />
      </IconButton>
      <Divider style={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <SvgIcon icon="directions" color="primary" />
      </IconButton>
    </Paper>
  );
}
