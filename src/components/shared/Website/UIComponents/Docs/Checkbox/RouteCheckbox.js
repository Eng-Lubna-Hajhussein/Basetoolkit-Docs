import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  checkboxSections,
  checkboxContent,
} from "./../../constants/Checkbox";

function RouteButtonGroup() {
  return (
    <DocPage
      content={checkboxContent}
      sections={checkboxSections}
      title="Checkbox"
      description="Enables selection of one or multiple items from a list"
    />
  );
}

export default RouteButtonGroup;
