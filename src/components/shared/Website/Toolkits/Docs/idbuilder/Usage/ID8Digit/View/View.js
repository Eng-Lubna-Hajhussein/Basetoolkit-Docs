import React, { useState } from "react";
import { Button, Box, Typography, Paper, Container } from "@basetoolkit/ui";
import { generate8DigitId } from "@basetoolkit/ui/idbuilder";

const UniqueNumericIdComponent = () => {
  const [numericId, setNumericId] = useState(generate8DigitId());

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Unique 8-Digit ID
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#f5f5f5",
            minHeight: "100px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976d2" }}>
            {numericId}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setNumericId(generate8DigitId())}
          sx={{ mt: 2 }}
        >
          Generate New ID
        </Button>
      </Paper>
    </Container>
  );
};

export default UniqueNumericIdComponent;
