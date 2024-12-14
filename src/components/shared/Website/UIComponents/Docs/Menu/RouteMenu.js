import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { menuSections, menuContent } from "./../../constants/Menu";

function RouteMenu() {
  return (
    <DocPage
      content={menuContent}
      sections={menuSections}
      title="Menu"
      description="Menus provide a temporary surface displaying a list of options for users to choose from."
    />
  );
}

export default RouteMenu;
