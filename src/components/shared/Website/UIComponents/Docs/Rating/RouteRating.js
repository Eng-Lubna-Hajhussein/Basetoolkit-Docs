import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  ratingSections,
  ratingContent,
} from "./../../constants/Rating";

function RouteRating() {
  return (
    <DocPage
      content={ratingContent}
      sections={ratingSections}
      title="Rating"
      description="Ratings offer a way to gauge user feedback and opinions, and allow individuals to submit their own rating."
    />
  );
}

export default RouteRating;
