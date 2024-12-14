import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  textareaAutosizeSections,
  textareaAutosizeContent,
} from "./../../constants/TextareaAutosize";

function RouteTextareaAutosize() {
  return (
    <DocPage
      content={textareaAutosizeContent}
      sections={textareaAutosizeSections}
      title="Textarea Autosize"
      description="The Textarea Autosize component provides a textarea element that expands its height based on the amount of content."
    />
  );
}

export default RouteTextareaAutosize;
