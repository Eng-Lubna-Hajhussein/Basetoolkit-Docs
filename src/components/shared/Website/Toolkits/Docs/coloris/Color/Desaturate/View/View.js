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
            {`coloris(`}
            <Typography
              bgcolor="yellow"
              width={"fit-content"}
              display="inline"
            >
              'yellow'
            </Typography>
            {").desaturate().hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("yellow").desaturate().hex()}>
            {coloris("yellow").desaturate().hex()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="yellow"
              width={"fit-content"}
              display="inline"
            >
              'yellow'
            </Typography>
            {").desaturate(2).hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("yellow").desaturate(2).hex()}>
            {coloris("yellow").desaturate(2).hex()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="yellow"
              width={"fit-content"}
              display="inline"
            >
              'yellow'
            </Typography>
            {").desaturate(1.5).hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("yellow").desaturate(1.5).hex()}>
            {coloris("yellow").desaturate(1.5).hex()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="yellow"
              width={"fit-content"}
              display="inline"
            >
              'yellow'
            </Typography>
            {").desaturate(3).hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("yellow").desaturate(3).hex()}>
            {coloris("yellow").desaturate(3).hex()}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
