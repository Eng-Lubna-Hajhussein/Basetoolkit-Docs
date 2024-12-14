export const source = `
import { ProSelect } from "@basetoolkit/ui";
import React, { useState } from "react";

export default function SingleOption() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Apple", "Banana", "Grapes", "Orange"];

  return (
    <ProSelect
      options={options}
      value={selectedOption}
      onChange={(newOption) => setSelectedOption(newOption)}
      label="Fruit Select"
    />
  );
}
`