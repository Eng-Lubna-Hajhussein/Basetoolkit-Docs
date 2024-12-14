import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  buttonGroupSections,
  buttonGroupContent,
} from "./../../constants/ButtonGroup";

function RouteButtonGroup() {
  return (
    <DocPage
      content={buttonGroupContent}
      sections={buttonGroupSections}
      title="Button Group"
      description="Groups related buttons together for collective actions"
    />
  );
}

export default RouteButtonGroup;
