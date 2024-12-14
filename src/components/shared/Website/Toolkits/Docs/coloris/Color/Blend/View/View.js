import {
  Grid,
  Typography,
  Divider,
} from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.blend(`}
            <Typography
              bgcolor="#4CBBFC"
              width={"fit-content"}
              display="inline"
            >
              '#4CBBFC'
            </Typography>
            ,
            <Typography
              bgcolor="#EEEE22"
              width={"fit-content"}
              display="inline"
            >
              '#EEEE22'
            </Typography>
            {",'multiply')"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris.blend("#4CBBFC", "#EEEE22", "multiply")}>
            {coloris.blend("#4CBBFC", "#EEEE22", "multiply")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.blend(`}
            <Typography
              bgcolor="#4CBBFC"
              width={"fit-content"}
              display="inline"
            >
              '#4CBBFC'
            </Typography>
            ,
            <Typography
              bgcolor="#EEEE22"
              width={"fit-content"}
              display="inline"
            >
              '#EEEE22'
            </Typography>
            {",'darken')"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris.blend("#4CBBFC", "#EEEE22", "darken")}>
            {coloris.blend("#4CBBFC", "#EEEE22", "darken")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.blend(`}
            <Typography
              bgcolor="#4CBBFC"
              width={"fit-content"}
              display="inline"
            >
              '#4CBBFC'
            </Typography>
            ,
            <Typography
              bgcolor="#EEEE22"
              width={"fit-content"}
              display="inline"
            >
              '#EEEE22'
            </Typography>
            {",'lighten')"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris.blend("#4CBBFC", "#EEEE22", "lighten")}>
            {coloris.blend("#4CBBFC", "#EEEE22", "lighten")}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
