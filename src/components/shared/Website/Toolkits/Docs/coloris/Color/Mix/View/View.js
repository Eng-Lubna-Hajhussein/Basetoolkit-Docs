import { Grid, Typography, Divider } from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.`}
            {".mix("}
            <Typography
              bgcolor="hotpink"
              width={"fit-content"}
              display="inline"
            >
              'hotpink'
            </Typography>
            ,
            <Typography bgcolor="blue" width={"fit-content"} display="inline">
              'blue'
            </Typography>
            {")"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris.mix("hotpink", "blue")}>
            {coloris.mix("hotpink", "blue")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.`}
            {".mix("}
            <Typography
              bgcolor="hotpink"
              width={"fit-content"}
              display="inline"
            >
              'hotpink'
            </Typography>
            ,
            <Typography bgcolor="blue" width={"fit-content"} display="inline">
              'blue'
            </Typography>
            {",.25)"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris.mix("hotpink", "blue", 0.25)}>
            {coloris.mix("hotpink", "blue", 0.25)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.`}
            {".mix("}
            <Typography
              bgcolor="hotpink"
              width={"fit-content"}
              display="inline"
            >
              'hotpink'
            </Typography>
            ,
            <Typography bgcolor="blue" width={"fit-content"} display="inline">
              'blue'
            </Typography>
            {",.75)"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris.mix("hotpink", "blue", 0.75)}>
            {coloris.mix("hotpink", "blue", 0.75)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
