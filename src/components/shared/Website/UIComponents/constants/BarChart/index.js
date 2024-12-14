import {
  View as CategoryComparisonView,
  source as CategoryComparisonSrc,
} from "./../../../UIComponents/Docs/BarChart/CategoryComparison";
import {
  View as MonthlySalesView,
  source as MonthlySalesSrc,
} from "./../../../UIComponents/Docs/BarChart/MonthlySales";
import {
  View as QuarterlyGrowthView,
  source as QuarterlyGrowthSrc,
} from "./../../../UIComponents/Docs/BarChart/QuarterlyGrowth";
import {
  View as StackedDataView,
  source as StackedDataSrc,
} from "./../../../UIComponents/Docs/BarChart/StackedData";

import { barChartProps } from "../../Api/PropsApi/constants";

export const barChartContent = [
  { label: "#Monthly Overview", href: "#monthly-overview" },
  { label: "#Category Breakdown", href: "#category-breakdown" },
  { label: "#Quarter Growth", href: "#quarter-growth" },
  { label: "#Stacked Totals", href: "#stacked-totals" },
  { label: "<BarChart />", href: "#bar-chart-api" },
];

export const barChartSections = [
  {
    id: "monthly-overview",
    title: "#Monthly Overview",
    subtitle:
      "Displays sales data by month, using dynamic shading and adjusted gaps to highlight each bar distinctly.",
    source: MonthlySalesSrc,
    view: MonthlySalesView,
  },
  {
    id: "category-breakdown",
    title: "#Category Breakdown",
    subtitle:
      "Highlights category-specific data, with grouped bars, color variations per category, and tooltips for each item.",
    source: CategoryComparisonSrc,
    view: CategoryComparisonView,
  },
  {
    id: "quarter-growth",
    title: "#Quarter Growth",
    subtitle:
      "Shows quarterly growth with unique color shades, additional space, and interactive tooltips for detailed insights.",
    source: QuarterlyGrowthSrc,
    view: QuarterlyGrowthView,
  },
  {
    id: "stacked-totals",
    title: "#Stacked Totals",
    subtitle:
      "Illustrates stacked values per category using rootID for cumulative data layering in each bar.",
    source: StackedDataSrc,
    view: StackedDataView,
  },
  {
    id: "bar-chart-api",
    title: "<BarChart />",
    isApi: true,
    componentProps: barChartProps,
  },
];
