import {
  View as BasicTabsView,
  source as BasicTabsSrc,
} from "./../../../UIComponents/Docs/Tabs/BasicTabs";
import {
  View as WrappedLabelsView,
  source as WrappedLabelsSrc,
} from "./../../../UIComponents/Docs/Tabs/WrappedLabels";
import {
  View as ColoredTabView,
  source as ColoredTabSrc,
} from "./../../../UIComponents/Docs/Tabs/ColoredTab";
import {
  View as DisabledTabView,
  source as DisabledTabSrc,
} from "./../../../UIComponents/Docs/Tabs/DisabledTab";
import {
  View as FullWidthView,
  source as FullWidthSrc,
} from "./../../../UIComponents/Docs/Tabs/FullWidth";
import {
  View as ScrollableTabsView,
  source as ScrollableTabsSrc,
} from "./../../../UIComponents/Docs/Tabs/ScrollableTabs";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Tabs/Customization";
import {
  View as VerticalTabsView,
  source as VerticalTabsSrc,
} from "./../../../UIComponents/Docs/Tabs/VerticalTabs";
import {
  View as IconTabsView,
  source as IconTabsSrc,
} from "./../../../UIComponents/Docs/Tabs/IconTabs";
import {
  View as IconTabsWithLabelsView,
  source as IconTabsWithLabelsSrc,
} from "./../../../UIComponents/Docs/Tabs/IconTabsWithLabels";
import {
  View as IconPositionView,
  source as IconPositionSrc,
} from "./../../../UIComponents/Docs/Tabs/IconPosition";
import { tabProps, tabsProps } from "../../Api/PropsApi/constants";

export const tabsContent = [
  { label: "#Basic Tabs", href: "#basic-tabs" },
  { label: "#Wrapped Labels", href: "#wrapped-labels" },
  { label: "#Colored Tab", href: "#colored-tab" },
  { label: "#Disabled Tab", href: "#disabled-tab" },
  { label: "#Full Width", href: "#full-width" },
  { label: "#Scrollable Tabs", href: "#scrollable-tabs" },
  { label: "#Customization", href: "#customization" },
  { label: "#Vertical Tabs", href: "#vertical-tabs" },
  { label: "#Icon Tabs", href: "#icon-tabs" },
  { label: "#Tabs With Labels", href: "#icon-tabs-with-labels" },
  { label: "#Icon Position", href: "#icon-position" },
  { label: "<Tab />", href: "#tab-api" },
  { label: "<Tabs />", href: "#tabs-api" },
];

export const tabsSections = [
  {
    id: "basic-tabs",
    title: "#Basic Tabs",
    subtitle: null,
    source: BasicTabsSrc,
    view: BasicTabsView,
  },
  {
    id: "wrapped-labels",
    title: "#Wrapped Labels",
    subtitle:
      "Labels automatically wrap to fit on tabs. Longer text will adjust for visibility.",
    source: WrappedLabelsSrc,
    view: WrappedLabelsView,
  },
  {
    id: "colored-tab",
    title: "#Colored Tab",
    subtitle: null,
    source: ColoredTabSrc,
    view: ColoredTabView,
  },
  {
    id: "disabled-tab",
    title: "#Disabled Tab",
    subtitle: null,
    source: DisabledTabSrc,
    view: DisabledTabView,
  },
  {
    id: "full-width",
    title: "#Full Width",
    subtitle: null,
    source: FullWidthSrc,
    view: FullWidthView,
  },
  {
    id: "scrollable-tabs",
    title: "#Scrollable Tabs",
    subtitle: `With variant="scrollable" and scrollButtons="auto", scroll buttons appear when needed.`,
    source: ScrollableTabsSrc,
    view: ScrollableTabsView,
  },
  {
    id: "customization",
    title: "#Customization",
    subtitle: "Example of styling and custom layout adjustments.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "vertical-tabs",
    title: "#Vertical Tabs",
    subtitle: `Set orientation="vertical" for a vertical layout.`,
    source: VerticalTabsSrc,
    view: VerticalTabsView,
  },
  {
    id: "icon-tabs",
    title: "#Icon Tabs",
    subtitle: "Tabs can show all icons or text-only labels.",
    source: IconTabsSrc,
    view: IconTabsView,
  },
  {
    id: "icon-tabs-with-labels",
    title: "#Tabs With Labels",
    subtitle: "Tabs can include both icons and labels.",
    source: IconTabsWithLabelsSrc,
    view: IconTabsWithLabelsView,
  },
  {
    id: "icon-position",
    title: "#Icon Position",
    subtitle:
      "Icons can be positioned at the top, start, end, or bottom of a tab.",
    source: IconPositionSrc,
    view: IconPositionView,
  },
  {
    id: "tab-api",
    title: "<Tab />",
    isApi: true,
    componentProps: tabProps,
  },
  {
    id: "tabs-api",
    title: "<Tabs />",
    isApi: true,
    componentProps: tabsProps,
  },
];
