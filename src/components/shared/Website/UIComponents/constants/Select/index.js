import {
  View as BasicSelectView,
  source as BasicSelectSrc,
} from "./../../../UIComponents/Docs/Select/BasicSelect";
import {
  View as VariantsView,
  source as VariantsSrc,
} from "./../../../UIComponents/Docs/Select/Variants";
import {
  View as LabelsAndHelperTextView,
  source as LabelsAndHelperTextSrc,
} from "./../../../UIComponents/Docs/Select/LabelsAndHelperText";
import {
  View as AutoWidthView,
  source as AutoWidthSrc,
} from "./../../../UIComponents/Docs/Select/AutoWidth";
import {
  View as SmallSizeView,
  source as SmallSizeSrc,
} from "./../../../UIComponents/Docs/Select/SmallSize";
import {
  View as OtherPropsView,
  source as OtherPropsSrc,
} from "./../../../UIComponents/Docs/Select/OtherProps";
import { selectProps } from "../../Api/PropsApi/constants";

export const selectContent = [
  { label: "#Basic selection", href: "#basic-selection" },
  { label: "#Variant Types", href: "#variant-types" },
  { label: "#Label and Text", href: "#label-and-text" },
  { label: "#Auto Sizing", href: "#auto-sizing" },
  { label: "#Compact Size", href: "#compact-size" },
  { label: "#Additional Props", href: "#additional-props" },
  { label: "<Select />", href: "#select-api" },
];

export const selectSections = [
  {
    id: "basic-selection",
    title: "#Basic selection",
    subtitle:
      "Dropdown menus are shown below their trigger elements unless at the bottom of the screen.",
    source: BasicSelectSrc,
    view: BasicSelectView,
  },
  {
    id: "variant-types",
    title: "#Variant types",
    subtitle: "Different options include filled and standard styles.",
    source: VariantsSrc,
    view: VariantsView,
  },
  {
    id: "label-and-text",
    title: "#Label and text",
    subtitle: "Add labels and supporting text to guide users.",
    source: LabelsAndHelperTextSrc,
    view: LabelsAndHelperTextView,
  },
  {
    id: "auto-sizing",
    title: "#Auto sizing",
    subtitle: "Automatically adjust the width based on the content.",
    source: AutoWidthSrc,
    view: AutoWidthView,
  },
  {
    id: "compact-size",
    title: "#Compact size",
    subtitle: "Use a smaller size for more compact designs.",
    source: SmallSizeSrc,
    view: SmallSizeView,
  },
  {
    id: "additional-props",
    title: "#Additional props",
    subtitle: "Other available properties for customization.",
    source: OtherPropsSrc,
    view: OtherPropsView,
  },
  {
    id: "select-api",
    title: "<Select />",
    isApi: true,
    componentProps: selectProps,
  },
];
