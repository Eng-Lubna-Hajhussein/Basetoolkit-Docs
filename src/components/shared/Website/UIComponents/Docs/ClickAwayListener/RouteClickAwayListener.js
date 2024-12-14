import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  clickAwayListenerSections,
  clickAwayListenerContent,
} from "./../../constants/ClickAwayListener";

function RouteClickAwayListener() {
  return (
    <DocPage
      content={clickAwayListenerContent}
      sections={clickAwayListenerSections}
      title="ClickAwayListener"
      description="The Click-Away Listener component monitors clicks that occur outside its child element."
    />
  );
}

export default RouteClickAwayListener;
