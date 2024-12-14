import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { linkSections, linkContent } from "./../../constants/Link";

function RouteLink() {
  return (
    <DocPage
      content={linkContent}
      sections={linkSections}
      title="Link"
      description="Links enable you to style anchor elements using your theme's colors and typography settings."
    />
  );
}

export default RouteLink;
