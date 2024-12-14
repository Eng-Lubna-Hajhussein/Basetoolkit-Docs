import {
  View as FluidView,
  source as FluidSrc,
} from "./../../../UIComponents/Docs/Container/Fluid";
import {
  View as FixedView,
  source as FixedSrc,
} from "./../../../UIComponents/Docs/Container/Fixed";
import { containerProps } from "../../Api/PropsApi/constants";

export const containerContent = [
  { label: "#Basic Box", href: "#basic-box" },
  { label: "#Styled Box", href: "#styled-box" },
  { label: "<Container />", href: "#container-api" },
];

export const containerSections = [
  {
    id: "fluid",
    title: "#Fluid",
    subtitle: "A fluid container width is bounded by the maxWidth prop value.",
    source: FluidSrc,
    view: FluidView,
  },
  {
    id: "fixed",
    title: "#Fixed",
    subtitle:
      "If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed prop. The max-width matches the min-width of the current breakpoint.",
    source: FixedSrc,
    view: FixedView,
  },
  {
    id: "container-api",
    title: "<Container />",
    isApi: true,
    componentProps: containerProps,
  },
];
