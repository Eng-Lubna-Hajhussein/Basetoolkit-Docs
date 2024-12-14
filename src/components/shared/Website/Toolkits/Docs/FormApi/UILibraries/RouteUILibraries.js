import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  uiLibrariesSections,
  uiLibrariesContent,
} from "./../../../constants/FormApi/UILibraries";

function RouteRegisterFields() {
  return (
    <DocPage
      content={uiLibrariesContent}
      sections={uiLibrariesSections}
      title="UI Libraries"
      description="Easily integrate useForm hook with UI Libraries components here is an example using basetoolkit ui components and it can be used with other ui libraries too:"
    />
  );
}

export default RouteRegisterFields;
