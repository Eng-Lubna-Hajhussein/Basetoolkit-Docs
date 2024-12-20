import * as React from "react";
import { Avatar, AvatarGroup } from "@basetoolkit/ui";

export default function GroupAvatars() {
  return (
    <AvatarGroup max={3}>
      <Avatar
        alt="Omar Ali"
        src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Sami Fadi"
        src="https://tse4.mm.bing.net/th?id=OIP.IrJSe207eQF64kILfjypIwHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Ali Rami"
        src="https://tse4.mm.bing.net/th?id=OIP.0p9Uc6Q1ZN1cyUfReUTOFAHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Noor Ali"
        src="https://tse3.mm.bing.net/th?id=OIP.XjvTFFI032NhXwhUTp7QUAHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Jihad Taha"
        src="https://tse3.mm.bing.net/th?id=OIP.HsKmJ4YBxPLOor-msjRyOAHaHa&pid=Api&P=0&h=220"
      />
    </AvatarGroup>
  );
}
