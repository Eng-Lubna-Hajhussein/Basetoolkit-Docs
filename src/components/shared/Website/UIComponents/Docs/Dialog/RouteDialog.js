import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  dialogSections,
  dialogContent,
} from "./../../constants/Dialog";

function RouteDialog() {
  return (
    <DocPage
      content={dialogContent}
      sections={dialogSections}
      title="Dialog"
      description="Dialogs provide important information, often guiding users through decisions or multiple steps in a task."
    />
  );
}

export default RouteDialog;
