import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  breadcrumbsSections,
  breadcrumbsContent,
} from "./../../constants/Breadcrumbs";

function RouteBreadcrumbs() {
  return (
    <DocPage
      content={breadcrumbsContent}
      sections={breadcrumbsSections}
      title="Breadcrumbs"
      description="Breadcrumbs offer a navigational trail, showing the page's place within a site's hierarchy and enabling easy navigation to higher-level pages."
    />
  );
}

export default RouteBreadcrumbs;
