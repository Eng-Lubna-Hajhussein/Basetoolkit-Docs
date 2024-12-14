import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  colorSections,
  colorContent,
} from "./../../../constants/coloris/Color";

function RouteColor() {
  return (
    <DocPage
      content={colorContent}
      sections={colorSections}
      title="Color"
      description="These Coloris methods provide comprehensive color manipulation and format handling tools. With functions to adjust transparency (alpha), darkness (darken), brightness (brightness), and saturation (saturate, desaturate), along with options to mix (mix), blend (blend), or average colors (average), Coloris enables fine-tuned color adjustments. Additionally, methods like hex, css, and num streamline color output in various formats, while temperature, luminance, distance, and random facilitate deeper color analysis and generation for dynamic and consistent styling."
    />
  );
}

export default RouteColor;
