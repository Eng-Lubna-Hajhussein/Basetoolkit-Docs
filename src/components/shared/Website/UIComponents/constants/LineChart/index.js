import {
  View as BasicChartView,
  source as BasicChartSrc,
} from "./../../../UIComponents/Docs/LineChart/BasicChart";
import {
  View as AreaChartView,
  source as AreaChartSrc,
} from "./../../../UIComponents/Docs/LineChart/AreaChart";
import {
  View as AreaConnectionsView,
  source as AreaConnectionsSrc,
} from "./../../../UIComponents/Docs/LineChart/AreaConnections";
import {
  View as MatchSpecificPointsView,
  source as MatchSpecificPointsSrc,
} from "./../../../UIComponents/Docs/LineChart/MatchSpecificPoints";
import {
  View as CustomAreaColorView,
  source as CustomAreaColorSrc,
} from "./../../../UIComponents/Docs/LineChart/CustomAreaColor";
import {
  View as CustomGridView,
  source as CustomGridSrc,
} from "./../../../UIComponents/Docs/LineChart/CustomGrid";
import {
  View as CustomColorsView,
  source as CustomColorsSrc,
} from "./../../../UIComponents/Docs/LineChart/CustomColors";
import {
  View as InteractiveChartView,
  source as InteractiveChartSrc,
} from "./../../../UIComponents/Docs/LineChart/InteractiveChart";
import { lineChartProps } from "../../Api/PropsApi/constants";

export const lineChartContent = [
  { label: "#Simple Plot", href: "#simple-plot" },
  { label: "#Filled Area", href: "#filled-area" },
  { label: "#Connected Points", href: "#connected-points" },
  { label: "#Point Matches", href: "#point-matches" },
  { label: "#Area Colors", href: "#area-colors" },
  { label: "#Grid Lines", href: "#grid-lines" },
  { label: "#Line Colors", href: "#line-colors" },
  { label: "#Interactive View", href: "#interactive-view" },
  { label: "<LineChart />", href: "#line-chart-api" },
];

export const lineChartSections = [
  {
    id: "simple-plot",
    title: "#Simple Plot",
    subtitle: "A basic line chart with key data points.",
    source: BasicChartSrc,
    view: BasicChartView,
  },
  {
    id: "filled-area",
    title: "#Filled Area",
    subtitle: "Line chart with shaded area below lines.",
    source: AreaChartSrc,
    view: AreaChartView,
  },
  {
    id: "connected-points",
    title: "#Connected Points",
    subtitle: "Highlights connections between matched data points.",
    source: AreaConnectionsSrc,
    view: AreaConnectionsView,
  },
  {
    id: "point-matches",
    title: "#Point Matches",
    subtitle: "Lines drawn between specific matching points.",
    source: MatchSpecificPointsSrc,
    view: MatchSpecificPointsView,
  },
  {
    id: "area-colors",
    title: "#Area Colors",
    subtitle: "Custom colors for shaded chart areas.",
    source: CustomAreaColorSrc,
    view: CustomAreaColorView,
  },
  {
    id: "grid-lines",
    title: "#Grid Lines",
    subtitle: "Chart with adjustable grid lines for clarity.",
    source: CustomGridSrc,
    view: CustomGridView,
  },
  {
    id: "line-colors",
    title: "#Line Colors",
    subtitle: "Set custom colors for lines and points.",
    source: CustomColorsSrc,
    view: CustomColorsView,
  },
  {
    id: "interactive-view",
    title: "#Interactive View",
    subtitle: "Adjust chart settings with dynamic controls.",
    source: InteractiveChartSrc,
    view: InteractiveChartView,
  },
  {
    id: "line-chart-api",
    title: "<LineChart />",
    isApi: true,
    componentProps: lineChartProps,
  },
];
