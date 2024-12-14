import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { carouselSections, carouselContent } from "./../../constants/Carousel";

function RouteCarousel() {
  return (
    <DocPage
      content={carouselContent}
      sections={carouselSections}
      title="Carousel"
      description="An Image Carousel allows users to browse through a set of images by swiping or clicking through slides."
    />
  );
}

export default RouteCarousel;
