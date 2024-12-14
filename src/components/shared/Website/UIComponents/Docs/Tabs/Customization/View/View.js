import * as React from "react";
import { cssInjection as styled, Tabs, Box, Tab } from "@basetoolkit/ui";
import { tabClasses, tabsClasses } from "@basetoolkit/ui/classes";

const AntTabs = styled((props) => <Tabs color="#1890ff" indicatorColor="#1890ff" {...props} />)(
  {
    borderBottom: "1px solid #e8e8e8",
  }
);

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme,selected }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    ...(selected?{
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    }:{}),
    "&:focus": {
      backgroundColor: "#d1eaff",
    },
  })
);

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    indicatorColor="rgba(0, 0, 0, 0)"
  />
))({
    // [`& .${tabsClasses.tabs}`]:{
       [`& .${tabClasses.selected}`]:{
        "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "50%", 
            height: "2px", 
            backgroundColor: "#635ee7", 
          },
       } 
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme,selected }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color:selected?"#fff !important": "rgba(255, 255, 255, 0.7) !important", 
    "&:focus": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Tab 1" />
          <AntTab label="Tab 2" />
          <AntTab label="Tab 3" />
        </AntTabs>
        <Box sx={{ p: 3 }} />
      </Box>
      <Box sx={{ bgcolor: "#2e1534" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Workflows" />
          <StyledTab label="Datasets" />
          <StyledTab label="Connections" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}
