import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  tabsSections,
  tabsContent,
} from "./../../constants/Tabs";

function RouteTabs() {
  return (
    <DocPage
      content={tabsContent}
      sections={tabsSections}
      title="Tabs"
      description="Tabs simplify navigation and allow quick switching between multiple views or sections."
    />
  );
}

export default RouteTabs;
