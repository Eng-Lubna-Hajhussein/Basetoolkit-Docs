import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  selectSections,
  selectContent,
} from "./../../constants/Select";

function RouteSelect() {
  return (
    <DocPage
      content={selectContent}
      sections={selectSections}
      title="Select"
      description="Select component allow users to choose from a predefined set of options, simplifying the process of data input."
    />
  );
}

export default RouteSelect;