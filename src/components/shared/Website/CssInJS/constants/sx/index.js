import {
  View as InteractiveCardView,
  source as InteractiveCardSrc,
} from "./../../../CssInJS/Docs/sx/Usage/InteractiveCard";
import {
  View as BreakpointsView,
  source as BreakpointsSrc,
} from "./../../../CssInJS/Docs/sx/Usage/Breakpoints";
import {
  View as ConditionalStylesView,
  source as ConditionalStylesSrc,
} from "./../../../CssInJS/Docs/sx/Usage/ConditionalStyles";
import {
  View as DynamicStylesView,
  source as DynamicStylesSrc,
} from "./../../../CssInJS/Docs/sx/Usage/DynamicStyles";
import {
  View as DynamicGridView,
  source as DynamicGridSrc,
} from "./../../../CssInJS/Docs/sx/Usage/DynamicGrid";
import {
  View as ColorSwapView,
  source as ColorSwapSrc,
} from "./../../../CssInJS/Docs/sx/Usage/ColorSwap";
import {
  View as ComplexLayoutView,
  source as ComplexLayoutSrc,
} from "./../../../CssInJS/Docs/sx/Usage/ComplexLayout";
import {
  View as ResponsiveGridGalleryView,
  source as ResponsiveGridGallerySrc,
} from "./../../../CssInJS/Docs/sx/Usage/ResponsiveGridGallery";

export const sxContent = [
  { label: "#Interactive View", href: "#interactive-view" },
  { label: "#Style Breakpoints", href: "#style-breakpoints" },
  { label: "#Conditional Styles", href: "#conditional-styles" },
  { label: "#Dynamic Effects", href: "#dynamic-effects" },
];

export const sxSections = [
  {
    id: "interactive-view",
    title: "#Interactive View",
    subtitle: "An interactive card with hover effects and animations.",
    source: InteractiveCardSrc,
    view: InteractiveCardView,
  },
  {
    id: "style-breakpoints",
    title: "#Style Breakpoints",
    subtitle: "Applies styles that adjust across screen sizes.",
    source: BreakpointsSrc,
    view: BreakpointsView,
  },
  {
    id: "conditional-styles",
    title: "#Conditional Styles",
    subtitle: "Styles that change based on certain conditions.",
    source: ConditionalStylesSrc,
    view: ConditionalStylesView,
  },
  {
    id: "dynamic-effects",
    title: "#Dynamic Effects",
    subtitle: "Adds styles that change dynamically on interaction.",
    source: DynamicStylesSrc,
    view: DynamicStylesView,
  },
  {
    id: "adaptive-grid",
    title: "#Adaptive Grid",
    subtitle: "Grid with styles that adapt to screen layout changes.",
    source: DynamicGridSrc,
    view: DynamicGridView,
  },
  {
    id: "theme-swap",
    title: "#Theme Swap",
    subtitle: "Swaps colors dynamically based on theme changes.",
    source: ColorSwapSrc,
    view: ColorSwapView,
  },
  {
    id: "layered-layout",
    title: "#Layered Layout",
    subtitle: "Complex layout with multiple style layers.",
    source: ComplexLayoutSrc,
    view: ComplexLayoutView,
  },
  {
    id: "grid-gallery",
    title: "#Grid Gallery",
    subtitle: "A responsive gallery layout with grid styling.",
    source: ResponsiveGridGallerySrc,
    view: ResponsiveGridGalleryView,
  },
];

