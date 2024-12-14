import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  textfieldSections,
  textfieldContent,
} from "./../../constants/TextField";

function RouteTextField() {
  return (
    <DocPage
      content={textfieldContent}
      sections={textfieldSections}
      title="TextField"
      description="Text fields that allow users to type and modify text content."
    />
  );
}

export default RouteTextField;