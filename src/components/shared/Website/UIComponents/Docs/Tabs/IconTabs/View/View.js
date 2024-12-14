import * as React from "react";
import { Tabs, Tab, SvgIcon } from "@basetoolkit/ui";

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab
        icon={<SvgIcon icon="phone" variant="filled" />}
        aria-label="phone"
      />
      <Tab
        icon={<SvgIcon icon="favorite" variant="filled" />}
        aria-label="favorite"
      />
      <Tab
        icon={<SvgIcon icon="person_pin" variant="filled" />}
        aria-label="person"
      />
    </Tabs>
  );
}
