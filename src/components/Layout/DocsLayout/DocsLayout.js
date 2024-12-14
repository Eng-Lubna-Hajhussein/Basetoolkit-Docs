import * as React from "react";
import { Box, useTheme, useMediaQueryMatch } from "@basetoolkit/ui";
import DrawerHeader from "../../styled/DrawerHeader/DrawerHeader";
import Sidebar from "../../sharedUI/Sidebar/Sidebar";
import Header from "../../sharedUI/Header/Header";
import { badgeClasses, menuClasses, menuItemClasses, svgIconClasses,selectClasses,tabsClasses, textFieldClasses } from "@basetoolkit/ui/classes";

function DocsLayout({ children }) {
  const theme = useTheme();
  const blnSmallScreen = useMediaQueryMatch(
    theme.breakpoints.between("xs", "md")
  );
  const blnMidScreen = useMediaQueryMatch(
    theme.breakpoints.between("md", "lg")
  );

  const [drawerActions, setDrawerActions] = React.useState({
    open: !blnSmallScreen,
    hoverOpen: false,
  });

  React.useEffect(() => {
    setDrawerActions({ ...drawerActions, open: !blnSmallScreen });
  }, [blnSmallScreen]);

  const handleToggleDrawer = () => {
    if (blnSmallScreen) {
      setDrawerActions({
        ...drawerActions,
        hoverOpen: !drawerActions.hoverOpen,
      });
    } else {
      setDrawerActions({ ...drawerActions, open: !drawerActions.open });
    }
  };

  const drawerWidth = 240;

  return (
    <Box
      sx={{
        display: "flex",
        [textFieldClasses.label]:{},
                "& .website-content": {
          mt: 1,
          ml: drawerActions.open
            ?`${drawerWidth + 1}px`
            : `calc(${theme.spacing(7)} + 15px)`,
          [theme.breakpoints.up("md")]: {
            ml: drawerActions.open
              ? `${drawerWidth + 1}px`
              : `calc(${theme.spacing(10)} + 15px)`,
          },
        },
      }}
    >
      <Header
        drawerActions={drawerActions}
        handleToggleDrawer={handleToggleDrawer}
        drawerWidth={drawerWidth}
      />
      <Sidebar
        drawerActions={drawerActions}
        setDrawerActions={setDrawerActions}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        className="website-content"
        style={{
          width: "100%",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default DocsLayout;
