import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  scrollTriggerSections,
  scrollTriggerContent,
} from "./../../../constants/scrollTrigger/usage";

function RouteUsage() {
  return (
    <DocPage
      content={scrollTriggerContent}
      sections={scrollTriggerSections}
      title="useScrollTrigger"
      description={`The useScrollTrigger hook is a powerful utility that tracks the vertical scroll position of a target (usually the window or an HTMLElement) and triggers a boolean state when a specified scroll threshold is reached. It offers fine control with a disableHysteresis option, allowing immediate triggering of the state once the threshold is crossed. This hook is ideal for creating dynamic UI effects like showing or hiding elements based on scroll behavior.`}
    />
  );
}

export default RouteUsage;
