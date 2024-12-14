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
            {`coloris.distance(`}
            <Typography bgcolor="#fff"  width={"fit-content"} display="inline">
              '#fff'
            </Typography>,
            <Typography bgcolor="#ff0"  width={"fit-content"} display="inline">
              '#ff0'
            </Typography>
            {")"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography >{
          coloris.distance("#fff","#ff0")
          }</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris.distance(`}
            <Typography bgcolor="#fff"  width={"fit-content"} display="inline">
              '#fff'
            </Typography>,
            <Typography bgcolor="red"  width={"fit-content"} display="inline">
              'red'
            </Typography>
            {")"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography >{
          coloris.distance("#fff","red")
          }</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
