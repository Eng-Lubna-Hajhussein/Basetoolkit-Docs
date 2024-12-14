import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { sliderSections, sliderContent } from "./../../constants/Slider";

function RouteSlider() {
  return (
    <DocPage
      content={sliderContent}
      sections={sliderSections}
      title="Slider"
      description="Sliders enable users to choose a specific value or range from a set spectrum."
    />
  );
}

export default RouteSlider;
