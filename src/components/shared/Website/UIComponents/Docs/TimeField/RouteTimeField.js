import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  timeFieldSections,
  timeFieldContent,
} from "./../../constants/TimeField";

function RouteTimeField() {
  return (
    <DocPage
      content={timeFieldContent}
      sections={timeFieldSections}
      title="Time Field"
      description="The Time Field enables users to enter and adjust time values directly using the keyboard."
    />
  );
}

export default RouteTimeField;
