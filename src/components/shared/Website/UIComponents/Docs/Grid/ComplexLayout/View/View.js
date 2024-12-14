import * as React from "react";
import {
  cssInjection as styled,
  Grid,
  Paper,
  Typography,
  ButtonBase,
} from "@basetoolkit/ui";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={(theme) => ({
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: theme.palette.divider +" !important",
        ...theme.applyStyles("dark", {
          backgroundColor: "#1A2027",
        }),
      })}
    >
      <Grid container spacing={1} justifyContent="center">
        <Grid item>
          <ButtonBase
            sx={{
              width: 128,
              height: 128,
              bgcolor: "rgba(0,0,0,0) !important",
              "&:focus": { bgcolor: "lightgray !important" },
            }}
          >
            <Img
              alt="complex"
              src="https://tse4.mm.bing.net/th?id=OIP.gcDv5q95D-34A40G0RnFWwHaEK&pid=Api&P=0&h=220"
            />
          </ButtonBase>
        </Grid>
        <Grid item  container>
          <Grid item  container direction="column" spacing={2}>
            <Grid item >
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item  container direction="row" spacing={2}>
        <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
