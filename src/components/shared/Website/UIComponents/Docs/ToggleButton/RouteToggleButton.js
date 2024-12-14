import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  toggleButtonSections,
  toggleButtonContent,
} from "./../../constants/ToggleButton";

function RouteToggleButton() {
  return (
    <DocPage
      content={toggleButtonContent}
      sections={toggleButtonSections}
      title="Toggle Button"
      description="Toggle buttons allow users to switch between related options or select multiple options within a group."
    />
  );
}

export default RouteToggleButton;
