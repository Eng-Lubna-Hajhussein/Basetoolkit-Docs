export const source = `
import * as React from "react";
import { Box, cssInjection as styled, Paper, Masonry } from "@basetoolkit/ui";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

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

export default function ResponsiveColumns() {
  return (
    <Box sx={{ width: 500, minHeight: 253 }}>
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`;
