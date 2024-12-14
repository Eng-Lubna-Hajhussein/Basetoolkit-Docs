export const source = `
import * as React from "react";
import { Avatar, Stack } from "@basetoolkit/ui";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220" />
      <Avatar alt="Travis Howard" src="https://tse4.mm.bing.net/th?id=OIP.IrJSe207eQF64kILfjypIwHaHa&pid=Api&P=0&h=220" />
      <Avatar alt="Cindy Baker" src="https://tse4.mm.bing.net/th?id=OIP.0p9Uc6Q1ZN1cyUfReUTOFAHaHa&pid=Api&P=0&h=220" />
    </Stack>
  );
}
`;
