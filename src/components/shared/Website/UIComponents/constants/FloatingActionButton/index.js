import {
  View as BasicActionsView,
  source as BasicActionsSrc,
} from "./../../../UIComponents/Docs/FloatingActionButton/BasicActions";
import {
  View as SizeVariationsView,
  source as SizeVariationsSrc,
} from "./../../../UIComponents/Docs/FloatingActionButton/SizeVariations";
import {
  View as ExtendedButtonSizesView,
  source as ExtendedButtonSizesSrc,
} from "./../../../UIComponents/Docs/FloatingActionButton/ExtendedButtonSizes";
import {
  View as TabbedAnimatedActionsView,
  source as TabbedAnimatedActionsSrc,
} from "./../../../UIComponents/Docs/FloatingActionButton/TabbedAnimatedActions";
import { fabProps } from "../../Api/PropsApi/constants";

export const floatingActionButtonContent = [
  { label: "#Basic Actions", href: "#basic-actions" },
  { label: "#Size Variations", href: "#size-variations" },
  { label: "#Extended Button Sizes", href: "#extended-button-sizes" },
  { label: "#Tabbed Animated Actions", href: "#tabbed-animated-actions" },
  { label: "<Fab />", href: "#fab-api" },
];


export const floatingActionButtonSections = [
  {
    id: "basic-actions",
    title: "#Basic Actions",
    subtitle:
      "Showcasing primary and secondary action buttons along with an extended button for navigation.",
    source: BasicActionsSrc,
    view: BasicActionsView,
  },
  {
    id: "size-variations",
    title: "#Size Variations",
    subtitle:
      "Demonstrating small, medium, and large sizes for Floating Action Buttons.",
    source: SizeVariationsSrc,
    view: SizeVariationsView,
  },
  {
    id: "extended-button-sizes",
    title: "#Extended Button Sizes",
    subtitle:
      "Different sizes of extended FABs for a prominent navigation button.",
    source: ExtendedButtonSizesSrc,
    view: ExtendedButtonSizesView,
  },
  {
    id: "tabbed-animated-actions",
    title: "#Tabbed Animated Actions",
    subtitle:
      "A tab-based layout with animated FABs that appear based on the selected tab.",
    source: TabbedAnimatedActionsSrc,
    view: TabbedAnimatedActionsView,
  },
  {
    id: "fab-api",
    title: "<Fab />",
    isApi: true,
    componentProps: fabProps,
  },
];
