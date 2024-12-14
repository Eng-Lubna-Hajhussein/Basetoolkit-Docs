import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  datePickerSections,
  datePickerContent,
} from "./../../constants/DatePicker";

function RouteDatePicker() {
  return (
    <DocPage
      content={datePickerContent}
      sections={datePickerSections}
      title="Date Picker"
      description="The Date Picker allows users to choose a specific date from a calendar interface."
    />
  );
}

export default RouteDatePicker;
