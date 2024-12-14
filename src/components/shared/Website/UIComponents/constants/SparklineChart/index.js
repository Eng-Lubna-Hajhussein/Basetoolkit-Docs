import {
  View as BasicSparklineView,
  source as BasicSparklineSrc,
} from "./../../../UIComponents/Docs/SparklineChart/BasicSparkline";
import {
  View as CustomYAxisView,
  source as CustomYAxisSrc,
} from "./../../../UIComponents/Docs/SparklineChart/CustomYAxis";
import {
  View as BarPlotTypeView,
  source as BarPlotTypeSrc,
} from "./../../../UIComponents/Docs/SparklineChart/BarPlotType";
import {
  View as CustomColorView,
  source as CustomColorSrc,
} from "./../../../UIComponents/Docs/SparklineChart/CustomColor";
import {
  View as TooltipsView,
  source as TooltipsSrc,
} from "./../../../UIComponents/Docs/SparklineChart/Tooltips";
import { sparkLineChartProps } from "../../Api/PropsApi/constants";

export const sparklineContent = [
  { label: "#Line Display", href: "#line-display" },
  { label: "#Y-Axis Range", href: "#y-axis-range" },
  { label: "#Bar Style", href: "#bar-style" },
  { label: "#Point Colors", href: "#point-colors" },
  { label: "#Hide Tooltip", href: "#hide-tooltip" },
  { label: "<SparklineChart />", href: "#sparkline-chart-api" },
];

export const sparklineSections = [
  {
    id: "line-display",
    title: "#Line Display",
    subtitle: "A simple sparkline with tooltips on hover.",
    source: BasicSparklineSrc,
    view: BasicSparklineView,
  },
  {
    id: "y-axis-range",
    title: "#Y-Axis Range",
    subtitle: "Sparkline with custom Y-axis values.",
    source: CustomYAxisSrc,
    view: CustomYAxisView,
  },
  {
    id: "bar-style",
    title: "#Bar Style",
    subtitle: "Displays data using bars instead of lines.",
    source: BarPlotTypeSrc,
    view: BarPlotTypeView,
  },
  {
    id: "point-colors",
    title: "#Point Colors",
    subtitle: "Customize data point colors with tooltips.",
    source: CustomColorSrc,
    view: CustomColorView,
  },
  {
    id: "hide-tooltip",
    title: "#Hide Tooltip",
    subtitle: "Hide tooltips by setting showTooltip to false.",
    source: TooltipsSrc,
    view: TooltipsView,
  },
  {
    id: "sparkline-chart-api",
    title: "<SparklineChart />",
    isApi: true,
    componentProps: sparkLineChartProps,
  },
];
