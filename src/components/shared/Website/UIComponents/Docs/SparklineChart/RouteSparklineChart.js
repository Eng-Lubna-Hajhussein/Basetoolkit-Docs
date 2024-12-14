import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { sparklineSections, sparklineContent } from "./../../constants/SparklineChart";

function RouteSparklineChart() {
  return (
    <DocPage
      content={sparklineContent}
      sections={sparklineSections}
      title="SparklineChart"
      description="The Sparkline Chart component offers a compact line or bar chart to display trends or data points at a glance. It supports custom Y-axis scaling, color customization, and interactive tooltips."
    />
  );
}

export default RouteSparklineChart;
