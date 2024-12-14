import {
  Grid,
  Typography,
  Divider,
} from "@basetoolkit/ui";
import datewise from "@basetoolkit/ui/datewise";

export default function App() {
  return (
    <Grid container width={"100%"}>
       <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise('2020&11&20', 'YYYY&MM&DD').fromNow()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>{
          datewise("2020&11&20", "YYYY&MM&DD").fromNow()
          }</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise('2012,06,20', 'YYYY,MM,DD').fromNow()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>{
          datewise('2012,06,20', 'YYYY,MM,DD').fromNow()
          }</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise('20070620', 'YYYYMMDD').fromNow()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>{
          datewise('20070620', 'YYYYMMDD').fromNow()
          }</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().startOf('day').fromNow()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>{
          datewise().startOf('day').fromNow()
          }</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().endOf('day').fromNow()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>{
          datewise().endOf('day').fromNow()
          }</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={6} container justifyContent="start">
          <Typography fontSize={14}>
            {"datewise().startOf('hour').fromNow()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4} container justifyContent="end">
          <Typography fontSize={14}>{
          datewise().startOf('hour').fromNow()
          }</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
