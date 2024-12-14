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
              bgcolor="hotpink"
              width={"fit-content"}
              display="inline"
            >
              'hotpink'
            </Typography>
            {").brightness().hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("hotpink").brightness().hex()}>
            {coloris("hotpink").brightness().hex()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="hotpink"
              width={"fit-content"}
              display="inline"
            >
              'hotpink'
            </Typography>
            {").brightness(2).hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("hotpink").brightness(2).hex()}>
            {coloris("hotpink").brightness(2).hex()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="hotpink"
              width={"fit-content"}
              display="inline"
            >
              'hotpink'
            </Typography>
            {").brightness(3).hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("hotpink").brightness(3).hex()}>
            {coloris("hotpink").brightness(3).hex()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="hotpink"
              width={"fit-content"}
              display="inline"
            >
              'hotpink'
            </Typography>
            {").brightness(.2).hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("hotpink").brightness(.2).hex()}>
            {coloris("hotpink").brightness(.2).hex()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="hotpink"
              width={"fit-content"}
              display="inline"
            >
              'hotpink'
            </Typography>
            {").brightness(2.6).hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("hotpink").brightness(2.6).hex()}>
            {coloris("hotpink").brightness(2.6).hex()}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
