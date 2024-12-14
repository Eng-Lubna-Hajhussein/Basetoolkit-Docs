import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  colorInputSections,
  colorInputContent,
} from "./../../constants/ColorInput";

function RouteColorInput() {
  return (
    <DocPage
      content={colorInputContent}
      sections={colorInputSections}
      title="Color Input"
      description="The Color Input allows users to select a color either by typing a color code or using a visual color picker."
    />
  );
}

export default RouteColorInput;
