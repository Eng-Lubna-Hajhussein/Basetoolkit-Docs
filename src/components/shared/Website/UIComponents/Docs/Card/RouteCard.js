import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  cardSections,
  cardContent,
} from "./../../constants/Card";

function RouteCard() {
  return (
    <DocPage
      content={cardContent}
      sections={cardSections}
      title="Card"
      description="Cards provide a concise way to present information and actions related to a specific topic or item."
    />
  );
}

export default RouteCard;
