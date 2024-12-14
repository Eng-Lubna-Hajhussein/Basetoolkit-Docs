import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  chipSections,
  chipContent,
} from "./../../constants/Chip";

function RouteChip() {
  return (
    <DocPage
      content={chipContent}
      sections={chipSections}
      title="Chip"
      description="Chips are small, concise elements used to display information, represent choices, or trigger actions."
    />
  );
}

export default RouteChip;
