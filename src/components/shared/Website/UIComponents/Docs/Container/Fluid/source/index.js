export const source = `
import * as React from "react";
import { Box, Container } from "@basetoolkit/ui";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
}
`;
