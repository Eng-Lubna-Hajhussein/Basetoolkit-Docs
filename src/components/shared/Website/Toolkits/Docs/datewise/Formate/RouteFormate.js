import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  formateSections,
  formateContent,
} from "./../../../constants/datewise/Formate";

function RouteFormate() {
  return (
    <DocPage
      content={formateContent}
      sections={formateSections}
      title="Format"
      description={`The format method in the Datewise class converts a date object into a custom string representation based on the specified format. It supports a wide range of placeholders, such as YYYY for the full year, MM for the month, DD for the day, and more advanced formats like Do for ordinal dates (e.g., "1st," "2nd"), and LT for local time formats. Additionally, format provides shortcuts (L, LL, LLL, etc.) for common date formats. If no format is provided, it defaults to ISO string with timezone offset. This versatility makes format highly customizable for different date outputs in applications.`}
    />
  );
}

export default RouteFormate;
