import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  dividerSections,
  dividerContent,
} from "./../../constants/Divider";

function RouteDivider() {
  return (
    <DocPage
      content={dividerContent}
      sections={dividerSections}
      title="Divider"
      description="The Divider component adds a subtle line to help organize content, enhancing the visual structure of grouped elements."
    />
  );
}

export default RouteDivider;
