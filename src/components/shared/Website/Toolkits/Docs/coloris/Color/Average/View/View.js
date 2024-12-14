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
        <Grid item xs={8} container justifyContent="start">
          <Typography>
            {`coloris.`}
           
            {".average("}
            <Typography
              bgcolor="#ddd"
              width={"fit-content"}
              display="inline"
            >
              ['#ddd'
            </Typography>
             , 
            <Typography bgcolor="yellow" width={"fit-content"} display="inline">
              'yellow'
              </Typography>
              , 
            <Typography bgcolor="red" width={"fit-content"} display="inline">
              'red'
              </Typography>
              , 
            <Typography bgcolor="teal" width={"fit-content"} display="inline">
              'teal'
              </Typography>
              ]
            {",[0.2,1,0.1,0.3])"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={2} container justifyContent="end">
          <Typography bgcolor={coloris.average(['#ddd', 'yellow', 'red', 'teal'],[.2,1,.1,.3])}>
            {coloris.average(['#ddd', 'yellow', 'red', 'teal'],[.2,1,.1,.3])}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={8} container justifyContent="start">
          <Typography>
            {`coloris.`}
           
            {".average("}
            <Typography
              bgcolor="#ddd"
              width={"fit-content"}
              display="inline"
            >
              ['#ddd'
            </Typography>
             , 
            <Typography bgcolor="yellow" width={"fit-content"} display="inline">
              'yellow'
              </Typography>
              , 
            <Typography bgcolor="red" width={"fit-content"} display="inline">
              'red'
              </Typography>
              , 
            <Typography bgcolor="teal" width={"fit-content"} display="inline">
              'teal'
              </Typography>
              ]
            {",[0.5,0.5,0.5,0.5])"}
          </Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={2} container justifyContent="end">
          <Typography bgcolor={coloris.average(['#ddd', 'yellow', 'red', 'teal'],[.5,.5,.5,.5])}>
            {coloris.average(['#ddd', 'yellow', 'red', 'teal'],[.5,.5,.5,.5])}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
