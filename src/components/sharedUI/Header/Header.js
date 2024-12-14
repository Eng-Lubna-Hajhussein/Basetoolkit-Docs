import * as React from "react";
import {
  Box,
  useTheme,
  Toolbar,
  IconButton,
  SvgIcon,
  Grid,
  keyframes,
  Chip,
  useCSSClass,
} from "@basetoolkit/ui";
import { svgIconClasses } from "@basetoolkit/ui/classes";
import coloris from "@basetoolkit/ui/coloris";
import Search from "../../styled/Search/Search";
import StyledInputBase from "../../styled/InputBase/InputBase";
import StyledAppBar from "../../styled/AppBar/AppBar";

function Header({ drawerActions, handleToggleDrawer, drawerWidth }) {
  const theme = useTheme();

  const [isOpen, setIsOpen] = React.useState(false);

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
        if (!isOpen) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

  const { animatedPlusIcons } = useCSSClass({
    animatedPlusIcons: {
      "&:hover": {
        [`& .${svgIconClasses.root}`]: {
          animation: `${pulseAnimation} 0.5s ease-in-out`,
        },
      },
    },
  });

  return (
    <StyledAppBar
      position="absolute"
      open={drawerActions.open}
      p={0}
      elevation={0}
      drawerWidth={drawerWidth}
    >
      <Toolbar style={{ padding: 0 }} bgcolor="common.white">
        <Grid container alignContent="center" px={0} sx={{ width: "100%" }}>
          <Grid
            item
            xs={4}
            container
            alignContent="center"
            alignItems="center"
            sx={{ height: "auto" }}
          ></Grid>
          <Grid item xs={8} container justifyContent="end" px={1}>
            <Grid item>
              <Search>
                <StyledInputBase
                  inputRef={inputRef}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  InputProps={{
                    startAdornment: <SvgIcon icon="search" mr={"3px"} fontSize={20} />,
                    endAdornment: (
                      <Chip
                        label="Ctrl + k"
                        style={{ borderRadius: "5px" }}
                        size="small"
                      />
                    ),
                  }}
                />
              </Search>
            </Grid>

            <Grid item alignContent="center">
              <IconButton color="primary" className={animatedPlusIcons}>
                <SvgIcon icon="palette" variant="outlined" fontSize={22} />
              </IconButton>
            </Grid>
            <Grid item alignContent="center">
              <IconButton color="primary" className={animatedPlusIcons}>
                <SvgIcon icon="mode_night" variant="outlined" fontSize={20} />
              </IconButton>
            </Grid>
            <Grid item alignContent="center">
              <IconButton color="primary" className={animatedPlusIcons}>
                <SvgIcon icon="settings" variant="filled" fontSize={20} />
              </IconButton>
            </Grid>
            <Grid item alignContent="center" px={0}>
              <Box
                onClick={handleToggleDrawer}
                sx={{
                  bgcolor: coloris(theme.palette.primary.main).alpha(0.8).hex(),
                  "&:hover": {
                    bgcolor: coloris(theme.palette.primary.main)
                      .alpha(0.5)
                      .hex(),
                  },
                  cursor: "pointer",
                }}
                display="flex"
                alignItems="center"
                p={"5px"}
                borderRadius={2}
              >
                <SvgIcon icon="menu" color="common.white" fontSize={20} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
