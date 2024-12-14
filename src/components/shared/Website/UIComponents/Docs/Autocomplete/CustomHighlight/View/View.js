import React, { useState } from "react";
import { Autocomplete, TextField, Box, highlightMatch } from "@basetoolkit/ui";

const bookOptions = [
  "Pride and Prejudice",
  "Moby Dick",
  "War and Peace",
  "The Odyssey",
];

export default function CustomHighlight() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      options={bookOptions}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => <TextField {...params} label="Choose a Book" />}
      renderOption={(props, option, { onSelect }) => {
        const matches = [
          {
            offset: option.toLowerCase().indexOf(inputValue.toLowerCase()),
            length: inputValue.length,
            input: inputValue,
          },
        ];
        const parts = highlightMatch(option, matches);

        return (
          <li {...props} onClick={onSelect}>
            <Box component="span">
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
            </Box>
          </li>
        );
      }}
    />
  );
}
