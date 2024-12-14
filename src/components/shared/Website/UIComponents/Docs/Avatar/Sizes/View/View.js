import * as React from 'react';
import { Avatar,Stack } from '@basetoolkit/ui';

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
        height={24}
        width={24}
      />
      <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220" />
      <Avatar
        alt="Remy Sharp"
        src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
        height={56}
        width={56}
      />
    </Stack>
  );
}
