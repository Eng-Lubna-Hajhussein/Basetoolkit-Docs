import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  skeletonSections,
  skeletonContent,
} from "./../../constants/Skeleton";

function RouteSkeleton() {
  return (
    <DocPage
      content={skeletonContent}
      sections={skeletonSections}
      title="Skeleton"
      description="Provide a visual placeholder for content, easing user wait times until data fully loads."
    />
  );
}

export default RouteSkeleton;
