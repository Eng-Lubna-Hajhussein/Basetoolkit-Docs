import TemplatePage from "../../../../../sharedUI/TemplatePage/TemplatePage";
import demo from "./../../../../../../assets/demo/admin_dashboard.mp4";

function RouteAdminDashboard() {
  return (
    <TemplatePage
      srcCode={"https://github.com/Eng-Lubna-Hajhussein/admin-dashboard"}
      livePreview={"https://eng-lubna-hajhussein.github.io/admin-dashboard/"}
      demo={demo}
      title="Admin Dashboard"
      description={
        "A comprehensive admin dashboard template with a wide range of components, perfect for managing data and analytics for web applications."
      }
    />
  );
}

export default RouteAdminDashboard;
