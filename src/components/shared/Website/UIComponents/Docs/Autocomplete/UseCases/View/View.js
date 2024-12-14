import React, { useState } from "react";
import { Autocomplete, TextField, Stack, Avatar, Box, Grid } from "@basetoolkit/ui";

const UseCases = () => {
  const renderOption = (props, option, { onSelect }) => (
    <Box
      {...props}
      sx={{ display: "flex", alignItems: "center", padding: "8px" }}
      onClick={onSelect}
    >
      <Avatar src={option.image} alt={option.name} size="small" sx={{ marginRight: 1 }} />
      {option.name}
    </Box>
  );

  const defaultProps = {
    options: destinationOptions,
    getOptionLabel: (option) => option.name,
    renderOption,
  };
  const flatProps = {
    options: destinationOptions.map((option) => option.name),
  };
  const [value, setValue] = useState(null);

  const autocompleteConfigs = [
    {
      id: 'disable-close-on-select',
      label: 'Disable Close on Select',
      props: { disableCloseOnSelect: true, variant: 'filled',...defaultProps },
    },
    {
      id: 'multiple-selection',
      label: 'Multiple Selection',
      props: { multiple: true, variant: 'outlined',defaultValue:[flatProps.options[0],flatProps.options[1]] ,...defaultProps},
    },
    {
      id: 'flat-options',
      label: 'Flat Options',
      props: { ...flatProps, variant: 'outlined' },
    },
    {
      id: 'controlled-demo',
      label: 'Controlled',
      props: {
        value,
        onChange: (newValue) => setValue(newValue),
        variant: 'filled',
        ...defaultProps
      },
    },
    {
      id: 'auto-complete',
      label: 'Auto Complete',
      props: { autoComplete: true, includeInputInList: true, variant: 'outlined' ,...defaultProps},
    },
    {
      id: 'auto-highlight',
      label: 'Auto Highlight',
      props: { autoHighlight: true, variant: 'filled' ,...defaultProps},
    },
    {
      id: 'open-on-focus',
      label: 'Open on Focus',
      props: { openOnFocus: true, variant: 'outlined' ,...defaultProps},
    },
    {
      id: 'auto-select',
      label: 'Auto Select',
      props: { autoSelect: true, variant: 'filled',...defaultProps },
    },
    {
      id: 'disabled',
      label: 'Disabled',
      
      props: { disabled: true, variant: 'outlined' ,defaultValue:defaultProps.options[1],...defaultProps},
    },
    {
      id: 'read-only',
      label: 'Read Only',
      props: { readOnly: true, defaultValue: flatProps.options[2], variant: 'filled',...defaultProps },
    },
  ];

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        {autocompleteConfigs.map((config, index) => (
          <Grid item xs={12} sm={6} md={6} key={config.id}>
            <Autocomplete
              // {...defaultProps}
              id={config.id}
              {...config.props}
              renderInput={(params) => (
                <TextField {...params} label={config.label} variant={config.props.variant} />
              )}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

// Custom options with images for a more visually appealing list

const destinationOptions = [
  {
    name: "Sunny Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNoJTIwc3VubnklMjBiZWFjaHxlbnwwfHx8fDE2Nzg4MzQ1MDg&ixlib=rb-4.0.3&q=80&w=40",
  },
  {
    name: "Mountain Trail",
    image: "https://images.unsplash.com/photo-1516728778615-2d590ea1852a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE1fHxtb3VudGFpbnxlbnwwfHx8fDE2Nzg4MzQ1MTM&ixlib=rb-4.0.3&q=80&w=40",
  },
  {
    name: "City Lights",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBsaWdodHN8ZW58MHx8fHwxNjc4ODM0NTIy&ixlib=rb-4.0.3&q=80&w=40",
  },
  {
    name: "Forest Retreat",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvcmVzdCUyMHRyZWV8ZW58MHx8fHwxNjc4ODM0NTMw&ixlib=rb-4.0.3&q=80&w=40",
  },
  {
    name: "Lakeside View",
    image: "https://images.unsplash.com/photo-1535916707207-4e6bfa3b5a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxha2VzaWRlfGVufDB8fHx8MTY3ODgzNDUzOA&ixlib=rb-4.0.3&q=80&w=40",
  },
  {
    name: "Desert Dunes",
    image: "https://images.unsplash.com/photo-1602391839745-8d92e7b2d155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc2VydHxlbnwwfHx8fDE2Nzg4MzQ1NDQ&ixlib=rb-4.0.3&q=80&w=40",
  },
];

// Custom render function for displaying images in options
export default UseCases;
