import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  dateFieldSections,
  dateFieldContent,
} from "./../../constants/DateField";

function RouteDateField() {
  return (
    <DocPage
      content={dateFieldContent}
      sections={dateFieldSections}
      title="Date Field"
      description="The Date Field allows users to input and adjust a date directly using keyboard controls."
    />
  );
}

export default RouteDateField;
