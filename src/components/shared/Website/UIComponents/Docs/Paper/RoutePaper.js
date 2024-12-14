import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  paperSections,
  paperContent,
} from "./../../constants/Paper";

function RoutePaper() {
  return (
    <DocPage
      content={paperContent}
      sections={paperSections}
      title="Paper"
      description="Paper serves as a foundational container, presenting content on a raised surface for emphasis."
    />
  );
}

export default RoutePaper;
