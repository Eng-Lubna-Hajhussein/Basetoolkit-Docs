import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { pieChartSections, pieChartContent } from "./../../constants/PieChart";

function RouteButtonGroup() {
  return (
    <DocPage
      content={pieChartContent}
      sections={pieChartSections}
      title="PIeChart"
      description="
The Pie Chart component visually represents data as a circular chart divided into slices, ideal for comparing proportions within a dataset. Customizable with various styles, labels, and interactivity options."
    />
  );
}

export default RouteButtonGroup;
