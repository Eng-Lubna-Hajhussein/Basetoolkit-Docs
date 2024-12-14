import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  classnamesSections,
  classnamesContent,
} from "./../../../constants/classnames/usage";

function RouteUsage() {
  return (
    <DocPage
      content={classnamesContent}
      sections={classnamesSections}
      title="classnames"
      description={`The classnames function creates a single string of CSS class names by combining various input types—strings, numbers, arrays, and objects—while ignoring falsy values like null, undefined, and false. It directly adds truthy strings and numbers, flattens nested arrays, and includes object keys with truthy values, enabling easy dynamic class management in JSX.`}
    />
  );
}

export default RouteUsage;
