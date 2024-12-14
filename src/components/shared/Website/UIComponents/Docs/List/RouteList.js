import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  listSections,
  listContent,
} from "./../../constants/List";

function RouteList() {
  return (
    <DocPage
      content={listContent}
      sections={listSections}
      title="List"
      description="Lists display a vertical sequence of text or images, organizing content for easy viewing."
    />
  );
}

export default RouteList;
