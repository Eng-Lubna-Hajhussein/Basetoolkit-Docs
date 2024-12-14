export const source = `
import * as React from "react";
import { Avatar, Chip, Stack } from "@basetoolkit/ui";

export default function AvatarChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={
          <Avatar height={20} width={20}>
            M
          </Avatar>
        }
        label="Avatar"
      />
      <Chip
        avatar={
          <Avatar
            alt="Natacha"
            src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
            height={20}
            width={20}
          />
        }
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  );
}
`;
