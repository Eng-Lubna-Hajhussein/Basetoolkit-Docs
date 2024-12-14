export const source = `
import { DatePicker, Box } from "@basetoolkit/ui";

export default function MinDateExample() {
  return (
    <Box display="flex" justifyContent="center">
      <DatePicker
        label="Pick a Date"
        minDate="2023-09-01"
      />
    </Box>
  );
}
`