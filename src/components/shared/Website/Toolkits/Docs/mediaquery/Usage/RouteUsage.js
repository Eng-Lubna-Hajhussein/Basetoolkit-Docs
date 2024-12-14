import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  mediaquerySections,
  mediaqueryContent,
} from "./../../../constants/mediaQuery/usage";

function RouteUsage() {
  return (
    <DocPage
      content={mediaqueryContent}
      sections={mediaquerySections}
      title="Media Query"
      description={`The useMediaQuery and useMediaQueryMatch hooks enable dynamic responsiveness by detecting screen size breakpoints and evaluating custom media queries. They simplify creating adaptive interfaces by returning either the current breakpoint (e.g., xs, sm, md, lg, xl) or a true/false match for specified queries.`}
    />
  );
}

export default RouteUsage;
