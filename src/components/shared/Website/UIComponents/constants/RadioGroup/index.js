import {
  View as BasicRadioGroupView,
  source as BasicRadioGroupSrc,
} from "./../../../UIComponents/Docs/RadioGroup/BasicRadioGroup";
import {
  View as InlineRadioGroupView,
  source as InlineRadioGroupSrc,
} from "./../../../UIComponents/Docs/RadioGroup/InlineRadioGroup";
import {
  View as ControlledRadioGroupView,
  source as ControlledRadioGroupSrc,
} from "./../../../UIComponents/Docs/RadioGroup/ControlledRadioGroup";
import {
  View as StandaloneRadiosView,
  source as StandaloneRadiosSrc,
} from "./../../../UIComponents/Docs/RadioGroup/StandaloneRadios";
import {
  View as SizedRadioOptionsView,
  source as SizedRadioOptionsSrc,
} from "./../../../UIComponents/Docs/RadioGroup/SizedRadioOptions";
import {
  View as ColorsView,
  source as ColorsSrc,
} from "./../../../UIComponents/Docs/RadioGroup/Colors";
import {
  View as LabelPositioningView,
  source as LabelPositioningSrc,
} from "./../../../UIComponents/Docs/RadioGroup/LabelPositioning";
import {
  View as QuizWithValidationView,
  source as QuizWithValidationSrc,
} from "./../../../UIComponents/Docs/RadioGroup/QuizWithValidation";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/RadioGroup/Customization";

import { radioGroupProps, radioProps } from "../../Api/PropsApi/constants";

export const radioGroupContent = [
  { label: "#Basic Group", href: "#basic-group" },
  { label: "#Inline Radio Group", href: "#inline-radio-group" },
  { label: "#Controlled Radio Group", href: "#controlled-radio-group" },
  { label: "#Standalone Radios", href: "#standalone-radios" },
  { label: "#Sized Radio Options", href: "#sized-radio-options" },
  { label: "#Colors", href: "#colors" },
  { label: "#Label Positioning", href: "#label-positioning" },
  { label: "#Quiz With Validation", href: "#quiz-with-validation" },
  { label: "#Custom Styles", href: "#custom-styles" },
  { label: "<Radio />", href: "#radio-api" },
  { label: "<RadioGroup />", href: "#radio-group-api" },
];

export const radioGroupSections = [
  {
    id: "basic-group",
    title: "#Basic Group",
    subtitle: "Group Radio components for easier use and accessibility.",
    source: BasicRadioGroupSrc,
    view: BasicRadioGroupView,
  },
  {
    id: "inline-radio-group",
    title: "#Inline Radio Group",
    subtitle: "Radio buttons arranged in a row with a disabled option.",
    source: InlineRadioGroupSrc,
    view: InlineRadioGroupView,
  },
  {
    id: "controlled-radio-group",
    title: "#Controlled Radio Group",
    subtitle: "Controlled radio group for selecting a gender option.",
    source: ControlledRadioGroupSrc,
    view: ControlledRadioGroupView,
  },
  {
    id: "standalone-radios",
    title: "#Standalone Radios",
    subtitle: "Independent radio options to choose between values.",
    source: StandaloneRadiosSrc,
    view: StandaloneRadiosView,
  },
  {
    id: "sized-radio-options",
    title: "#Sized Radio Options",
    subtitle: "Radio options with different sizes for visual distinction.",
    source: SizedRadioOptionsSrc,
    view: SizedRadioOptionsView,
  },
  {
    id: "colors",
    title: "#Colors",
    subtitle: "Radio options in different colors.",
    source: ColorsSrc,
    view: ColorsView,
  },
  {
    id: "label-positioning",
    title: "#Label Positioning",
    subtitle: "A radio group with options for label positioning.",
    source: LabelPositioningSrc,
    view: LabelPositioningView,
  },
  {
    id: "quiz-with-validation",
    title: "#Quiz With Validation",
    subtitle: "A radio group quiz with validation and helper text guidance.",
    source: QuizWithValidationSrc,
    view: QuizWithValidationView,
  },
  {
    id: "custom-styles",
    title: "#Custom Styles",
    subtitle: "An example of how to customize the radio component.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "radio-api",
    title: "<Radio />",
    isApi: true,
    componentProps: radioProps,
  },
  {
    id: "radio-group-api",
    title: "<RadioGroup />",
    isApi: true,
    componentProps: radioGroupProps,
  },
];
