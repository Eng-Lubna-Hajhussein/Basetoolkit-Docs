export const source = `
import * as React from "react";
import { Stack, Paper, cssInjection as styled } from "@basetoolkit/ui";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function SquareCorners() {
  return (
    <Stack direction="row" spacing={2} bgcolor="divider" height={300} width={500} alignItems="center" justifyContent="center">
      <DemoPaper square={false}>rounded corners</DemoPaper>
      <DemoPaper square>square corners</DemoPaper>
    </Stack>
  );
}
`;
