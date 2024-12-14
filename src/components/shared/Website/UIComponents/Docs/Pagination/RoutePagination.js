import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  paginationSections,
  paginationContent,
} from "./../../constants/Pagination";

function RoutePagination() {
  return (
    <DocPage
      content={paginationContent}
      sections={paginationSections}
      title="Pagination"
      description="The Pagination component allows users to navigate to a particular page within a set of multiple pages."
    />
  );
}

export default RoutePagination;
