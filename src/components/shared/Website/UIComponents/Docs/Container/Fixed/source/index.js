export const source = `
import * as React from "react";
import { Box, Container } from "@basetoolkit/ui";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
}
`;
