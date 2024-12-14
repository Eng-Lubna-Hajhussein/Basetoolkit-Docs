import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  cssInjectionSections,
  cssInjectionContent,
} from "./../../../constants/cssInjection";

function RouteUsage() {
  return (
    <DocPage
      content={cssInjectionContent}
      sections={cssInjectionSections}
      title="cssInjection"
      description="This cssInjection HOC creates styled components with unique CSS classes, With a use of props and theme settings. It enables dynamic and conditional styling, variant matching, and RTL compatibility using directives like @noflip. With efficient caching, it minimizes redundant styles, supporting responsive, reusable styling tailored to component states and themes."
    />
  );
}

export default RouteUsage;
