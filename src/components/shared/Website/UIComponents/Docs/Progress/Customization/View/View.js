import * as React from "react";
import {
  linearProgressClasses,
} from "@basetoolkit/ui/classes";
import {
  cssInjection as styled,
  Stack,
  LinearProgress,
} from "@basetoolkit/ui";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "10px !important",
  borderRadius: 5,
  backgroundColor: theme.palette.grey[200],
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[800],
  }),
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

export default function CustomizedProgressBars() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
 
      <BorderLinearProgress variant="determinate" value={50} />
    </Stack>
  );
}
