import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  registerFieldsSections,
  registerFieldsContent,
} from "./../../../constants/FormApi/RegisterFields";

function RouteRegisterFields() {
  return (
    <DocPage
      content={registerFieldsContent}
      sections={registerFieldsSections}
      title="Register Fields"
      description="Each field is required to have a name as a key for the registration process."
    />
  );
}

export default RouteRegisterFields;
