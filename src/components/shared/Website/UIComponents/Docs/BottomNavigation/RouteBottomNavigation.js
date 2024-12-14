import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  bottomNavigationSections,
  bottomNavigationContent,
} from "./../../constants/BottomNavigation";

function RouteBottomNavigation() {
  return (
    <DocPage
      content={bottomNavigationContent}
      sections={bottomNavigationSections}
      title="Bottom Navigation"
      description="Bottom Navigation provides quick access to key areas within an app, enabling seamless movement between primary destinations."
    />
  );
}

export default RouteBottomNavigation;
