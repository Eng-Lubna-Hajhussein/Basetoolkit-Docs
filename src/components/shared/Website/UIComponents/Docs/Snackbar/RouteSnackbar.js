import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  snackbarSections,
  snackbarContent,
} from "./../../constants/Snackbar";

function RouteSnackbar() {
  return (
    <DocPage
      content={snackbarContent}
      sections={snackbarSections}
      title="Snackbar"
      description="Snackbars, or toasts, provide short notifications to inform users about completed or ongoing actions."
    />
  );
}

export default RouteSnackbar;
