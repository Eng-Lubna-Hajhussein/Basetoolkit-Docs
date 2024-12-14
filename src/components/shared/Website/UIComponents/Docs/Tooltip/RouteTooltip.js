import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  tooltipSections,
  tooltipContent,
} from "./../../constants/Tooltip";

function RouteTooltip() {
  return (
    <DocPage
      content={tooltipContent}
      sections={tooltipSections}
      title="Tooltip"
      description="Tooltips provide helpful text when users hover, focus, or tap on elements."
    />
  );
}

export default RouteTooltip;
