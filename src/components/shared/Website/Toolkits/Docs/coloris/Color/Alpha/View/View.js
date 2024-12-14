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
            <Typography bgcolor="red" width={"fit-content"} display="inline">
              'red'
            </Typography>
            {").alpha(0.5).hex()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris("red").alpha(.5).hex()}>{
          coloris("red").alpha(.5).hex()
          }</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
