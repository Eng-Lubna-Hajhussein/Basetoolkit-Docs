import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@basetoolkit/ui";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345,pb:1}}>
      <CardActionArea style={{height:"auto"}}>
        <CardMedia
          component="img"
          height="140"
          image="https://tse1.mm.bing.net/th?id=OIP.PVPzPS1EI7t1PjJrhd41TAHaE8&pid=Api&P=0&h=220"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
