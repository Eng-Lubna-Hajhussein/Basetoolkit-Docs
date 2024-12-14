import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { buttonContent, buttonSections } from "./../../constants/Button";

function RouteButton() {
  return (
    <DocPage
      content={buttonContent}
      sections={buttonSections}
      title="Button"
      description="Enables users to perform actions or make selections with just one click"
    />
  );
}

export default RouteButton;
