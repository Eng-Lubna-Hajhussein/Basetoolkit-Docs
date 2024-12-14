import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  modalSections,
  modalContent,
} from "./../../constants/Modal";

function RouteModal() {
  return (
    <DocPage
      content={modalContent}
      sections={modalSections}
      title="Modal"
      description="
The Modal component displays content in a layer above the main page, pausing interactions with underlying elements until dismissed. It’s often used for confirmations, forms, or notifications."
    />
  );
}

export default RouteModal;
