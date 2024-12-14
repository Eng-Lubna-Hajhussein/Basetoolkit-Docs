import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  mainSections,
  mainContent,
} from "./../../../constants/coloris/Main";

function RouteMain() {
  return (
    <DocPage
      content={mainContent}
      sections={mainSections}
      title="Main"
      description="These core methods in the Coloris class provide versatile color transformations and conversions across multiple color spaces. From verifying color validity with valid, to manipulating and converting HSL, LAB, LCH, HCL, Oklab, Oklch, CMYK, and normalized GL formats, these methods support seamless color manipulation and standardized output, allowing for rich color adjustments and accurate representations across applications."
    />
  );
}

export default RouteMain;
