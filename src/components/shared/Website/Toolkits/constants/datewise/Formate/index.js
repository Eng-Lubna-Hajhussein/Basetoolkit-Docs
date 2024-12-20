import {
  View as UsageExampleView,
  source as UsageExampleSrc,
} from "./../../../../Toolkits/Docs/datewise/Formate/UsageExample";
import {
  View as ImportSyntaxView,
  source as ImportSyntaxSrc,
} from "./../../../../Toolkits/Docs/datewise/ImportSyntax/Syntax";

export const formateContent = [
  { label: "#Import Syntax", href: "#import-syntax" },
  { label: "#Usage Example", href: "#usage-example" },
];

export const formateSections = [
  {
    id: "import-syntax",
    title: "#Import Syntax",
    subtitle: null,
    source: ImportSyntaxSrc,
    view: ImportSyntaxView,
  },
  {
    id: "usage-example",
    title: "#Usage Example",
    subtitle: null,
    source: UsageExampleSrc,
    view: UsageExampleView,
  },
];
