import { Grid, Typography, Divider } from "@basetoolkit/ui";
import datewise from "@basetoolkit/ui/datewise";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().format('MMMM Do YYYY, h:mm:ss a')"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().format("MMMM Do YYYY, h:mm:ss a")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>{"datewise().format('dddd')"}</Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>{datewise().format("dddd")}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().format('MMM Do YY')"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().format("MMM Do YY")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().format('YYYY [escaped] YYYY')"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().format("YYYY [escaped] YYYY")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>{"datewise().format()"}</Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>{datewise().format()}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
