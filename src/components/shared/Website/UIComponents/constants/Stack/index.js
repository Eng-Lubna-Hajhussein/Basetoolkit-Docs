import {
  View as BasicStackView,
  source as BasicStackSrc,
} from "./../../../UIComponents/Docs/Stack/BasicStack";
import {
  View as DirectionView,
  source as DirectionSrc,
} from "./../../../UIComponents/Docs/Stack/Direction";
import {
  View as DividersView,
  source as DividersSrc,
} from "./../../../UIComponents/Docs/Stack/Dividers";
import {
  View as ResponsiveValuesView,
  source as ResponsiveValuesSrc,
} from "./../../../UIComponents/Docs/Stack/ResponsiveValues";
import {
  View as FlexboxGapView,
  source as FlexboxGapSrc,
} from "./../../../UIComponents/Docs/Stack/FlexboxGap";
import {
  View as InteractiveView,
  source as InteractiveSrc,
} from "./../../../UIComponents/Docs/Stack/Interactive";
import { stackProps } from "../../Api/PropsApi/constants";

export const stackContent = [
  { label: "#Basic Stack", href: "#basic-stack" },
  { label: "#Direction", href: "#direction" },
  { label: "#Dividers", href: "#dividers" },
  { label: "#Responsive Values", href: "#responsive-values" },
  { label: "#Flexbox Gap", href: "#flexbox-gap" },
  { label: "#Interactive", href: "#interactive" },
  { label: "<Stack />", href: "#stack-api" },
];

export const stackSections = [
  {
    id: "basic-stack",
    title: "#Basic Stack",
    subtitle: null,
    source: BasicStackSrc,
    view: BasicStackView,
  },
  {
    id: "direction",
    title: "#Direction",
    subtitle: "Set the direction to arrange items in a row or column.",
    source: DirectionSrc,
    view: DirectionView,
  },
  {
    id: "dividers",
    title: "#Dividers",
    subtitle: "Add elements between items using the divider prop.",
    source: DividersSrc,
    view: DividersView,
  },
  {
    id: "responsive-values",
    title: "#Responsive Values",
    subtitle: "Change layout direction or spacing based on breakpoints.",
    source: ResponsiveValuesSrc,
    view: ResponsiveValuesView,
  },
  {
    id: "flexbox-gap",
    title: "#Flexbox Gap",
    subtitle: "Enable flexbox gap for automatic spacing.",
    source: FlexboxGapSrc,
    view: FlexboxGapView,
  },
  {
    id: "interactive",
    title: "#Interactive",
    subtitle: null,
    source: InteractiveSrc,
    view: InteractiveView,
  },
  {
    id: "stack-api",
    title: "<Stack />",
    isApi: true,
    componentProps: stackProps,
  },
];
