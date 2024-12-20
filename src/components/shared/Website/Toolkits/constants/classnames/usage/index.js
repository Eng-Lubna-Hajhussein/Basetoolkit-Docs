import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../../Toolkits/Docs/classnames/Usage/BasicUsage";
import {
  View as ArrayHandlingView,
  source as ArrayHandlingSrc,
} from "./../../../../Toolkits/Docs/classnames/Usage/ArrayHandling";
import {
  View as ConditionalClassesView,
  source as ConditionalClassesSrc,
} from "./../../../../Toolkits/Docs/classnames/Usage/ConditionalClasses";
import {
  View as NestedArraysView,
  source as NestedArraysSrc,
} from "./../../../../Toolkits/Docs/classnames/Usage/NestedArrays";
import {
  View as MixedArgumentsView,
  source as MixedArgumentsSrc,
} from "./../../../../Toolkits/Docs/classnames/Usage/MixedArguments";
import {
  View as ImportSyntaxView,
  source as ImportSyntaxSrc,
} from "./../../../../Toolkits/Docs/classnames/ImportSyntax/Syntax";

export const classnamesContent = [
  { label: "#Import Syntax", href: "#import-syntax" },
  { label: "#Basic Usage", href: "#basic-usage" },
  { label: "#Array Handling", href: "#array-handling" },
  { label: "#Conditional Classes", href: "#conditional-classes" },
  { label: "#Nested Arrays", href: "#nested-arrays" },
  { label: "#Mixed Arguments", href: "#mixed-arguments" },
];

export const classnamesSections = [
  {
    id: "import-syntax",
    title: "#Import Syntax",
    subtitle: null,
    source: ImportSyntaxSrc,
    view: ImportSyntaxView,
  },
  {
    id: "basic-usage",
    title: "#Basic Usage",
    subtitle:
      "This example demonstrates how classnames handles strings and numbers, concatenating them into a valid class string while ignoring falsy values like null and false.",
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "array-handling",
    title: "#Array Handling",
    subtitle:
      "In this example, classnames processes an array of class names, including only the truthy values and ignoring any null, undefined, or false entries.",
    source: ArrayHandlingSrc,
    view: ArrayHandlingView,
  },
  {
    id: "conditional-classes",
    title: "#Conditional Classes",
    subtitle:
      "This example shows how classnames handles an object with keys representing class names. Only the keys with truthy values are included in the final class string.",
    source: ConditionalClassesSrc,
    view: ConditionalClassesView,
  },
  {
    id: "nested-arrays",
    title: "#Nested Arrays",
    subtitle:
      "This example shows how classnames handles nested arrays, flattening them into a single class string while ignoring any falsy values found inside the arrays.",
    source: NestedArraysSrc,
    view: NestedArraysView,
  },
  {
    id: "mixed-arguments",
    title: "#Mixed Arguments",
    subtitle:
      "In this example, classnames handles a combination of strings, numbers, arrays, and objects, concatenating valid classes while skipping falsy values.",
    source: MixedArgumentsSrc,
    view: MixedArgumentsView,
  },
];
