import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  globalStatesSections,
  globalStatesContent,
} from "./../../../constants/FormApi/GlobalStates";

function RouteRegisterFields() {
  return (
    <DocPage
      content={globalStatesContent}
      sections={globalStatesSections}
      title="Global States"
      description="Integrates seamlessly with global states, such as React Context or Redux, enabling easy state management across forms."
    />
  );
}

export default RouteRegisterFields;
