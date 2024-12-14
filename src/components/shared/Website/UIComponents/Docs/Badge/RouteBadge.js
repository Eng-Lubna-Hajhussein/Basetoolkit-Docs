import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { badgeSections, badgeContent } from "./../../constants/Badge";

function RouteBadge() {
  return (
    <DocPage
      content={badgeContent}
      sections={badgeSections}
      title="Badge"
      description="A Badge displays a small indicator at the top-right of its associated element, typically used to highlight notifications or status."
    />
  );
}

export default RouteBadge;
