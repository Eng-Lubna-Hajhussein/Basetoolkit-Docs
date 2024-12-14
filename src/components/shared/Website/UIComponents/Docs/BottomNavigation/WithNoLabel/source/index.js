export const source = `
import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@basetoolkit/ui";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={"restore"}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={"favorite"}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={"location_on"}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={"folder"}
      />
    </BottomNavigation>
  );
}
`;
