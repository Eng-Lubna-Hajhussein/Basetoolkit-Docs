import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  floatingActionButtonSections,
  floatingActionButtonContent,
} from "./../../constants/FloatingActionButton";

function RouteFloatingActionButton() {
  return (
    <DocPage
      content={floatingActionButtonContent}
      sections={floatingActionButtonSections}
      title="Floating Action Button"
      description="A Floating Action Button (FAB) represents the main action or most frequent task on a screen."
    />
  );
}

export default RouteFloatingActionButton;
