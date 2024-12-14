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
            <Typography bgcolor="orange" width={"fit-content"} display="inline">
              'orange'
            </Typography>
            {").css()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("orange").css()}>{
          coloris("orange").css()
          }</Typography>
        </Grid>
      </Grid>
       <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography bgcolor="orange" width={"fit-content"} display="inline">
              'orange'
            </Typography>
            {").css(0.5)"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("orange").css(.5)}>{
          coloris("orange").css(.5)
          }</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
