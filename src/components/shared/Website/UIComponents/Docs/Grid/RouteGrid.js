import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  gridSections,
  gridContent,
} from "./../../constants/Grid";

function RouteGrid() {
  return (
    <DocPage
      content={gridContent}
      sections={gridSections}
      title="Grid"
      description="The responsive basetoolkit Grid layout adjusts to screen size and orientation, maintaining layout consistency across various devices."
    />
  );
}

export default RouteGrid;
