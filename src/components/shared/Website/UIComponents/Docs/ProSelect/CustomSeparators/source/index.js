export const source = `
import * as React from "react";
import { ProSelect, Checkbox, ListItemText, Chip, Box, Stack } from "@basetoolkit/ui";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function MultiSelectWithCustomSeparators() {
  const [selectedNames, setSelectedNames] = React.useState([ "Oliver Hansen",
    "Van Henry",
    "April Tucker",]);

  const handleChange = (event, newValue) => {
    setSelectedNames(newValue);
  };

  return (
    <Stack spacing={2} width={700}>
      <ProSelect
        multiple
        options={names}
        value={selectedNames}
        onChange={handleChange}
        label="Select Names"
        renderTags={(selected) =>
          selected.map((option, index) => (
            <React.Fragment key={option}>
              {option}
              {index < selected.length - 1 && <span>&nbsp;,&nbsp;</span>}
            </React.Fragment>
          ))}
        fullWidth
      />
       <ProSelect
        multiple
        options={names}
        value={selectedNames}
        onChange={handleChange}
        label="Select Names"
        renderTags={(selected) =>
          selected.map((option, index) => (
            <React.Fragment key={option}>
              {option}
              {index < selected.length - 1 && <span>&nbsp;-&nbsp;</span>}
            </React.Fragment>
          ))}
        fullWidth
      />
       <ProSelect
        multiple
        options={names}
        value={selectedNames}
        onChange={handleChange}
        label="Select Names"
        renderTags={(selected) =>
          selected.map((option, index) => (
            <React.Fragment key={option}>
              {option}
              {index < selected.length - 1 && <span>&nbsp;/&nbsp;</span>}
            </React.Fragment>
          ))}
        fullWidth
      />
    </Stack>
  );
}
`