export const source = `
import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  useMediaQueryMatch,
} from "@basetoolkit/ui";

const ResponsiveChecker = () => {
  const isMobile = useMediaQueryMatch("(max-width: 600px)");
  const isTablet = useMediaQueryMatch("(min-width: 601px) and (max-width: 960px)");

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Device Checker
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            backgroundColor: isMobile
              ? "#f8d7da"
              : isTablet
              ? "#ffeeba"
              : "#d4edda",
            borderRadius: 2,
            height: "100px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: isMobile ? "#721c24" : isTablet ? "#856404" : "#155724",
            }}
          >
            {isMobile
              ? "Mobile View"
              : isTablet
              ? "Tablet View"
              : "Desktop View"}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Resize the window to see if you're on mobile, tablet, or desktop.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() =>
            alert(
              \`Current view: \${
                isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"
              }\`
            )
          }
        >
          Check View
        </Button>
      </Paper>
    </Container>
  );
};

export default ResponsiveChecker;
`