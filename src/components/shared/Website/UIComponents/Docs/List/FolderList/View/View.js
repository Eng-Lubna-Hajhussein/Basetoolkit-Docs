import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  SvgIcon,
  useTheme,
} from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

export default function FolderList() {
  const theme = useTheme();
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: coloris(theme.palette.divider).alpha(0.2).hex(),
        "& svg": {
          fill: "common.white",
        },
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SvgIcon icon="image" variant="filled" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SvgIcon icon="work" variant="filled" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SvgIcon icon="beach_access" variant="filled" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
