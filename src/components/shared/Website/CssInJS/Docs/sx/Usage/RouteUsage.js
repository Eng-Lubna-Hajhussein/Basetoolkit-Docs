import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  sxSections,
  sxContent,
} from "./../../../constants/sx";

function RouteUsage() {
  return (
    <DocPage
      content={sxContent}
      sections={sxSections}
      title="sx"
      description="The sx prop provides a flexible, responsive styling solution with a unique approach to handling breakpoints. Breakpoints are defined directly within the style object using keys like xs, sm, lg, and xl, allowing precise control over styles at each screen size."
    />
  );
}

export default RouteUsage;
