export const source = `
import * as React from "react";
import {
  Box,
  Alert,
  IconButton,
  Collapse,
  Button,
  SvgIcon,
} from "@basetoolkit/ui";

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <SvgIcon icon="close" size="small" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Click the close icon to see the Collapse transition in action!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </Box>
  );
}
`;
