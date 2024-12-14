import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  getStartedSections,
  getStartedContent,
} from "./../../../constants/FormApi/GetStarted";

function RouteGetStarted() {
  return (
    <DocPage
      content={getStartedContent}
      sections={getStartedSections}
      title="Get Started"
      description="Get started with basetoolkit useForm hook."
    />
  );
}

export default RouteGetStarted;
