import {
  View as BasicGridView,
  source as BasicGridSrc,
} from "./../../../UIComponents/Docs/Grid/BasicGrid";
import {
  View as MultipleBreakpointsView,
  source as MultipleBreakpointsSrc,
} from "./../../../UIComponents/Docs/Grid/MultipleBreakpoints";
import {
  View as SpacingView,
  source as SpacingSrc,
} from "./../../../UIComponents/Docs/Grid/Spacing";
import {
  View as RowAndColumnSpacingView,
  source as RowAndColumnSpacingSrc,
} from "./../../../UIComponents/Docs/Grid/RowAndColumnSpacing";
import {
  View as ResponsiveValuesView,
  source as ResponsiveValuesSrc,
} from "./../../../UIComponents/Docs/Grid/ResponsiveValues";
import {
  View as ComplexLayoutView,
  source as ComplexLayoutSrc,
} from "./../../../UIComponents/Docs/Grid/ComplexLayout";
import {
  View as InteractiveView,
  source as InteractiveSrc,
} from "./../../../UIComponents/Docs/Grid/Interactive";
import { gridProps } from "../../Api/PropsApi/constants";

export const gridContent = [
  { label: "#Basic Grid", href: "#basic-grid" },
  { label: "#Multi-Breakpoints", href: "#multi-breakpoints" },
  { label: "#Grid Spacing", href: "#grid-spacing" },
  { label: "#Row and Column Spacing", href: "#row-column-spacing" },
  { label: "#Responsive Grid", href: "#responsive-grid" },
  { label: "#Advanced Layout", href: "#advanced-layout" },
  { label: "#Interactive Grid", href: "#interactive-grid" },
  { label: "<Grid />", href: "#grid-api" },
];

export const gridSections = [
  {
    id: "basic-grid",
    title: "#Basic Grid",
    subtitle:
      "Adjust row and column across breakpoints using integer values from 1 to 12. Values adapt to the layout direction, defining space each component occupies within the grid.",
    source: BasicGridSrc,
    view: BasicGridView,
  },
  {
    id: "multi-breakpoints",
    title: "#Multi-Breakpoints",
    subtitle:
      "Define grid properties across several breakpoints for responsive layouts.",
    source: MultipleBreakpointsSrc,
    view: MultipleBreakpointsView,
  },
  {
    id: "grid-spacing",
    title: "#Grid Spacing",
    subtitle: "Control the spacing between grid items.",
    source: SpacingSrc,
    view: SpacingView,
  },
  {
    id: "row-column-spacing",
    title: "#Row and Column Spacing",
    subtitle: "Set distinct gaps for rows and columns to control grid spacing.",
    source: RowAndColumnSpacingSrc,
    view: RowAndColumnSpacingView,
  },
  {
    id: "responsive-grid",
    title: "#Responsive Grid",
    subtitle:
      "Apply different values at various breakpoints for a responsive design.",
    source: ResponsiveValuesSrc,
    view: ResponsiveValuesView,
  },
  {
    id: "advanced-layout",
    title: "#Advanced Layout",
    subtitle:
      "Create intricate layouts with customized row and column structures.",
    source: ComplexLayoutSrc,
    view: ComplexLayoutView,
  },
  {
    id: "interactive-grid",
    title: "#Interactive Grid",
    subtitle: "Experiment with interactive grid adjustments in this demo.",
    source: InteractiveSrc,
    view: InteractiveView,
  },
  {
    id: "grid-api",
    title: "<Grid />",
    isApi: true,
    componentProps: gridProps,
  },
];
