export const source = `
import * as React from "react";
import { Box, Link } from "@basetoolkit/ui";

const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#" underline="none">
        {'underline="none"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="always">
        {'underline="always"'}
      </Link>
    </Box>
  );
}
`;