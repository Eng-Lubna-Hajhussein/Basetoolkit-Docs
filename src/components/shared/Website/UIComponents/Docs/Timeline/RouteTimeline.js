import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  timelineSections,
  timelineContent,
} from "./../../constants/Timeline";

function RouteTimeline() {
  return (
    <DocPage
      content={timelineContent}
      sections={timelineSections}
      title="Timeline"
      description="Timeline presents events sequentially, arranged in the order they occurred."
    />
  );
}

export default RouteTimeline;
