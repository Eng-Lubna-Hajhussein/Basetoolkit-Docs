import { formHelperTextProps, inputAdornmentProps, inputLabelProps, textFieldProps } from "../../Api/PropsApi/constants";
import {
  View as BasicTextFieldView,
  source as BasicTextFieldSrc,
} from "./../../../UIComponents/Docs/TextField/BasicTextField";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/TextField/Color";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/TextField/Customization";
import {
  View as FormPropsView,
  source as FormPropsSrc,
} from "./../../../UIComponents/Docs/TextField/FormProps";
import {
  View as FullWidthView,
  source as FullWidthSrc,
} from "./../../../UIComponents/Docs/TextField/FullWidth";
import {
  View as IconsView,
  source as IconsSrc,
} from "./../../../UIComponents/Docs/TextField/Icons";
import {
  View as InputAdornmentsView,
  source as InputAdornmentsSrc,
} from "./../../../UIComponents/Docs/TextField/InputAdornments";
import {
  View as MultilineView,
  source as MultilineSrc,
} from "./../../../UIComponents/Docs/TextField/Multiline";
import {
  View as StyledTextfieldView,
  source as StyledTextfieldSrc,
} from "./../../../UIComponents/Docs/TextField/StyledTextfield";
import {
  View as UncontrolledVSControlledView,
  source as UncontrolledVSControlledSrc,
} from "./../../../UIComponents/Docs/TextField/UncontrolledVSControlled";
import {
  View as ValidationView,
  source as ValidationSrc,
} from "./../../../UIComponents/Docs/TextField/Validation";

export const textfieldContent = [
  { label: "#Basic Input Field", href: "#basic-input-field" },
  { label: "#Form Props", href: "#form-props" },
  { label: "#Error Validation", href: "#error-validation" },
  { label: "#Multiline Field", href: "#multiline-field" },
  { label: "#Full Width Field", href: "#full-width-field" },
  { label: "#Input Icons", href: "#input-icons" },
  { label: "#Input Adornments", href: "#input-adornments" },
  { label: "#Controlled Fields", href: "#controlled-fields" },
  { label: "#Highlight Color", href: "#highlight-color" },
  { label: "#Styled Inputs", href: "#styled-inputs" },
  // { label: "#Custom Input Styles", href: "#custom-input-styles" },
  { label: "<TextField />", href: "#textfield-api" },
  { label: "<InputAdornment />", href: "#input-adornment-api" },
  { label: "<InputLabel />", href: "#input-label-api" },
  { label: "<FormHelperText />", href: "#form-helper-text-api" },
];

export const textfieldSections = [
  {
    id: "basic-input-field",
    title: "#Basic Input Field",
    subtitle:
      "The TextField component includes a label, input, and helper text with outlined, filled, and standard variants.",
    source: BasicTextFieldSrc,
    view: BasicTextFieldView,
  },
  {
    id: "form-props",
    title: "#Form Props",
    subtitle:
      "Supports form props like required, disabled, type, and helperText for input context.",
    source: FormPropsSrc,
    view: FormPropsView,
  },
  {
    id: "error-validation",
    title: "#Error Validation",
    subtitle:
      "Use the error prop to indicate issues, with helperText to give feedback on input errors.",
    source: ValidationSrc,
    view: ValidationView,
  },
  {
    id: "multiline-field",
    title: "#Multiline Field",
    subtitle: "Enable multiline input for larger text areas.",
    source: MultilineSrc,
    view: MultilineView,
  },
  {
    id: "full-width-field",
    title: "#Full Width Field",
    subtitle: "Expand the input field to use the full width of its container.",
    source: FullWidthSrc,
    view: FullWidthView,
  },
  {
    id: "input-icons",
    title: "#Input Icons",
    subtitle: "Display icons within the input field.",
    source: IconsSrc,
    view: IconsView,
  },
  {
    id: "input-adornments",
    title: "#Input Adornments",
    subtitle:
      "Use input adornments to add prefixes, suffixes, or actions like password visibility toggles.",
    source: InputAdornmentsSrc,
    view: InputAdornmentsView,
  },
  {
    id: "controlled-fields",
    title: "#Controlled Fields",
    subtitle:
      "Manage component state externally (controlled) or internally (uncontrolled).",
    source: UncontrolledVSControlledSrc,
    view: UncontrolledVSControlledView,
  },
  {
    id: "highlight-color",
    title: "#Highlight Color",
    subtitle: "Change the focus highlight color using the color prop.",
    source: ColorSrc,
    view: ColorView,
  },
  {
    id: "styled-inputs",
    title: "#Styled Inputs",
    subtitle: "Apply custom styles to the input field using CSS.",
    source: StyledTextfieldSrc,
    view: StyledTextfieldView,
  },
  // {
  //   id: "styled-inputs",
  //   title: "#Styled Inputs",
  //   subtitle: "Apply custom styles to the input field using CSS.",
  //   source: StyledTextfieldSrc,
  //   view: StyledTextfieldView,
  // },
  {
    id: "textfield-api",
    title: "<TextField />",
    isApi: true,
    componentProps: textFieldProps,
  },
  {
    id: "input-adornment-api",
    title: "<InputAdornment />",
    isApi: true,
    componentProps: inputAdornmentProps,
  },
  {
    id: "input-label-api",
    title: "<InputLabel />",
    isApi: true,
    componentProps: inputLabelProps,
  },
  {
    id: "form-helper-text-api",
    title: "<FormHelperText />",
    isApi: true,
    componentProps: formHelperTextProps,
  },
];
