import * as React from "react";
import {
  Box,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
  ListSubheader,
  Collapse,
} from "@basetoolkit/ui";
import {
  listItemClasses,
  listItemIconClasses,
} from "@basetoolkit/ui/classes";
import logoImg from "./../../../assets/logo.svg";
import DrawerHeader from "../../styled/DrawerHeader/DrawerHeader";
import StyledDrawer from "../../styled/Drawer/Drawer";
import { AppContext } from "../../../contextapi/context/AppContext";
import { categoriesEnum } from "../../../AppHelper/appVariables";
import { useNavigate } from "react-router-dom";

function Sidebar({ drawerWidth, drawerActions, setDrawerActions }) {
  const { appState, appDispatch } = React.useContext(AppContext);
  const navigate = useNavigate();

  return (
    <StyledDrawer
      variant="permanent"
      drawerWidth={drawerWidth}
      onMouseEnter={() => {
        if (!drawerActions.open) {
          setDrawerActions({ ...drawerActions, hoverOpen: true });
        }
      }}
      onMouseLeave={() => {
        if (drawerActions.hoverOpen) {
          setDrawerActions({ ...drawerActions, hoverOpen: false });
        }
      }}
      open={drawerActions.open || drawerActions.hoverOpen}
      sx={{
        [`& .${listItemClasses.selected}`]: {
          [`& .${listItemIconClasses.root}`]: {
            bgcolor: "primary",
          },
        },
      }}
    >
      <DrawerHeader open={drawerActions.open || drawerActions.hoverOpen}>
        <img src={logoImg} />
      </DrawerHeader>
      <Divider />
      <Box className="drawer-content">
        <List
          subheader={
            <ListSubheader
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.5",
                letterSpacing: "0",
                fontWeight: "600",
                padding: 0,
                paddingLeft: 0,
                fontFamily: "sans-serif",
                ...(!drawerActions.open && !drawerActions.hoverOpen
                  ? {
                      display: "flex",
                      justifyContent: "center",
                    }
                  : {}),
              }}
              component="div"
              id="nested-list-subheader"
            >
              <SvgIcon
                icon="widgets"
                size={"medium"}
                color="default.light"
                {...((drawerActions.open || drawerActions.hoverOpen) && {
                  mr: 1,
                })}
              />
              {drawerActions.open || drawerActions.hoverOpen
                ? "Components"
                : ""}
            </ListSubheader>
          }
        >
          {Object.keys(categoriesEnum.uiComponents).map((category) => {
            const value = categoriesEnum.uiComponents[category].value;
            const label = categoriesEnum.uiComponents[category].label;
            const components = categoriesEnum.uiComponents[category].components;
            return (
              <>
                {(drawerActions.open || drawerActions.hoverOpen) && (
                  <ListItem disablePadding key={value}>
                    <ListItemButton
                      onClick={() => {
                        const expanded =
                          appState.ui.actions.expandedCategories[value];
                        appState.ui.actions.expandedCategories[value] =
                          !expanded;
                        appDispatch();
                      }}
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                          "&:hover": { bgcolor: "transparent !important" },
                        },
                        drawerActions.open || drawerActions.hoverOpen
                          ? {
                              justifyContent: "initial",
                              width: "100%",
                            }
                          : {
                              justifyContent: "center",
                              width: "100%",
                            },
                      ]}
                    >
                      {
                        <ListItemText
                          primary={label}
                          sx={[
                            drawerActions.open || drawerActions.hoverOpen
                              ? {
                                  opacity: 1,
                                }
                              : {
                                  opacity: 0,
                                },
                          ]}
                          primaryTypographyProps={{
                            variant: "caption",
                            color: "default",
                            fontWeight: "600",
                            style: { textTransform: "uppercase" },
                          }}
                        />
                      }
                      {(drawerActions.open || drawerActions.hoverOpen) && (
                        <Box display="flex" flexGrow={1}>
                          <IconButton color="primary" size="small">
                            {appState.ui.actions.expandedCategories[value] ? (
                              <SvgIcon
                                icon="remove"
                                size="small"
                                color="default.light"
                              />
                            ) : (
                              <SvgIcon
                                icon="add"
                                size="small"
                                color="default.light"
                              />
                            )}
                          </IconButton>
                        </Box>
                      )}
                    </ListItemButton>
                  </ListItem>
                )}
                <Collapse
                  in={
                    appState.ui.actions.expandedCategories[value] &&
                    (drawerActions.open || drawerActions.hoverOpen)
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {components.map(({ root, value, label, path }, index) => (
                      <ListItem
                        key={value}
                        disablePadding
                        sx={{ pl: "16px !important" }}
                        selected={
                          appState.ui?.actions?.selectedItem?.value === value
                        }
                        onClick={() => {
                          appState.ui.actions.selectedItem = {
                            root,
                            value,
                            label,
                          };
                          appDispatch();
                          navigate(path);
                        }}
                      >
                        <ListItemButton
                          sx={[
                            {
                              px: 2.5,
                              "&:hover": {
                                bgcolor: "transparent !important",
                              },
                            },
                            drawerActions.open || drawerActions.hoverOpen
                              ? {
                                  justifyContent: "initial",
                                }
                              : {
                                  justifyContent: "center",
                                  width: "100%",
                                },
                          ]}
                        >
                          {(drawerActions.open || drawerActions.hoverOpen) && (
                            <ListItemText
                              primary={label}
                              sx={[
                                drawerActions.open || drawerActions.hoverOpen
                                  ? {
                                      opacity: 1,
                                    }
                                  : {
                                      opacity: 0,
                                    },
                              ]}
                              primaryTypographyProps={{
                                variant: "caption",
                                style: {
                                  fontWeight: "600",
                                  textTransform: "capitalize",
                                },
                              }}
                            />
                          )}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.5",
                letterSpacing: "0",
                fontWeight: "600",
                padding: 0,
                paddingLeft: 0,
                fontFamily: "sans-serif",
                ...(!drawerActions.open && !drawerActions.hoverOpen
                  ? {
                      display: "flex",
                      justifyContent: "center",
                    }
                  : {}),
              }}
              component="div"
              id="nested-list-subheader"
            >
              <SvgIcon
                icon="line_style"
                size={"medium"}
                color="default.light"
                {...((drawerActions.open || drawerActions.hoverOpen) && {
                  mr: 1,
                })}
              />
              {drawerActions.open || drawerActions.hoverOpen ? "Css In JS" : ""}
            </ListSubheader>
          }
        >
          {Object.keys(categoriesEnum.cssInJS).map((category) => {
            const value = categoriesEnum.cssInJS[category].value;
            const label = categoriesEnum.cssInJS[category].label;
            const sections = categoriesEnum.cssInJS[category].sections;
            return (
              <>
                {(drawerActions.open || drawerActions.hoverOpen) && (
                  <ListItem disablePadding key={value}>
                    <ListItemButton
                      onClick={() => {
                        const expanded =
                          appState.ui.actions.expandedCategories[value];
                        appState.ui.actions.expandedCategories[value] =
                          !expanded;
                        appDispatch();
                      }}
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                          "&:hover": { bgcolor: "transparent !important" },
                        },
                        drawerActions.open || drawerActions.hoverOpen
                          ? {
                              justifyContent: "initial",
                              width: "100%",
                            }
                          : {
                              justifyContent: "center",
                              width: "100%",
                            },
                      ]}
                    >
                      {
                        <ListItemText
                          primary={label}
                          sx={[
                            drawerActions.open || drawerActions.hoverOpen
                              ? {
                                  opacity: 1,
                                }
                              : {
                                  opacity: 0,
                                },
                          ]}
                          primaryTypographyProps={{
                            variant: "caption",
                            color: "default",
                            fontWeight: "600",
                            style: { textTransform: "uppercase" },
                          }}
                        />
                      }
                      {(drawerActions.open || drawerActions.hoverOpen) && (
                        <Box display="flex" flexGrow={1}>
                          <IconButton color="primary" size="small">
                            {appState.ui.actions.expandedCategories[value] ? (
                              <SvgIcon
                                icon="remove"
                                size="small"
                                color="default.light"
                              />
                            ) : (
                              <SvgIcon
                                icon="add"
                                size="small"
                                color="default.light"
                              />
                            )}
                          </IconButton>
                        </Box>
                      )}
                    </ListItemButton>
                  </ListItem>
                )}
                <Collapse
                  in={
                    appState.ui.actions.expandedCategories[value] &&
                    (drawerActions.open || drawerActions.hoverOpen)
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {sections.map(({ root, value, label, path }, index) => (
                      <ListItem
                        key={value}
                        disablePadding
                        sx={{ pl: "16px !important" }}
                        selected={
                          appState.ui?.actions?.selectedItem?.value === value
                        }
                        onClick={() => {
                          appState.ui.actions.selectedItem = {
                            root,
                            value,
                            label,
                          };
                          appDispatch();
                          navigate(path);
                        }}
                      >
                        <ListItemButton
                          sx={[
                            {
                              px: 2.5,
                              "&:hover": {
                                bgcolor: "transparent !important",
                              },
                            },
                            drawerActions.open || drawerActions.hoverOpen
                              ? {
                                  justifyContent: "initial",
                                }
                              : {
                                  justifyContent: "center",
                                  width: "100%",
                                },
                          ]}
                        >
                          {(drawerActions.open || drawerActions.hoverOpen) && (
                            <ListItemText
                              primary={label}
                              sx={[
                                drawerActions.open || drawerActions.hoverOpen
                                  ? {
                                      opacity: 1,
                                    }
                                  : {
                                      opacity: 0,
                                    },
                              ]}
                              primaryTypographyProps={{
                                variant: "caption",
                                style: {
                                  fontWeight: "600",
                                  textTransform: "capitalize",
                                },
                              }}
                            />
                          )}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.5",
                letterSpacing: "0",
                fontWeight: "600",
                padding: 0,
                paddingLeft: 0,
                fontFamily: "sans-serif",
                ...(!drawerActions.open && !drawerActions.hoverOpen
                  ? {
                      display: "flex",
                      justifyContent: "center",
                    }
                  : {}),
              }}
              component="div"
              id="nested-list-subheader"
            >
              <SvgIcon
                icon="design_services"
                size={"medium"}
                color="default.light"
                {...((drawerActions.open || drawerActions.hoverOpen) && {
                  mr: 1,
                })}
              />
              {drawerActions.open || drawerActions.hoverOpen ? "Toolkits" : ""}
            </ListSubheader>
          }
        >
          {Object.keys(categoriesEnum.toolkits).map((category) => {
            const value = categoriesEnum.toolkits[category].value;
            const label = categoriesEnum.toolkits[category].label;
            const sections = categoriesEnum.toolkits[category].sections;
            return (
              <>
                {(drawerActions.open || drawerActions.hoverOpen) && (
                  <ListItem disablePadding key={value}>
                    <ListItemButton
                      onClick={() => {
                        const expanded =
                          appState.ui.actions.expandedCategories[value];
                        appState.ui.actions.expandedCategories[value] =
                          !expanded;
                        appDispatch();
                      }}
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                          "&:hover": { bgcolor: "transparent !important" },
                        },
                        drawerActions.open || drawerActions.hoverOpen
                          ? {
                              justifyContent: "initial",
                              width: "100%",
                            }
                          : {
                              justifyContent: "center",
                              width: "100%",
                            },
                      ]}
                    >
                      {
                        <ListItemText
                          primary={label}
                          sx={[
                            drawerActions.open || drawerActions.hoverOpen
                              ? {
                                  opacity: 1,
                                }
                              : {
                                  opacity: 0,
                                },
                          ]}
                          primaryTypographyProps={{
                            variant: "caption",
                            color: "default",
                            fontWeight: "600",
                            style: { textTransform: "uppercase" },
                          }}
                        />
                      }
                      {(drawerActions.open || drawerActions.hoverOpen) && (
                        <Box display="flex" flexGrow={1}>
                          <IconButton color="primary" size="small">
                            {appState.ui.actions.expandedCategories[value] ? (
                              <SvgIcon
                                icon="remove"
                                size="small"
                                color="default.light"
                              />
                            ) : (
                              <SvgIcon
                                icon="add"
                                size="small"
                                color="default.light"
                              />
                            )}
                          </IconButton>
                        </Box>
                      )}
                    </ListItemButton>
                  </ListItem>
                )}
                <Collapse
                  in={
                    appState.ui.actions.expandedCategories[value] &&
                    (drawerActions.open || drawerActions.hoverOpen)
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {sections.map(({ root, value, label, path }, index) => (
                      <ListItem
                        key={value}
                        disablePadding
                        sx={{ pl: "16px !important" }}
                        selected={
                          appState.ui?.actions?.selectedItem?.value === value
                        }
                        onClick={() => {
                          appState.ui.actions.selectedItem = {
                            root,
                            value,
                            label,
                          };
                          appDispatch();
                          navigate(path);
                        }}
                      >
                        <ListItemButton
                          sx={[
                            {
                              px: 2.5,
                              "&:hover": {
                                bgcolor: "transparent !important",
                              },
                            },
                            drawerActions.open || drawerActions.hoverOpen
                              ? {
                                  justifyContent: "initial",
                                }
                              : {
                                  justifyContent: "center",
                                  width: "100%",
                                },
                          ]}
                        >
                          {(drawerActions.open || drawerActions.hoverOpen) && (
                            <ListItemText
                              primary={label}
                              sx={[
                                drawerActions.open || drawerActions.hoverOpen
                                  ? {
                                      opacity: 1,
                                    }
                                  : {
                                      opacity: 0,
                                    },
                              ]}
                              primaryTypographyProps={{
                                variant: "caption",
                                style: {
                                  fontWeight: "600",
                                  textTransform: "capitalize",
                                },
                              }}
                            />
                          )}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.5",
                letterSpacing: "0",
                fontWeight: "600",
                padding: 0,
                paddingLeft: 0,
                fontFamily: "sans-serif",
                ...(!drawerActions.open && !drawerActions.hoverOpen
                  ? {
                      display: "flex",
                      justifyContent: "center",
                    }
                  : {}),
              }}
              component="div"
              id="nested-list-subheader"
            >
              <SvgIcon
                icon="design_services"
                size={"medium"}
                color="default.light"
                {...((drawerActions.open || drawerActions.hoverOpen) && {
                  mr: 1,
                })}
              />
              {drawerActions.open || drawerActions.hoverOpen ? "Templates" : ""}
            </ListSubheader>
          }
        >
          {Object.keys(categoriesEnum.templates).map((category) => {
            const value = categoriesEnum.templates[category].value;
            const label = categoriesEnum.templates[category].label;
            const sections = categoriesEnum.templates[category].sections;
            return (
              <>
                {(drawerActions.open || drawerActions.hoverOpen) && (
                  <ListItem disablePadding key={value}>
                    <ListItemButton
                      onClick={() => {
                        const expanded =
                          appState.ui.actions.expandedCategories[value];
                        appState.ui.actions.expandedCategories[value] =
                          !expanded;
                        appDispatch();
                      }}
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                          "&:hover": { bgcolor: "transparent !important" },
                        },
                        drawerActions.open || drawerActions.hoverOpen
                          ? {
                              justifyContent: "initial",
                              width: "100%",
                            }
                          : {
                              justifyContent: "center",
                              width: "100%",
                            },
                      ]}
                    >
                      {
                        <ListItemText
                          primary={label}
                          sx={[
                            drawerActions.open || drawerActions.hoverOpen
                              ? {
                                  opacity: 1,
                                }
                              : {
                                  opacity: 0,
                                },
                          ]}
                          primaryTypographyProps={{
                            variant: "caption",
                            color: "default",
                            fontWeight: "600",
                            style: { textTransform: "uppercase" },
                          }}
                        />
                      }
                      {(drawerActions.open || drawerActions.hoverOpen) && (
                        <Box display="flex" flexGrow={1}>
                          <IconButton color="primary" size="small">
                            {appState.ui.actions.expandedCategories[value] ? (
                              <SvgIcon
                                icon="remove"
                                size="small"
                                color="default.light"
                              />
                            ) : (
                              <SvgIcon
                                icon="add"
                                size="small"
                                color="default.light"
                              />
                            )}
                          </IconButton>
                        </Box>
                      )}
                    </ListItemButton>
                  </ListItem>
                )}
                <Collapse
                  in={
                    appState.ui.actions.expandedCategories[value] &&
                    (drawerActions.open || drawerActions.hoverOpen)
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {sections.map(({ root, value, label, path }, index) => (
                      <ListItem
                        key={value}
                        disablePadding
                        sx={{ pl: "16px !important" }}
                        selected={
                          appState.ui?.actions?.selectedItem?.value === value
                        }
                        onClick={() => {
                          appState.ui.actions.selectedItem = {
                            root,
                            value,
                            label,
                          };
                          appDispatch();
                          navigate(path);
                        }}
                      >
                        <ListItemButton
                          sx={[
                            {
                              px: 2.5,
                              "&:hover": {
                                bgcolor: "transparent !important",
                              },
                            },
                            drawerActions.open || drawerActions.hoverOpen
                              ? {
                                  justifyContent: "initial",
                                }
                              : {
                                  justifyContent: "center",
                                  width: "100%",
                                },
                          ]}
                        >
                          {(drawerActions.open || drawerActions.hoverOpen) && (
                            <ListItemText
                              primary={label}
                              sx={[
                                drawerActions.open || drawerActions.hoverOpen
                                  ? {
                                      opacity: 1,
                                    }
                                  : {
                                      opacity: 0,
                                    },
                              ]}
                              primaryTypographyProps={{
                                variant: "caption",
                                style: {
                                  fontWeight: "600",
                                  textTransform: "capitalize",
                                },
                              }}
                            />
                          )}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
        <Divider />
      </Box>
    </StyledDrawer>
  );
}

export default Sidebar;
