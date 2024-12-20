export const source = `
import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,Switch,
  useCSSClass
} from "@basetoolkit/ui";

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState({value:"sm",label:"sm"});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (newValue) => {
    setMaxWidth(
      newValue
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const {select} = useCSSClass({select:{zIndex:1000000000000+" !important"}})
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth.value}
        open={open}
        onClose={handleClose}
        style={{ overflow: "visible !important" }}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent  style={{ overflow: "visible",overflowY:"visible" }}>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
                classes={{menu:select}}
                
                
                fullWidth
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`;
