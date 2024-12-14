import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../UIComponents/Docs/ColorInput/BasicUsage";
import {
  View as ControlledVSUncontrolledView,
  source as ControlledVSUncontrolledSrc,
} from "./../../../UIComponents/Docs/ColorInput/ControlledVSUncontrolled";
import {
  View as AdornmentsView,
  source as AdornmentsSrc,
} from "./../../../UIComponents/Docs/ColorInput/Adornments";
import {
  View as HelperTextView,
  source as HelperTextSrc,
} from "./../../../UIComponents/Docs/ColorInput/HelperText";
import {
  View as FormPropsView,
  source as FormPropsSrc,
} from "./../../../UIComponents/Docs/ColorInput/FormProps";
import { colorInputProps } from "../../Api/PropsApi/constants";

export const colorInputContent = [
  { label: "#Basic Usage", href: "#basic-usage" },
  {
    label: "#Controlled Color Input Value",
    href: "#controlled-color-input-value",
  },
  { label: "#Form Props", href: "#form-props" },
  { label: "#Helper Text", href: "#helper-text" },
  { label: "#Input Adornments", href: "#input-adornments" },
  { label: "<ColorInput />", href: "#color-input-api" },
];

export const colorInputSections = [
  {
    id: "basic-usage",
    title: "#Basic Usage",
    subtitle: null,
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "controlled-color-input-value",
    title: "#Controlled Color Input Value",
    subtitle:
      "Manage the component’s value using controlled or uncontrolled behavior.",
    source: ControlledVSUncontrolledSrc,
    view: ControlledVSUncontrolledView,
  },
  {
    id: "form-props",
    title: "#Form Props",
    subtitle: "The component can be disabled or read-only.",
    source: FormPropsSrc,
    view: FormPropsView,
  },
  {
    id: "helper-text",
    title: "#Helper Text",
    subtitle: null,
    source: HelperTextSrc,
    view: HelperTextView,
  },
  {
    id: "input-adornments",
    title: "#Input Adornments",
    subtitle: null,
    source: AdornmentsSrc,
    view: AdornmentsView,
  },
  {
    id: "color-input-api",
    title: "<ColorInput />",
    isApi: true,
    componentProps: colorInputProps,
  },
];
