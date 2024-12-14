import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  sectionsUseCSSClass,
  contentUseCSSClass,
} from "./../../../constants/useCSSClass";

function RouteUsage() {
  return (
    <DocPage
      content={contentUseCSSClass}
      sections={sectionsUseCSSClass}
      title="useCssClass"
      description="The useCSSClass hook generates unique, scoped CSS classes in React, supporting dynamic and theme-based styles. It checks cached styles to avoid redundant CSS, reusing or replacing classes only when needed, ideal for complex UIs."
    />
  );
}

export default RouteUsage;
