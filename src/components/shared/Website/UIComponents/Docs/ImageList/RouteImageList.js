import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  imageListSections,
  imageListContent,
} from "./../../constants/ImageList";

function RouteImageList() {
  return (
    <DocPage
      content={imageListContent}
      sections={imageListSections}
      title="Image List"
      description="The Image List component presents a set of images in a structured grid layout, making it easy to browse and view multiple items at once."
    />
  );
}

export default RouteImageList;
