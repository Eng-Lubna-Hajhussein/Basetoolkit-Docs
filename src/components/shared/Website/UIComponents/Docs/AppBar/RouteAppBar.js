import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  appBarSections,
  appBarContent,
} from "./../../constants/AppBar";

function RouteAppBar() {
  return (
    <DocPage
      content={appBarContent}
      sections={appBarSections}
      title="AppBar"
      description="The App Bar provides context and actions relevant to the current view, helping users navigate and interact with the app's content."
    />
  );
}

export default RouteAppBar;
