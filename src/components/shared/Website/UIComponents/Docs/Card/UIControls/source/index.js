export const source = `
import * as React from "react";
import {
  useTheme,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  SvgIcon,
} from "@basetoolkit/ui";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", width: 200 }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SvgIcon icon="skip_next" variant="filled" />
            ) : (
              <SvgIcon icon="skip_previous" variant="filled" />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <SvgIcon
              icon="play_arrow"
              variant="filled"
              sx={{ height: 38, width: 38 }}
            />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SvgIcon icon="skip_previous" variant="filled" />
            ) : (
              <SvgIcon icon="skip_next" variant="filled" />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, height: 170 }}
        image="https://tse2.mm.bing.net/th?id=OIP.j6Y3aQoAEoXF5YMR1CbHvwHaEK&pid=Api&P=0&h=220"
        alt="Live from space album cover"
      />
    </Card>
  );
}
`;
