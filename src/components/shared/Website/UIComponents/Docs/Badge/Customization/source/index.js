export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  IconButton,
  Badge,
  SvgIcon,
} from "@basetoolkit/ui";
import { badgeClasses } from "@basetoolkit/ui/classes";

const StyledBadge = styled(Badge)(({ theme }) => ({
  [\`& .\${badgeClasses.badge}\`]: {
    right: -3,
    top: 13,
    border: \`2px solid \${theme.palette.background.paper}\`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart" disableRipple style={{overflow:"initial"}}>
      <StyledBadge badgeContent={4} color="secondary">
        <SvgIcon variant="filled" icon="shopping_cart" />
      </StyledBadge>
    </IconButton>
  );
}
`;
