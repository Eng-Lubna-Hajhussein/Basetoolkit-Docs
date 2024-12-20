export const source = `
import * as React from "react";
import {
  Box,
  Gauge,
} from "@basetoolkit/ui";

export default function CustomText() {
  return (
    <Box display="flex" justifyContent="center">
      <Gauge
        width={200}
        height={200}
        value={70}
        text={({ value, valueMax }) => \`\${(value / valueMax) * 100}%\`}
      />
    </Box>
  );
}
`;
