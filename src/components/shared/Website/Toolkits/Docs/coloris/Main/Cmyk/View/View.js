import { Grid, Typography, Divider } from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

export default function App() {
  return (
    <Grid container width={"100%"}>
      <Grid item xs={12} container justifyContent="center">
        <Grid item xs={5} container justifyContent="start">
          <Typography>{"coloris.cmyk(0.2, 0.8, 0, 0)"}</Typography>
        </Grid>
        <Grid item xs={1} container justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5} container justifyContent="end">
          <Typography bgcolor={coloris.cmyk(0.2, 0.8, 0, 0)}>
            {coloris.cmyk(0.2, 0.8, 0, 0)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
