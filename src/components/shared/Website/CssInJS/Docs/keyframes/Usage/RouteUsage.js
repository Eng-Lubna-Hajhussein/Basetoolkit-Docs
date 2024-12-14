import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  keyframesSections,
  keyframesContent,
} from "./../../../constants/keyframes";

function RouteUsage() {
  return (
    <DocPage
      content={keyframesContent}
      sections={keyframesSections}
      title="keyframes"
      description="The keyframes function generates unique keyframe animations for CSS-in-JS, transforming provided styles into CSS and caching them efficiently. It supports styles as objects, strings, or template literals with interpolated values, enabling easy, reusable animations that can be applied to components without duplication."
    />
  );
}

export default RouteUsage;
