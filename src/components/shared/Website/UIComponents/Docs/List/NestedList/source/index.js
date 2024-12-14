export const source = `
import * as React from "react";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  SvgIcon,
  useTheme,
} from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

export default function NestedList() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: coloris(theme.palette.divider).alpha(0.2).hex(),
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SvgIcon icon="send" variant="filled" />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SvgIcon icon="drafts" variant="filled" />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SvgIcon icon="inbox" variant="filled" />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <SvgIcon icon="expand_less" /> : <SvgIcon icon="expand_more" />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
          <ListItemButton >
            <ListItemIcon sx={{ pl: 4 }}>
              <SvgIcon icon="star_border" />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
`