import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  alertSections,
  alertContent,
} from "./../../constants/Alert";

function RouteAlert() {
  return (
    <DocPage
      content={alertContent}
      sections={alertSections}
      title="Alert"
      description="Alerts provide short, informative messages to users without disrupting their interaction within the app."
    />
  );
}

export default RouteAlert;
