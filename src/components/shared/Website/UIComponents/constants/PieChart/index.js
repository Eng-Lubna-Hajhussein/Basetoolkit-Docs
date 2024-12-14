import {
  View as BasicPieView,
  source as BasicPieSrc,
} from "./../../../UIComponents/Docs/PieChart/BasicPie";
import {
  View as CustomRadiusView,
  source as CustomRadiusSrc,
} from "./../../../UIComponents/Docs/PieChart/CustomRadius";
import {
  View as PaddingSlicesView,
  source as PaddingSlicesSrc,
} from "./../../../UIComponents/Docs/PieChart/PaddingSlices";
import {
  View as PartialPieView,
  source as PartialPieSrc,
} from "./../../../UIComponents/Docs/PieChart/PartialPie";
import {
  View as OverallColorView,
  source as OverallColorSrc,
} from "./../../../UIComponents/Docs/PieChart/OverallColor";
import {
  View as HideLabelsView,
  source as HideLabelsSrc,
} from "./../../../UIComponents/Docs/PieChart/HideLabels";
import {
  View as CustomLabelStylesView,
  source as CustomLabelStylesSrc,
} from "./../../../UIComponents/Docs/PieChart/CustomLabelStyles";
import {
  View as ArcLabelsView,
  source as ArcLabelsSrc,
} from "./../../../UIComponents/Docs/PieChart/ArcLabels";
import {
  View as InteractivePieView,
  source as InteractivePieSrc,
} from "./../../../UIComponents/Docs/PieChart/InteractivePie";
import { pieChartProps } from "../../Api/PropsApi/constants";

export const pieChartContent = [
  { label: "#Simple Display", href: "#simple-display" },
  { label: "#Inner Radius", href: "#inner-radius" },
  { label: "#Slice Padding", href: "#slice-padding" },
  { label: "#Partial View", href: "#partial-view" },
  { label: "#Overall Color", href: "#overall-color" },
  { label: "<PieChart />", href: "#pie-chart-api" },
];

export const pieChartSections = [
  {
    id: "simple-display",
    title: "#Simple Display",
    subtitle: "A basic pie chart with standard slices and labels.",
    source: BasicPieSrc,
    view: BasicPieView,
  },
  {
    id: "inner-radius",
    title: "#Inner Radius",
    subtitle: "Customizes the inner radius for a donut-style chart.",
    source: CustomRadiusSrc,
    view: CustomRadiusView,
  },
  {
    id: "slice-padding",
    title: "#Slice Padding",
    subtitle: "Adds spacing between slices for distinction.",
    source: PaddingSlicesSrc,
    view: PaddingSlicesView,
  },
  {
    id: "partial-view",
    title: "#Partial View",
    subtitle: "Shows a pie segment instead of a full circle.",
    source: PartialPieSrc,
    view: PartialPieView,
  },
  {
    id: "overall-color",
    title: "#Overall Color",
    subtitle: "Applies a single color across all slices.",
    source: OverallColorSrc,
    view: OverallColorView,
  },
  {
    id: "no-labels",
    title: "#No Labels",
    subtitle: "Displays a pie chart without any labels.",
    source: HideLabelsSrc,
    view: HideLabelsView,
  },
  {
    id: "label-styles",
    title: "#Label Styles",
    subtitle: "Adjusts label color and font for clarity.",
    source: CustomLabelStylesSrc,
    view: CustomLabelStylesView,
  },
  {
    id: "arc-limits",
    title: "#Arc Limits",
    subtitle: "Shows labels only on slices with large enough arcs.",
    source: ArcLabelsSrc,
    view: ArcLabelsView,
  },
  {
    id: "dynamic-pie",
    title: "#Dynamic Pie",
    subtitle: "A pie chart with interactive controls for customization.",
    source: InteractivePieSrc,
    view: InteractivePieView,
  },
  {
    id: "pie-chart-api",
    title: "<PieChart />",
    isApi: true,
    componentProps: pieChartProps,
  },
];
