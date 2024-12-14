import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  transferListSections,
  transferListContent,
} from "./../../constants/TransferList";

function RouteTransferList() {
  return (
    <DocPage
      content={transferListContent}
      sections={transferListSections}
      title="Transfer List"
      description="A Transfer List allows users to shift items between two lists, providing an efficient way to move one or more items at a time."
    />
  );
}

export default RouteTransferList;
