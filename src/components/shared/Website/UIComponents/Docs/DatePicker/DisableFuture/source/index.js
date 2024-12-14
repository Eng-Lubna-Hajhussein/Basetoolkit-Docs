export const source = `
import { DatePicker, Box } from "@basetoolkit/ui";

export default function DisableFutureDatesExample() {
  return (
    <Box display="flex" justifyContent="center">
      <DatePicker
        label="Pick a Date"
        disableFuture={true}
      />
    </Box>
  );
}
`