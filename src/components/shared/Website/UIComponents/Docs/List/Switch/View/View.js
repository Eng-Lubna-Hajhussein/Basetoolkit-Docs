import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Switch,
  SvgIcon,
} from "@basetoolkit/ui";

export default function SwitchListSecondary() {
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      subheader={<ListSubheader>Settings</ListSubheader>}
    >
      <ListItem>
        <ListItemIcon>
          <SvgIcon icon="wifi" variant="filled" />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
        <Switch
          edge="end"
          onChange={handleToggle("wifi")}
          checked={checked.includes("wifi")}
          inputProps={{
            "aria-labelledby": "switch-list-label-wifi",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <SvgIcon icon="bluetooth" variant="filled" />
        </ListItemIcon>
        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
        <Switch
          edge="end"
          onChange={handleToggle("bluetooth")}
          checked={checked.includes("bluetooth")}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        />
      </ListItem>
    </List>
  );
}
