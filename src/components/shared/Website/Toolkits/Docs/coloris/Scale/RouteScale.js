import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  scaleSections,
  scaleContent,
} from "./../../../constants/coloris/Scale";

function RouteColor() {
  return (
    <DocPage
      content={scaleContent}
      sections={scaleSections}
      title="scale(colors: string[]): function"
      description="The scale method generates a color scale function that interpolates between an array of specified colors. This function takes a value between 0 and 1 as input, where 0 returns the first color and 1 returns the last color. Intermediate values return colors proportionally interpolated along the scale. You can also retrieve a specific number of evenly spaced colors from the scale by calling the colors(numColors) method."
    />
  );
}

export default RouteColor;
