import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  handleErrorsSections,
  handleErrorsContent,
} from "./../../../constants/FormApi/HandleErrors";

function RouteApplyValidation() {
  return (
    <DocPage
      content={handleErrorsContent}
      sections={handleErrorsSections}
      title="Handle Errors"
      description="
In BaseToolkit's useForm hook, errors are managed through an errors object, which holds validation messages for each field based on specified rules. This object enables clear error feedback, making it easy to display errors per field in a form, ensuring a smooth user experience."
    />
  );
}

export default RouteApplyValidation;
