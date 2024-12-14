import { DatePicker, Box } from "@basetoolkit/ui";

export default function MinMaxDateRangeExample() {
  return (
    <Box display="flex" justifyContent="center">
      <DatePicker
        label="Pick a Date"
        minDate="2024-11-01"
        maxDate="2024-11-15"
      />
    </Box>
  );
}
