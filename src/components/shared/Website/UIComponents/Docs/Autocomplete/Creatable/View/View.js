import React, { useState } from 'react';
import { Autocomplete, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack, Box } from '@basetoolkit/ui';

const initialOptions = [
  { name: 'Introduction to Algorithms', author: 'Thomas H. Cormen' },
  { name: 'Design Patterns', author: 'Erich Gamma' },
  { name: 'Clean Code', author: 'Robert C. Martin' },
  { name: 'You Don\'t Know JS', author: 'Kyle Simpson' },
];

export default function CustomBookSelector() {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState({ name: '', author: '' });
  const [options, setOptions] = useState(initialOptions);

  const handleDialogClose = () => {
    setDialogValue({ name: '', author: '' });
    setOpen(false);
  };

  const handleDialogSubmit = (event) => {
    event.preventDefault();
    setOptions([...options, dialogValue]);
    setValue(dialogValue);
    handleDialogClose();
  };

  return (
    <Stack spacing={2}>
      <Autocomplete
        value={value}
        onChange={( newValue) => {
          if (typeof newValue === 'string') {
            setTimeout(() => {
              setDialogValue({ name: newValue, author: '' });
              setOpen(true);
            });
          } else if (newValue && newValue.inputValue) {
            setDialogValue({ name: newValue.inputValue, author: '' });
            setOpen(true);
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = options.filter((option) => 
            option.name && params.inputValue && option.name.toLowerCase().includes(params.inputValue.toLowerCase())
          );

          if (params.inputValue && params.inputValue !== '') {
            filtered.push({ inputValue: params.inputValue, name: `Add "${params.inputValue}"`, author: '' });
          }

          return filtered;
        }}
        options={options}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option,{onSelect}) => (
          <Box component="li" {...props} onClick={onSelect}>
            {option.name} {option.author && `— ${option.author}`}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Select Book" placeholder="Add or choose a book" />}
      />

      <Dialog open={open} onClose={handleDialogClose}>
        <form onSubmit={handleDialogSubmit}>
          <DialogTitle>Add a New Book</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Book Title"
              value={dialogValue.name}
              onChange={(e) => setDialogValue({ ...dialogValue, name: e.target.value })}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Author"
              value={dialogValue.author}
              onChange={(e) => setDialogValue({ ...dialogValue, author: e.target.value })}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Stack>
  );
}
