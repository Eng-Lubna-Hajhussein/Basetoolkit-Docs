import { Grid, Typography, Divider } from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

export default function App() {
  return (
    <Grid container>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.valid(`}
            <Typography bgcolor="red" width={"fit-content"} display="inline">
              'red'
            </Typography>
            {")"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris.valid("red") ? "true" : "false"}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.valid(`}
            <Typography width={"fit-content"} display="inline">
              'beard'
            </Typography>
            {")"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris.valid("beard") ? "true" : "false"}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.valid(`}
            <Typography
              bgcolor="#F0000D"
              width={"fit-content"}
              display="inline"
            >
              '#F0000D'
            </Typography>
            {")"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris.valid("#F0000D") ? "true" : "false"}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.valid(`}
            <Typography width={"fit-content"} display="inline">
              '#FOOOOD'
            </Typography>
            {")"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris.valid("#FOOOOD") ? "true" : "false"}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
