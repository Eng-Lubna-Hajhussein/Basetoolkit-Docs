export const source = `
import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@basetoolkit/ui";

export default function VideoCard() {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardMedia
        component="video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        sx={{ height: 220 }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Example Video
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is an example of how you can use CardMedia to display a video
          inside a BaseToolkit Card.
        </Typography>
      </CardContent>
      <CardActions sx={{ py: 1 }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
`;
