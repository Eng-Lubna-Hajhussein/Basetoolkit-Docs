import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  useTheme,
  useMediaQueryMatch,
} from "@basetoolkit/ui";

const ResponsiveChecker = () => {
  const theme = useTheme();

  // Use basetoolkit theme breakpoints to define media queries
  const isMobile = useMediaQueryMatch(theme.breakpoints.down("sm"));
  const isTablet = useMediaQueryMatch(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQueryMatch(theme.breakpoints.up("md"));

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
            backgroundColor: isTablet
              ? "#f8d7da"
              : isMobile
              ? "#ffeeba"
              : isDesktop
              ? "#d4edda"
              : "#f0f0f0",
            borderRadius: 2,
            height: "100px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: isTablet
                ? "#721c24"
                : isMobile
                ? "#856404"
                : isDesktop
                ? "#155724"
                : "#000",
            }}
          >
            {isTablet
              ? "Tablet View"
              : isMobile
              ? "Mobile View"
              : isDesktop
              ? "Desktop View"
              : "Unknown View"}
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
              `Current view: ${
                isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"
              }`
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
