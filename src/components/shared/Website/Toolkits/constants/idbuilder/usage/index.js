import {
  View as ID128BitView,
  source as ID128BitSrc,
} from "./../../../../Toolkits/Docs/idbuilder/Usage/ID128Bit";
import {
  View as ID8DigitView,
  source as ID8DigitSrc,
} from "./../../../../Toolkits/Docs/idbuilder/Usage/ID8Digit";

export const idbuilderContent = [
  { label: "#128-Bit Generator", href: "#128-bit-generator" },
  { label: "#8-Digit Generator", href: "#8-digit-generator" },
];

export const idbuilderSections = [
  {
    id: "128-bit-generator",
    title: "#128-bit Generator",
    subtitle:
      "This generator ensures global uniqueness by maintaining internal state via closures, suitable for both client-side and server-side environments that require consistent, collision-free ID generation.",
    source: ID128BitSrc,
    view: ID128BitView,
  },
  {
    id: "8-digit-generator",
    title: "#8-Digit Generator",
    subtitle:
      "This generator maintains uniqueness within its module, ensuring efficient, short-format ID generation, adaptable for backend processes or frontend components, ideal for high-throughput systems that require distinct numerical identifiers.",
    source: ID8DigitSrc,
    view: ID8DigitView,
  },
];
