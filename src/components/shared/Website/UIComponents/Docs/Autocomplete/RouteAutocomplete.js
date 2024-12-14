import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  autocompleteSections,
  autocompleteContent,
} from "./../../constants/Autocomplete";

function RouteAutocomplete() {
  return (
    <DocPage
      content={autocompleteContent}
      sections={autocompleteSections}
      title="Autocomplete"
      description="Autocomplete enhances a standard text input with a dropdown of suggested options."
    />
  );
}

export default RouteAutocomplete;
