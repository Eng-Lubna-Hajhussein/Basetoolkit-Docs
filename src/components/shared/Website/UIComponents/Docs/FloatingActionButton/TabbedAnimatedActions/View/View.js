
import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Zoom,
  Fab,
  Typography,
  Tab,
  Tabs,
  AppBar,
  useTheme,
  SvgIcon,
  colors,
  Grow,
} from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: "absolute",
  top: 0,
  right: 16,
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: colors.green[500],
  "&:hover": {
    bgcolor: colors.green[600],
  },
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary",
      style: fabStyle,
      icon: <SvgIcon icon="add" color="common.white" />,
      label: "Add",
    },
    {
      color: "secondary",
      style: fabStyle,
      icon: <SvgIcon icon="edit" variant="filled" color="common.white" />,
      label: "Edit",
    },
    {
      color: colors.green[500],
      style: fabStyle,
      sx: fabGreenStyle,
      icon: <SvgIcon icon="keyboard_arrow_up" color="common.white" />,
      label: "Expand",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: coloris(theme.palette.divider).alpha(0.3).hex(),
        width: 500,
        position: "relative",
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="divider" pb={0} px={0} height={"auto"}>
        <Tabs
          pt={1}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Dashboard" {...a11yProps(1)} />
          <Tab label="Settings" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Dashboard
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Settings
      </TabPanel>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
        >
          <Fab style={fab.style} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  );
}
