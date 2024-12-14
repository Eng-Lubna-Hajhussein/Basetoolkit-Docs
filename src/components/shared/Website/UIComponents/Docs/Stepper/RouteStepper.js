import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  stepperSections,
  stepperContent,
} from "./../../constants/Stepper";

function RouteStepper() {
  return (
    <DocPage
      content={stepperContent}
      sections={stepperSections}
      title="Stepper"
      description="Steppers illustrate progress through sequential steps, creating a guided, step-by-step workflow."
    />
  );
}

export default RouteStepper;
