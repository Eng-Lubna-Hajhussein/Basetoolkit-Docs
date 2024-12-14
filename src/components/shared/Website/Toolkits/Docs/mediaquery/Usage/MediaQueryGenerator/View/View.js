import React, { useState } from "react";
import { Box, TextField, Typography, Paper, Container,useTheme } from "@basetoolkit/ui";

const MediaQueryGenerator = () => {
  const theme = useTheme();
  const [breakpoint, setBreakpoint] = useState("md"); // Default is 'md'
  const [start, setStart] = useState("sm");
  const [end, setEnd] = useState("lg");
  const [mediaQuery, setMediaQuery] = useState("");

  const handleUp = () => {
    const query = theme.breakpoints.up(breakpoint);
    setMediaQuery(query);
  };

  const handleDown = () => {
    const query = theme.breakpoints.down(breakpoint);
    setMediaQuery(query);
  };

  const handleBetween = () => {
    const query = theme.breakpoints.between(start, end);
    setMediaQuery(query);
  };

  const handleOnly = () => {
    const query = theme.breakpoints.only(breakpoint);
    setMediaQuery(query);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Media Query Generator
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Generate Media Query:
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Enter Breakpoint (e.g., xs, sm, md, lg, xl)
            </Typography>
            <TextField
              value={breakpoint}
              onChange={(e) => setBreakpoint(e.target.value)}
              placeholder="Breakpoint (e.g., md)"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Typography variant="subtitle1" gutterBottom>
              Enter Start and End for "Between" (e.g., sm and lg)
            </Typography>
            <TextField
              value={start}
              onChange={(e) => setStart(e.target.value)}
              placeholder="Start (e.g., sm)"
              fullWidth
              sx={{ mb: 1 }}
            />
            <TextField
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              placeholder="End (e.g., lg)"
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ cursor: "pointer" }} onClick={handleUp}>
              <Typography variant="button">Generate "Up"</Typography>
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={handleDown}>
              <Typography variant="button">Generate "Down"</Typography>
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={handleBetween}>
              <Typography variant="button">Generate "Between"</Typography>
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={handleOnly}>
              <Typography variant="button">Generate "Only"</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 4, p: 2, backgroundColor: "#f0f0f0", borderRadius: 2 }}>
          <Typography variant="h6">Generated Media Query:</Typography>
          <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
            {mediaQuery}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default MediaQueryGenerator;
