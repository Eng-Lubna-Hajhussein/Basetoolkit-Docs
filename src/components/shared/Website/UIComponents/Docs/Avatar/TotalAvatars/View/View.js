import * as React from "react";
import { Avatar, AvatarGroup } from "@basetoolkit/ui";

export default function TotalAvatars() {
  return (
    <AvatarGroup total={24}>
      <Avatar
        alt="Remy Sharp"
        src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Travis Howard"
        src="https://tse4.mm.bing.net/th?id=OIP.IrJSe207eQF64kILfjypIwHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Agnes Walker"
        src="https://tse3.mm.bing.net/th?id=OIP.XjvTFFI032NhXwhUTp7QUAHaHa&pid=Api&P=0&h=220"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://tse3.mm.bing.net/th?id=OIP.HsKmJ4YBxPLOor-msjRyOAHaHa&pid=Api&P=0&h=220"
      />
    </AvatarGroup>
  );
}
