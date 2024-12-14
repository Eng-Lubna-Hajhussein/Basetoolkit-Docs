export const source = `
import * as React from "react";
import {
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem,
  List,
  alpha,
  useTheme,
} from "@basetoolkit/ui";

export default function AlignItemsList() {
  const theme = useTheme();
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: alpha(theme.palette.divider, 0.3),
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color={"text.primary"}
                style={{ display: "inline" }}
              >
                Ali Connors
              </Typography>
              <Typography
                component="span"
                variant="subtitle2"
                color={"default"}
                style={{ display: "inline" }}
              >
                {" — I'll be in your neighborhood doing errands this…"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Travis Howard"
            src="https://tse4.mm.bing.net/th?id=OIP.IrJSe207eQF64kILfjypIwHaHa&pid=Api&P=0&h=220"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color={"text.primary"}
                style={{ display: "inline" }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              <Typography
                component="span"
                variant="subtitle2"
                color={"default"}
                style={{ display: "inline" }}
              >
                {" — Wish I could come, but I'm out of town this…"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Cindy Baker"
            src="https://tse4.mm.bing.net/th?id=OIP.0p9Uc6Q1ZN1cyUfReUTOFAHaHa&pid=Api&P=0&h=220"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color={"text.primary"}
                style={{ display: "inline" }}
              >
                Sandra Adams
              </Typography>
              <Typography
                component="span"
                variant="subtitle2"
                color={"default"}
                style={{ display: "inline" }}
              >
                {" — Do you have Paris recommendations? Have you ever…"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
`