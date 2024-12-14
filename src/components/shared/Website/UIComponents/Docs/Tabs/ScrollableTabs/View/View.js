import * as React from "react";
import { Tabs, Tab, Box, Stack } from "@basetoolkit/ui";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: 480,
        xs: { maxWidth: 320 },
        bgcolor: "background.paper.light",
      }}
    >
      <Tabs
        sx={{ bgcolor: "divider" }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        textColor="secondary"
        
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}
