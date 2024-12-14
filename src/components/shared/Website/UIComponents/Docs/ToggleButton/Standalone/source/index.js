export const source = `
import * as React from "react";
import { ToggleButton, SvgIcon } from "@basetoolkit/ui";

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <SvgIcon icon="check" />
    </ToggleButton>
  );
}
`;
