import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  containerSections,
  containerContent,
} from "./../../constants/Container";

function RouteContainer() {
  return (
    <DocPage
      content={containerContent}
      sections={containerSections}
      title="Container"
      description="The Container component centers content horizontally, serving as a fundamental layout tool for structured alignment."
    />
  );
}

export default RouteContainer;
