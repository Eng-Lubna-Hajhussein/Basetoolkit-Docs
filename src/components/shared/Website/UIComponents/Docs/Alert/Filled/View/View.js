import * as React from "react";
import { Alert, Stack } from "@basetoolkit/ui";

export default function FilledAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} alignItems="center">
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
      <Alert variant="filled" severity="info">
        This is a filled info Alert.
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a filled warning Alert.
      </Alert>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </Stack>
  );
}
