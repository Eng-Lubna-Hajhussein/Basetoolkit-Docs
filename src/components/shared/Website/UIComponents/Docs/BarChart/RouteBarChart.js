import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  barChartSections,
  barChartContent,
} from "./../../constants/BarChart";

function RouteBarChart() {
  return (
    <DocPage
      content={barChartContent}
      sections={barChartSections}
      title="BarChart"
      description="The BarChart component visualizes data as bars, allowing customizable colors, spacing, tooltips, and grouping options for detailed insights."
    />
  );
}

export default RouteBarChart;
