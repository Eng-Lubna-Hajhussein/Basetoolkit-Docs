import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { progressSections, progressContent } from "./../../constants/Progress";

function RouteProgress() {
  return (
    <DocPage
      content={progressContent}
      sections={progressSections}
      title="Progress"
      description="Indicators, often called spinners, visually communicate an indefinite wait or track the completion level of a process."
    />
  );
}

export default RouteProgress;
