import TemplatePage from "../../../../../sharedUI/TemplatePage/TemplatePage";
import demo from "./../../../../../../assets/demo/multi_step_form.mp4";

function RouteMultiStepForm() {
  return (
    <TemplatePage
      srcCode={"https://github.com/Eng-Lubna-Hajhussein/multi-step-form"}
      livePreview={"https://eng-lubna-hajhussein.github.io/multi-step-form/"}
      demo={demo}
      title="Multi-Step Form"
      description={`A dynamic multi-step form template that guides users through various steps of a form. Ideal for registration flows, checkout processes, or data collection. This template leverages BaseToolkit's powerful form API to manage validation, state, and seamless transitions between steps.`}
    />
  );
}

export default RouteMultiStepForm;
