import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  tableSections,
  tableContent,
} from "./../../constants/Table";

function RouteTable() {
  return (
    <DocPage
      content={tableContent}
      sections={tableSections}
      title="Table"
      description="Tables organize and showcase data collections in customizable layouts."
    />
  );
}

export default RouteTable;
