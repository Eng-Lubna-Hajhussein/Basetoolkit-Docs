import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  stackSections,
  stackContent,
} from "./../../constants/Stack";

function RouteStack() {
  return (
    <DocPage
      content={stackContent}
      sections={stackSections}
      title="Stack"
      description="Stack is a container component designed to arrange elements in a row or column layout."
    />
  );
}

export default RouteStack;
