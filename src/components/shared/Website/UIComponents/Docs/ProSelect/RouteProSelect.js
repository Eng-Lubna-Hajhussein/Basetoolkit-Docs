import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  proSelectSections,
  proSelectContent,
} from "./../../constants/ProSelect";

function RouteProSelect() {
  return (
    <DocPage
      content={proSelectContent}
      sections={proSelectSections}
      title="ProSelect"
      description="Designed for advanced selection capabilities and enhanced user interaction."
    />
  );
}

export default RouteProSelect;