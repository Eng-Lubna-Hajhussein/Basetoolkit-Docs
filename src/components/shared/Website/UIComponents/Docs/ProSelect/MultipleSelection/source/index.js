export const source = `
import { ProSelect } from "@basetoolkit/ui";
import React, { useState } from "react";

export default function MultiSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ["Football", "Basketball", "Tennis", "Cricket"];

  return (
    <ProSelect
      multiple
      options={options}
      value={selectedOptions}
      onChange={(newOptions) => setSelectedOptions(newOptions)}
      label="Sports"
      limitTags={2} 
      ChipProps={{ variant: "outlined" }}
      
    />
  );
}
`;
