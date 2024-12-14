import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { gaugeSections, gaugeContent } from "./../../constants/Gauge";

function RouteGauge() {
  return (
    <DocPage
      content={gaugeContent}
      sections={gaugeSections}
      title="Gauge"
      description="The Gauge Chart component visually represents a value within a specified range, typically with an arc or pointer, ideal for displaying metrics like progress or performance."
    />
  );
}

export default RouteGauge;
