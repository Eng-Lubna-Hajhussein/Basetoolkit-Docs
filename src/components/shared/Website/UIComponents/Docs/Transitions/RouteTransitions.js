import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  transitionsSections,
  transitionsContent,
} from "./../../constants/Transitions";

function RouteTransitions() {
  return (
    <DocPage
      content={transitionsContent}
      sections={transitionsSections}
      title="Transitions"
      description="Transitions add expressiveness to a UI, enhancing usability and creating a smoother experience."
    />
  );
}

export default RouteTransitions;
