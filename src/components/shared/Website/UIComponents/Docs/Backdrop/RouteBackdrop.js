import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { backdropSections, backdropContent } from "./../../constants/Backdrop";

function RouteBackdrop() {
  return (
    <DocPage
      content={backdropContent}
      sections={backdropSections}
      title="Backdrop"
      description="The Backdrop component draws attention to a specific element by dimming the surrounding interface."
    />
  );
}

export default RouteBackdrop;
