import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import {
  idbuilderSections,
  idbuilderContent,
} from "./../../../constants/idbuilder/usage";

function RouteUsage() {
  return (
    <DocPage
      content={idbuilderContent}
      sections={idbuilderSections}
      title="idbuilder"
      description={`The idbuilder provides two ID generators: a globally unique 128-bit generator and a compact 8-digit generator. The 128-bit generator guarantees collision-free IDs across environments, while the 8-digit option is efficient for high-throughput applications needing short, unique identifiers.`}
    />
  );
}

export default RouteUsage;
