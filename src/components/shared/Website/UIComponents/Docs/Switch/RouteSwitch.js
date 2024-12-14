import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  switchSections,
  switchContent,
} from "./../../constants/Switch";

function RouteSwitch() {
  return (
    <DocPage
      content={switchContent}
      sections={switchSections}
      title="Switch"
      description="Switches allow users to enable or disable a particular setting by toggling between two states."
    />
  );
}

export default RouteSwitch;