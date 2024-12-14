import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  popperSections,
  popperContent,
} from "./../../constants/Popper";

function RoutePopper() {
  return (
    <DocPage
      content={popperContent}
      sections={popperSections}
      title="Popper"
      description="The Popper component shows content above other elements and provides an alternative to react-popper."
    />
  );
}

export default RoutePopper;
