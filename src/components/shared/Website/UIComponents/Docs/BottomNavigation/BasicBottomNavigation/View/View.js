import * as React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@basetoolkit/ui";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={"restore"} />
        <BottomNavigationAction label="Favorites" icon={"favorite"} />
        <BottomNavigationAction label="Nearby" icon={"location_on"} />
      </BottomNavigation>
    </Box>
  );
}
