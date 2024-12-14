import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  controlledInputsSections,
  controlledInputsContent,
} from "./../../../constants/FormApi/ControlledInputs";

function RouteRegisterFields() {
  return (
    <DocPage
      content={controlledInputsContent}
      sections={controlledInputsSections}
      title="Controlled Inputs"
      description="This FormApi supports both controlled and uncontrolled components, making it easy to integrate various inputs into forms. Use the Controller wrapper to manage BaseToolkit UI components seamlessly while maintaining flexibility in validation and state handling through the register method in the useForm hook."
    />
  );
}

export default RouteRegisterFields;
