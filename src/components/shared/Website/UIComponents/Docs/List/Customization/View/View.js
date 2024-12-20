import * as React from "react";
import {
  cssInjection as styled,
  ThemeProvider,
  createTheme,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  IconButton,
  Tooltip,
  SvgIcon,
  Box,
  useCSSClass,
} from "@basetoolkit/ui";
import {
  listItemButtonClasses,
  listItemClasses,
  listItemIconClasses,
} from "@basetoolkit/ui/classes";

const data = [
  { icon: <SvgIcon icon="people" variant="filled" />, label: "Authentication" },
  { icon: <SvgIcon icon="dns" variant="filled" />, label: "Database" },
  { icon: <SvgIcon icon="perm_media" variant="filled" />, label: "Storage" },
  { icon: <SvgIcon icon="public" variant="filled" />, label: "Hosting" },
];

const FireNav = styled(List)({
  [`& .${listItemButtonClasses.root}`]: {
    paddingLeft: 1.5,
    paddingRight: 1.5,
    "&:hover": {
      bgcolor: "rgba(71, 98, 130, 0.2)",
    },
  },
  [`& .${listItemClasses.root}`]: {
    "&:hover": { bgcolor: "transparent" },
  },
  [`& .${listItemIconClasses.root}`]: {
    minWidth: 0,
    marginRight: "16px",
  },
  "& svg:not(.home)": {
    fill: "rgba(255,255,255,0.8)",
  },
});

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);
  const { tooltip } = useCSSClass({
    tooltip: { bgcolor: "rgba(255,255,255,0.8) !important" },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: { dark: "rgb(5, 30, 52)" } },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Firebash"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                  color: "common.white",
                }}
              />
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 40 }}>
                <ListItemIcon>
                  <SvgIcon
                    icon="home"
                    className="home"
                    variant="filled"
                    color="primary"
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Project Overview"
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "medium",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
              <Tooltip
                title="Project Settings"
                placement="bottom"
                classes={{ tooltip: tooltip }}
              >
                <IconButton
                  size="large"
                  disableRipple
                  sx={{
                    position: "initial !important",
                    "&:hover": { bgcolor: "transparent !important" },
                    "& svg": {
                      fill: "rgba(255,255,255,0.8)",
                      transition: "0.2s",
                      transform: "translateX(0) rotate(0)",
                    },
                    "&:hover, &:focus": {
                      bgcolor: "unset",
                      "& svg:first-of-type": {
                        transform: "translateX(-4px) rotate(-20deg)",
                      },
                      "& svg:last-of-type": {
                        right: 0,
                        opacity: "1 !important",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      height: "60%",
                      display: "block",
                      left: 0,
                      width: "1px",
                      bgcolor: "divider",
                    },
                  }}
                >
                  <SvgIcon icon="settings" variant="filled" />
                  <SvgIcon
                    icon="arrow_right"
                    sx={{ position: "absolute", right: 4, opacity: 0 }}
                  />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={{
                ...(open
                  ? {
                      bgcolor: "rgba(71, 98, 130, 0.2)",
                    }
                  : {
                      bgcolor: "transparent",
                    }),
                ...(open
                  ? {
                      pb: 2,
                    }
                  : {
                      pb: 0,
                    }),
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  ...(open
                    ? {
                        pb: 0,
                      }
                    : {
                        pb: 2.5,
                      }),
                  ...(open
                    ? {
                        "&:hover, &:focus": {
                          "& svg": {
                            opacity: "1 !important",
                          },
                        },
                      }
                    : {
                        "&:hover, &:focus": {
                          "& svg": {
                            opacity: 0,
                          },
                        },
                      }),
                }}
              >
                <ListItemText
                  primary="Build"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                    color: "common.white",
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <SvgIcon
                  icon="keyboard_arrow_down"
                  sx={{
                    ml: -4,
                    opacity: 0,
                    transition: "0.2s",
                    // flexShrink: 0,
                    ...(open
                      ? {
                          transform: "rotate(-180deg)",
                        }
                      : {
                          transform: "rotate(0)",
                        }),
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32 }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        color: "rgba(255,255,255,.8)",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
