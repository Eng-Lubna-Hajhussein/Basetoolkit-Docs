import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  timePickerSections,
  timePickerContent,
} from "./../../constants/TimePicker";

function RouteTimePicker() {
  return (
    <DocPage
      content={timePickerContent}
      sections={timePickerSections}
      title="Time Picker"
      description="The Time Picker allows users to choose a specific time from an interface."
    />
  );
}

export default RouteTimePicker;
