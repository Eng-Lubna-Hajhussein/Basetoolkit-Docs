import {
  View as BasicGaugeView,
  source as BasicGaugeSrc,
} from "./../../../UIComponents/Docs/Gauge/BasicGauge";
import {
  View as CustomArcView,
  source as CustomArcSrc,
} from "./../../../UIComponents/Docs/Gauge/CustomArc";
import {
  View as PointerGaugeView,
  source as PointerGaugeSrc,
} from "./../../../UIComponents/Docs/Gauge/PointerGauge";
import {
  View as CustomColorsView,
  source as CustomColorsSrc,
} from "./../../../UIComponents/Docs/Gauge/CustomColors";
import {
  View as HideTextView,
  source as HideTextSrc,
} from "./../../../UIComponents/Docs/Gauge/HideText";
import {
  View as CustomTextView,
  source as CustomTextSrc,
} from "./../../../UIComponents/Docs/Gauge/CustomText";
import {
  View as CustomArcWidthView,
  source as CustomArcWidthSrc,
} from "./../../../UIComponents/Docs/Gauge/CustomArcWidth";
import {
  View as InteractiveGaugeView,
  source as InteractiveGaugeSrc,
} from "./../../../UIComponents/Docs/Gauge/InteractiveGauge";
import { gaugeProps } from "../../Api/PropsApi/constants";

export const gaugeContent = [
  { label: "#Value Display", href: "#value-display" },
  { label: "#Custom Range", href: "#custom-range" },
  { label: "#Pointer View", href: "#pointer-view" },
  { label: "#Arc Colors", href: "#arc-colors" },
  { label: "#Text Hidden", href: "#text-hidden" },
  { label: "#Percentage Text", href: "#percentage-text" },
  { label: "#Wide Arc", href: "#wide-arc" },
  { label: "#Dynamic Gauge", href: "#dynamic-gauge" },
  { label: "<Gauge />", href: "#gauge-api" },
];

export const gaugeSections = [
  {
    id: "value-display",
    title: "#Value Display",
    subtitle: "Shows a simple gauge with a visual value indicator.",
    source: BasicGaugeSrc,
    view: BasicGaugeView,
  },
  {
    id: "custom-range",
    title: "#Custom Range",
    subtitle: "Gauge with a customized arc range to suit specific needs.",
    source: CustomArcSrc,
    view: CustomArcView,
  },
  {
    id: "pointer-view",
    title: "#Pointer View",
    subtitle: "Adds a pointer to indicate the gauge’s current value.",
    source: PointerGaugeSrc,
    view: PointerGaugeView,
  },
  {
    id: "arc-colors",
    title: "#Arc Colors",
    subtitle: "Applies custom colors to the gauge's arc and text.",
    source: CustomColorsSrc,
    view: CustomColorsView,
  },
  {
    id: "text-hidden",
    title: "#Text Hidden",
    subtitle: "Hides the text display on the gauge for a cleaner view.",
    source: HideTextSrc,
    view: HideTextView,
  },
  {
    id: "percentage-text",
    title: "#Percentage Text",
    subtitle: "Displays custom text showing percentage inside the gauge.",
    source: CustomTextSrc,
    view: CustomTextView,
  },
  {
    id: "wide-arc",
    title: "#Wide Arc",
    subtitle: "Enhances visibility by increasing the arc thickness.",
    source: CustomArcWidthSrc,
    view: CustomArcWidthView,
  },
  {
    id: "dynamic-gauge",
    title: "#Dynamic Gauge",
    subtitle: "Interactive gauge with adjustable values and display options.",
    source: InteractiveGaugeSrc,
    view: InteractiveGaugeView,
  },
  {
    id: "gauge-api",
    title: "<Gauge />",
    isApi: true,
    componentProps: gaugeProps,
  },
];
