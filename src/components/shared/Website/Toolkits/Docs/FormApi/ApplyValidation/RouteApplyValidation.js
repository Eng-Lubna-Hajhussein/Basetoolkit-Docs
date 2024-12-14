import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  applyValidationSections,
  applyValidationContent,
} from "./../../../constants/FormApi/ApplyValidation";

function RouteApplyValidation() {
  return (
    <DocPage
      content={applyValidationContent}
      sections={applyValidationSections}
      title="Apply Validation"
      description="The useForm hook in BaseToolkit simplifies form validation with built-in support for essential validation rules, ensuring robust and user-friendly forms. Key rules include required for mandatory fields, min and max for setting numeric boundaries, and minLength and maxLength for string length limits. Additionally, pattern enables regex-based validation, and the validate rule allows custom validation logic. Together, these options offer flexible and powerful validation capabilities, making it easy to enforce input requirements and handle validation seamlessly in your forms."
    />
  );
}

export default RouteApplyValidation;
