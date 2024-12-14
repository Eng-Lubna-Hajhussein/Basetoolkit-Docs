import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { lineChartSections, lineChartContent } from "./../../constants/LineChart";

function RouteLineChart() {
  return (
    <DocPage
      content={lineChartContent}
      sections={lineChartSections}
      title="LineChart"
      description="The LineChart component visualizes data trends with customizable lines, points, and filled areas. It supports interactive features, custom colors, and grid configurations."
    />
  );
}

export default RouteLineChart;
