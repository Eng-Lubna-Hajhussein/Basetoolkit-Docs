import {
  View as LinearView,
  source as LinearSrc,
} from "./../../../UIComponents/Docs/Stepper/Linear";
import {
  View as NonLinearView,
  source as NonLinearSrc,
} from "./../../../UIComponents/Docs/Stepper/NonLinear";
import {
  View as ErrorStepView,
  source as ErrorStepSrc,
} from "./../../../UIComponents/Docs/Stepper/ErrorStep";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Stepper/Customization";
import {
  View as VerticalStepperView,
  source as VerticalStepperSrc,
} from "./../../../UIComponents/Docs/Stepper/VerticalStepper";
import {
  View as MobileStepperView,
  source as MobileStepperSrc,
} from "./../../../UIComponents/Docs/Stepper/MobileStepper";
import {
  View as MobileStepperDotsView,
  source as MobileStepperDotsSrc,
} from "./../../../UIComponents/Docs/Stepper/MobileStepperDots";
import {
  View as MobileStepperProgressView,
  source as MobileStepperProgressSrc,
} from "./../../../UIComponents/Docs/Stepper/MobileStepperProgress";
import { mobileStepperProps, stepButtonProps, stepConnectorProps, stepContentProps, stepIconProps, stepLabelProps, stepperProps, stepProps } from "../../Api/PropsApi/constants";

export const stepperContent = [
  { label: "#Linear Steps", href: "#linear-steps" },
  { label: "#Free Navigation", href: "#free-navigation" },
  { label: "#Error Step", href: "#error-step" },
  { label: "#Custom Horizontal", href: "#custom-horizontal" },
  { label: "#Vertical Layout", href: "#vertical-layout" },
  { label: "#Text Mobile Stepper", href: "#text-mobile-stepper" },
  { label: "#Dot Mobile Stepper", href: "#dot-mobile-stepper" },
  { label: "#Progress Mobile Stepper", href: "#progress-mobile-stepper" },
  { label: "<Stepper />", href: "#stepper-api" },
  { label: "<Step />", href: "#step-api" },
  { label: "<StepButton />", href: "#step-button-api" },
  { label: "<StepConnector />", href: "#step-connector-api" },
  { label: "<StepContent />", href: "#step-content-api" },
  { label: "<StepIcon />", href: "#step-icon-api" },
  { label: "<StepLabel />", href: "#step-label-api" },
  { label: "<MobileStepper />", href: "#mobile-stepper-api" },
];

export const stepperSections = [
  {
    id: "linear-steps",
    title: "#Linear Steps",
    subtitle: "Linear steppers guide users through steps sequentially.",
    source: LinearSrc,
    view: LinearView,
  },
  {
    id: "free-navigation",
    title: "#Free Navigation",
    subtitle: "Users can start at any step in a non-linear flow.",
    source: NonLinearSrc,
    view: NonLinearView,
  },
  {
    id: "error-step",
    title: "#Error Step",
    subtitle: "An example showing how to display an error within a step.",
    source: ErrorStepSrc,
    view: ErrorStepView,
  },
  {
    id: "custom-horizontal",
    title: "#Custom Horizontal",
    subtitle: "Customizing the horizontal stepper appearance.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "vertical-layout",
    title: "#Vertical Layout",
    subtitle: "Example of a vertical stepper.",
    source: VerticalStepperSrc,
    view: VerticalStepperView,
  },
  {
    id: "text-mobile-stepper",
    title: "#Text Mobile Stepper",
    subtitle: "Displays step information as text.",
    source: MobileStepperSrc,
    view: MobileStepperView,
  },
  {
    id: "dot-mobile-stepper",
    title: "#Dot Mobile Stepper",
    subtitle: "Uses dots for a compact stepper when steps are few.",
    source: MobileStepperDotsSrc,
    view: MobileStepperDotsView,
  },
  {
    id: "progress-mobile-stepper",
    title: "#Progress Mobile Stepper",
    subtitle: "Displays progress for many or dynamic steps.",
    source: MobileStepperProgressSrc,
    view: MobileStepperProgressView,
  },
  {
    id: "stepper-api",
    title: "<Stepper />",
    isApi: true,
    componentProps: stepperProps,
  },
  {
    id: "step-api",
    title: "<Step />",
    isApi: true,
    componentProps: stepProps,
  },
  {
    id: "step-button-api",
    title: "<StepButton />",
    isApi: true,
    componentProps: stepButtonProps,
  },
  {
    id: "step-connector-api",
    title: "<StepConnector />",
    isApi: true,
    componentProps: stepConnectorProps,
  },
  {
    id: "step-content-api",
    title: "<StepContent />",
    isApi: true,
    componentProps: stepContentProps,
  },
  {
    id: "step-icon-api",
    title: "<StepIcon />",
    isApi: true,
    componentProps: stepIconProps,
  },
  {
    id: "step-label-api",
    title: "<StepLabel />",
    isApi: true,
    componentProps: stepLabelProps,
  },
  {
    id: "mobile-stepper-api",
    title: "<MobileStepper />",
    isApi: true,
    componentProps: mobileStepperProps,
  },
];
