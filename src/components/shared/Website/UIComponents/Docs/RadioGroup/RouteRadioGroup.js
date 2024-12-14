import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  radioGroupSections,
  radioGroupContent,
} from "./../../constants/RadioGroup";

function RouteRadioGroup() {
  return (
    <DocPage
      content={radioGroupContent}
      sections={radioGroupSections}
      title="Radio Group"
      description="A Radio Group enables users to choose a single option from multiple available choices."
    />
  );
}

export default RouteRadioGroup;
