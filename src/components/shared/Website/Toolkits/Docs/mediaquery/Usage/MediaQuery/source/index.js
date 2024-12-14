export const source = `
import React from "react";
import { Box, Typography, Paper, Container,useMediaQuery } from "@basetoolkit/ui";

const BreakpointDisplay = () => {
  const mediaQueryType = useMediaQuery();

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Current Breakpoint
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            backgroundColor: "#f0f0f0",
            borderRadius: 2,
            height: "100px",
          }}
        >
          <Typography variant="h6" sx={{ color: "#1976d2" }}>
            {mediaQueryType ? mediaQueryType.toUpperCase() : "No matching breakpoint"}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Resize the window to see the breakpoint change dynamically!
        </Typography>
      </Paper>
    </Container>
  );
};

export default BreakpointDisplay;
`;
