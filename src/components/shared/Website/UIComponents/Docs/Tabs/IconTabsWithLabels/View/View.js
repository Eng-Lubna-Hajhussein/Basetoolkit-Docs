import * as React from "react";
import { Tabs, Tab, SvgIcon } from "@basetoolkit/ui";

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      aria-label="icon label tabs example"
    >
      <Tab icon={<SvgIcon icon="phone" variant="filled" />} label="RECENTS" />
      <Tab
        icon={<SvgIcon icon="favorite" variant="filled" />}
        label="FAVORITES"
      />
      <Tab
        icon={<SvgIcon icon="person_pin" variant="filled" />}
        label="NEARBY"
      />
    </Tabs>
  );
}
