import { Grid, Typography, Divider } from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography bgcolor="white" width={"fit-content"} display="inline">
              'white'
            </Typography>
            {").luminance()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("white").luminance()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="aquamarine"
              width={"fit-content"}
              display="inline"
            >
              'aquamarine'
            </Typography>
            {").luminance()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("aquamarine").luminance()}</Typography>
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
            {").luminance()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("hotpink").luminance()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="darkslateblue"
              width={"fit-content"}
              display="inline"
            >
              'darkslateblue'
            </Typography>
            {").luminance()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("darkslateblue").luminance()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="black"
              color="white"
              width={"fit-content"}
              display="inline"
            >
              'black'
            </Typography>
            {").luminance()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("black").luminance()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Divider />
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography bgcolor="white" width={"fit-content"} display="inline">
              'white'
            </Typography>
            {").luminance(0.5)"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("white").luminance(0.5)}>
            {coloris("white").luminance(0.5)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="aquamarine"
              width={"fit-content"}
              display="inline"
            >
              'aquamarine'
            </Typography>
            {").luminance(0.5)"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("aquamarine").luminance(0.5)}>
            {coloris("aquamarine").luminance(0.5)}
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
            {").luminance(0.5)"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("hotpink").luminance(0.5)}>
            {coloris("hotpink").luminance(0.5)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="darkslateblue"
              width={"fit-content"}
              display="inline"
            >
              'darkslateblue'
            </Typography>
            {").luminance(0.2)"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("darkslateblue").luminance(0.2)}>
            {coloris("darkslateblue").luminance(0.2)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
