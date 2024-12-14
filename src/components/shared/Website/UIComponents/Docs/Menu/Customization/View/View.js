import * as React from "react";
import {
  cssInjection as styled,
  alpha,
  Menu,
  MenuItem,
  Button,
  SvgIcon,
  Divider,
} from "@basetoolkit/ui";
import {
  menuItemClasses,
  menuListClasses,
  svgIconClasses,
} from "@basetoolkit/ui/classes";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  borderRadius: 6,
  marginTop: theme.spacing(1),
  minWidth: 180,
  color: "rgb(55, 65, 81)",
  boxShadow:
    "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  [`& .${menuListClasses.root}`]: {
    padding: "4px 0",
  },
  [`& .${menuItemClasses.root}`]: {
    [`& .${svgIconClasses.root}`]: {
      height: 18,
      width: 18,
      fill: theme.palette.text.secondary,
      marginRight: theme.spacing(1.5),
    },
    "&:active": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity
      ),
    },
  },
  ...theme.applyStyles("dark", {
    color: theme.palette.grey[300],
  }),
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<SvgIcon icon="keyboard_arrow_down" color="common.white" />}
      >
        Options
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <SvgIcon variant="filled" icon="edit" />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SvgIcon variant="filled" icon="file_copy" />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <SvgIcon variant="filled" icon="archive" />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SvgIcon icon="more_horiz" />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
