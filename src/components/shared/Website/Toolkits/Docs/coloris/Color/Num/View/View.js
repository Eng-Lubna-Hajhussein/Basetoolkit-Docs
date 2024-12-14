import { Grid, Typography, Divider } from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="#000000"
              color="#fff"
              width={"fit-content"}
              display="inline"
            >
              '#000000'
            </Typography>
            {").num()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("#000000").num()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="#0000ff"
              color="#fff"
              width={"fit-content"}
              display="inline"
            >
              '#0000ff'
            </Typography>
            {").num()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("#0000ff").num()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="#00ff00"
              color="#fff"
              width={"fit-content"}
              display="inline"
            >
              '#00ff00'
            </Typography>
            {").num()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("#00ff00").num()}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>
            {`coloris(`}
            <Typography
              bgcolor="#ff0000"
              color="#fff"
              width={"fit-content"}
              display="inline"
            >
              '#ff0000'
            </Typography>
            {").num()"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography>{coloris("#ff0000").num()}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
