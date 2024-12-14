export const source = `
import React, { useState } from "react";
import { Button, Box, Typography, Paper, Container } from "@basetoolkit/ui";
import { generate128BitId } from "@basetoolkit/ui/idbuilder";

const UniqueIdComponent = () => {
  const [id, setId] = useState(generate128BitId());

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Unique 128-bit ID
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
            minHeight: "120px",
            overflowWrap: "break-word",
          }}
        >
          <Typography variant="body1" sx={{ color: "#1976d2" }}>
            {id}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setId(generate128BitId())}
          sx={{ mt: 2 }}
        >
          Generate New ID
        </Button>
      </Paper>
    </Container>
  );
};

export default UniqueIdComponent;
`;
