import {
  View as BasicDividerView,
  source as BasicDividerSrc,
} from "./../../../UIComponents/Docs/Divider/BasicDivider";
import {
  View as VariantsView,
  source as VariantsSrc,
} from "./../../../UIComponents/Docs/Divider/Variants";
import {
  View as OrientationView,
  source as OrientationSrc,
} from "./../../../UIComponents/Docs/Divider/Orientation";
import {
  View as FlexItemView,
  source as FlexItemSrc,
} from "./../../../UIComponents/Docs/Divider/FlexItem";
import {
  View as UseWithAListView,
  source as UseWithAListSrc,
} from "./../../../UIComponents/Docs/Divider/UseWithAList";
import {
  View as IconGroupingView,
  source as IconGroupingSrc,
} from "./../../../UIComponents/Docs/Divider/IconGrouping";
import { dividerProps } from "../../Api/PropsApi/constants";

export const dividerContent = [
  { label: "#Standard Divider", href: "#standard-divider" },
  { label: "#Divider Variants", href: "#divider-variants" },
  { label: "#Vertical Layout", href: "#vertical-layout" },
  { label: "#Flexible Divider", href: "#flexible-divider" },
  { label: "#List Divider", href: "#list-divider" },
  { label: "#Icons and Divider", href: "#icons-and-divider" },
  { label: "<Divider />", href: "#divider-api" },
];

export const dividerSections = [
  {
    id: "standard-divider",
    title: "#Standard Divider",
    subtitle: "Basic usage for separating content with lines.",
    source: BasicDividerSrc,
    view: BasicDividerView,
  },
  {
    id: "divider-variants",
    title: "#Divider Variants",
    subtitle: "Options include full width, inset, and middle styles.",
    source: VariantsSrc,
    view: VariantsView,
  },
  {
    id: "vertical-layout",
    title: "#Vertical Layout",
    subtitle: "Switch to vertical orientation using the orientation prop.",
    source: OrientationSrc,
    view: OrientationView,
  },
  {
    id: "flexible-divider",
    title: "#Flexible Divider",
    subtitle: "Use flexItem prop for flexible container layouts.",
    source: FlexItemSrc,
    view: FlexItemView,
  },
  {
    id: "list-divider",
    title: "#List Divider",
    subtitle: "Render Divider as <li> to separate List items.",
    source: UseWithAListSrc,
    view: UseWithAListView,
  },
  {
    id: "icons-and-divider",
    title: "#Icons and Divider",
    subtitle: "Combine middle variant with vertical orientation.",
    source: IconGroupingSrc,
    view: IconGroupingView,
  },
  {
    id: "divider-api",
    title: "<Divider />",
    isApi: true,
    componentProps: dividerProps,
  },
];
