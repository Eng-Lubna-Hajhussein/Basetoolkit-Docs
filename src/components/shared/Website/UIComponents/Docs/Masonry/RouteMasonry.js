import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  masonrySections,
  masonryContent,
} from "./../../constants/Masonry";

function RouteMasonry() {
  return (
    <DocPage
      content={masonryContent}
      sections={masonrySections}
      title="Masonry"
      description="Masonry arranges items with different heights into a uniform-width layout, allowing for customizable spacing between blocks."
    />
  );
}

export default RouteMasonry;
