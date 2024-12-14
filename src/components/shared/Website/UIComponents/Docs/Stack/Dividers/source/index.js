export const source = `
import * as React from "react";
import {Divider, Paper, Stack, cssInjection as styled } from "@basetoolkit/ui";

const Item = styled((props) => <Paper bgcolor="divider" p={2} {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027 !important",
    }),
  })
);

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
`;
