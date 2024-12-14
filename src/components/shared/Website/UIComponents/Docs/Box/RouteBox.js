import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  boxSections,
  boxContent,
} from "./../../constants/Box";

function RouteBox() {
  return (
    <DocPage
      content={boxContent}
      sections={boxSections}
      title="Box"
      description="The Box component provides a flexible container for organizing and aligning content within layouts."
    />
  );
}

export default RouteBox;
