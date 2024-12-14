import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  formIntegrationSections,
  formIntegrationContent,
} from "./../../../constants/FormApi/FormIntegration";

function RouteRegisterFields() {
  return (
    <DocPage
      content={formIntegrationContent}
      sections={formIntegrationSections}
      title="Form Integration"
      description="Easily integrate an existing form by registering the component’s ref and applying necessary input props."
    />
  );
}

export default RouteRegisterFields;
