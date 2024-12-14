import { Grid, Typography, Divider } from "@basetoolkit/ui";
import datewise from "@basetoolkit/ui/datewise";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().subtract(11, 'days').calendar()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().subtract(11, "days").calendar()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().subtract(7, 'days').calendar()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().subtract(7, "days").calendar()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().subtract(2, 'days').calendar()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().subtract(2, "days").calendar()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().subtract(1, 'days').calendar()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().subtract(1, "days").calendar()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography fontSize={14}>{"datewise().calendar()"}</Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography fontSize={14}>{datewise().calendar()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().add(1, 'days').calendar()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().add(1, "days").calendar()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().add(3, 'days').calendar()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().add(3, "days").calendar()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().add(10, 'days').calendar()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography fontSize={14}>
            {datewise().add(10, "days").calendar()}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
