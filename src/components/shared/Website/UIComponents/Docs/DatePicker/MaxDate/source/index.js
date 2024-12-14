export const source = `
import { DatePicker, Box } from "@basetoolkit/ui";

export default function MaxDateExample() {
  return (
    <Box display="flex" justifyContent="center">
      <DatePicker
        label="Pick a Date"
        maxDate="2024-12-31"
      />
    </Box>
  );
}
`