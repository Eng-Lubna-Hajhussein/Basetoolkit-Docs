import * as React from "react";
import { Avatar, Stack } from "@basetoolkit/ui";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Omar Ali"
        src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Sami Omar"
        src="https://tse4.mm.bing.net/th?id=OIP.IrJSe207eQF64kILfjypIwHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Noor Ali"
        src="https://tse4.mm.bing.net/th?id=OIP.0p9Uc6Q1ZN1cyUfReUTOFAHaHa&pid=Api&P=0&h=220"
      />
        <Avatar
        alt="Jihad Taha"
        src="https://tse1.mm.bing.net/th?id=OIP.DNyjY7Q8lQdzc_vOtR1ONAHaEK&pid=Api&P=0&h=220"
      />
    </Stack>
  );
}
