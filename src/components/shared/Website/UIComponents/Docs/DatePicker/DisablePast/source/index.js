export const source = `
import { DatePicker, Box } from "@basetoolkit/ui";

export default function DisablePastDatesExample() {
  return (
    <Box display="flex" justifyContent="center">
      <DatePicker label="Pick a Date" disablePast={true} />
    </Box>
  );
}
`;
