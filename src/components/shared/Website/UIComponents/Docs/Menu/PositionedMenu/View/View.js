import * as React from "react";
import {
  Box,
  Avatar,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
  Tooltip,
  SvgIcon,
  Menu,
  Stack,
} from "@basetoolkit/ui";
import { avatarClasses } from "@basetoolkit/ui/classes";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings" placement="right">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          left: "43% !important",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          [`& .${avatarClasses.root}`]: {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper.light",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Stack direction={"row"} alignItems="center">
            <Avatar>
              <SvgIcon icon="person" variant="filled" color="#fff" />
            </Avatar>{" "}
            Profile
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Stack direction={"row"} alignItems="center">
            <Avatar>
              <SvgIcon icon="person" variant="filled" color="#fff" />
            </Avatar>{" "}
            My account
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Stack direction={"row"} spacing={1}>
            <ListItemIcon>
              <SvgIcon icon="person_add" fontSize={20} />
            </ListItemIcon>
            Add another account
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Stack direction={"row"} spacing={1}>
            <ListItemIcon>
              <SvgIcon icon="settings" fontSize={20} />
            </ListItemIcon>
            Settings
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Stack direction={"row"} spacing={1}>
            <ListItemIcon>
              <SvgIcon icon="logout" fontSize={20} />
            </ListItemIcon>
            Logout
          </Stack>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
