import React from "react";
import { Stack, Autocomplete, TextField, Box, Checkbox } from "@basetoolkit/ui";

const countryOptions = [
  { name: "Canada", code: "CA", continent: "North America" },
  { name: "United States", code: "US", continent: "North America" },
  { name: "Mexico", code: "MX", continent: "North America" },
  { name: "Brazil", code: "BR", continent: "South America" },
  { name: "Argentina", code: "AR", continent: "South America" },
  { name: "Germany", code: "DE", continent: "Europe" },
  { name: "France", code: "FR", continent: "Europe" },
  { name: "Japan", code: "JP", continent: "Asia" },
  { name: "China", code: "CN", continent: "Asia" },
  { name: "Australia", code: "AU", continent: "Oceania" },
  { name: "New Zealand", code: "NZ", continent: "Oceania" },
];

const groupedOptions = countryOptions.reduce((acc, country) => {
  const continent = country.continent;
  acc[continent] = acc[continent] ? [...acc[continent], country] : [country];
  return acc;
}, {});

const flattenedOptions = Object.entries(groupedOptions).flatMap(
  ([continent, countries]) => [{ isCategory: true, continent }, ...countries]
);

export default function CountryByContinent() {
  return (
    <Stack spacing={2} sx={{ width: 320 }}>
      <Autocomplete
        options={flattenedOptions}
        multiple
        disableCloseOnSelect
        defaultValue={[flattenedOptions[3], flattenedOptions[1]]}
        getOptionLabel={(option) =>
          option.isCategory
            ? option.continent
            : `${option.name} (${option.code})`
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Country by Continent"
            placeholder="Select a country"
          />
        )}
        renderOption={(props, option, { onSelect, selected }) => {
          const { key, ...optionProps } = props;
          return option.isCategory ? (
            <Box key={key} typography="button">
              {option.continent}
            </Box>
          ) : (
            <Box
              display="flex"
              gap={1}
              alignItems="center"
              key={key}
              {...optionProps}
            >
              <Checkbox size="small" onChange={onSelect} checked={selected} />
              <img
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
                style={{
                  width: 20,
                  height: 15,
                  borderRadius: "2px",
                }}
              />
              <span style={{ fontSize: "0.95rem", color: "#333" }}>
                {option.name} ({option.code})
              </span>
            </Box>
          );
        }}
      />
    </Stack>
  );
}
