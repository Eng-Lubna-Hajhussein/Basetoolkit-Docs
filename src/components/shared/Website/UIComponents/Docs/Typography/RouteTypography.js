import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  typographySections,
  typographyContent,
} from "./../../constants/Typography";

function RouteTypography() {
  return (
    <DocPage
      content={typographyContent}
      sections={typographySections}
      title="Typography"
      description="Typography enhances readability, presenting content in a clear and efficient format."
    />
  );
}

export default RouteTypography;
