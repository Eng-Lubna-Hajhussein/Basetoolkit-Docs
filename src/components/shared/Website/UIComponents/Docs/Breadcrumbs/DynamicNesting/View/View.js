import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  List,
  ListItemButton,
  Collapse,
  ListItemText,
  Typography,
  Breadcrumbs,
  SvgIcon,
} from "@basetoolkit/ui";

const breadcrumbNameMap = {
  "/inbox": "Inbox",
  "/inbox/important": "Important",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts",
};

function ListItemLink({ to, open, onClick, ...other }) {
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <SvgIcon icon="expand_less" /> : <SvgIcon icon="expand_more" />;
  }

  return (
    <li>
      <ListItemButton onClick={() => onClick(to)} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function BreadcrumbsDisplay({ pathnames }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography sx={{ color: "text.primary" }}>Home</Typography>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography key={to} sx={{ color: "text.primary" }}>
            {breadcrumbNameMap[to] || "Unknown"}
          </Typography>
        ) : (
          <Typography key={to} sx={{ color: "inherit" }}>
            {breadcrumbNameMap[to] || "Unknown"}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
}

export default function RouterBreadcrumbs() {
  const [openInbox, setOpenInbox] = React.useState(true); // State to control collapse of Inbox
  const [currentPath, setCurrentPath] = React.useState("/inbox");

  const handleClick = (to) => {
    setCurrentPath(to);

    // If "Inbox" is clicked, toggle its collapse
    if (to === "/inbox") {
      setOpenInbox((prevOpen) => !prevOpen);
    }
  };

  const pathnames = currentPath.split("/").filter((x) => x);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: 360 }}>
      {/* Display the breadcrumbs based on the current simulated path */}
      <BreadcrumbsDisplay pathnames={pathnames} />

      <Box
        sx={{ bgcolor: "background.paper", mt: 1 }}
        component="nav"
        aria-label="mailbox folders"
      >
        <List bgcolor="divider">
          {/* Inbox Item with Collapse */}
          <ListItemLink to="/inbox" open={openInbox} onClick={handleClick} />
          <Collapse component="li" in={openInbox} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemLink style={{ paddingLeft:"20px" }} to="/inbox/important" onClick={handleClick} />
            </List>
          </Collapse>

          {/* Other list items */}
          <ListItemLink to="/trash" onClick={handleClick} />
          <ListItemLink to="/spam" onClick={handleClick} />
        </List>
      </Box>
    </Box>
  );
}
