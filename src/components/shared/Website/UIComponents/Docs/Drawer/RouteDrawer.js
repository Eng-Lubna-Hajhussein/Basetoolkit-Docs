import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { drawerSections, drawerContent } from "./../../constants/Drawer";

function RouteDrawer() {
  return (
    <DocPage
      content={drawerContent}
      sections={drawerSections}
      title="Drawer"
      description="Drawers, also known as sidebars, offer convenient access to different sections or features of an app, like changing accounts."
    />
  );
}

export default RouteDrawer;
