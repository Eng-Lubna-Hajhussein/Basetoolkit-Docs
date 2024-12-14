import {
  View as BasicPaperView,
  source as BasicPaperSrc,
} from "./../../../UIComponents/Docs/Paper/BasicPaper";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Paper/Customization";
import {
  View as VariantsView,
  source as VariantsSrc,
} from "./../../../UIComponents/Docs/Paper/Variants";
import {
  View as CornersView,
  source as CornersSrc,
} from "./../../../UIComponents/Docs/Paper/Corners";
import { paperProps } from "../../Api/PropsApi/constants";

export const paperContent = [
  { label: "#Base Paper", href: "#base-paper" },
  { label: "#Styled Paper", href: "#styled-paper" },
  { label: "#Paper Styles", href: "#paper-styles" },
  { label: "#Rounded Corners", href: "#rounded-corners" },
  { label: "<Paper />", href: "#paper-api" },
];

export const paperSections = [
  {
    id: "base-paper",
    title: "#Base Paper",
    subtitle: "Default elevated Paper example.",
    source: BasicPaperSrc,
    view: BasicPaperView,
  },
  {
    id: "styled-paper",
    title: "#Styled Paper",
    subtitle: "Using custom modes for varied styling.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "paper-styles",
    title: "#Paper Styles",
    subtitle: "Examples of different Paper variants.",
    source: VariantsSrc,
    view: VariantsView,
  },
  {
    id: "rounded-corners",
    title: "#Rounded Corners",
    subtitle: "Adjusting the corner styles of Paper.",
    source: CornersSrc,
    view: CornersView,
  },
  {
    id: "paper-api",
    title: "<Paper />",
    isApi: true,
    componentProps: paperProps,
  },
];
