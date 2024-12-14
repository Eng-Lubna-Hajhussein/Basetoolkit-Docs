export const source = `
import * as React from "react";
import { cssInjection as styled, Badge, Avatar, Stack } from "@basetoolkit/ui";
import { badgeClasses } from "@basetoolkit/ui/classes";

const StyledBadge = styled(Badge)(({ theme }) => ({
  [\`& .\${badgeClasses.badge}\`]: {
    backgroundColor: "#44b700 !important",
    color: "#44b700",
    boxShadow: \`0 0 0 2px \${theme.palette.background.paper}\`,
    bottom:4,
    right:4,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: "22px !important",
  height: "22px !important",
  border: \`2px solid \${theme.palette.background.paper.light}\`,
}));

export default function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
        />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar
            alt="Remy Sharp"
            src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
          />
        }
      >
        <Avatar
          alt="Travis Howard"
          src="https://tse3.mm.bing.net/th?id=OIP.HsKmJ4YBxPLOor-msjRyOAHaHa&pid=Api&P=0&h=220"
        />
      </Badge>
    </Stack>
  );
}
`;
