import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  accordionSections,
  accordionContent,
} from "./../../constants/Accordion";

function RouteAccordion() {
  return (
    <DocPage
      content={accordionContent}
      sections={accordionSections}
      title="Accordion"
      description="Accordion components allow users to expand or collapse sections of related content within a page."
    />
  );
}

export default RouteAccordion;
