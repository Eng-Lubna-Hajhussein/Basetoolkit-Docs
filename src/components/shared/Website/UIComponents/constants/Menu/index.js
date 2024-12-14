import {
  View as BasicMenuView,
  source as BasicMenuSrc,
} from "./../../../UIComponents/Docs/Menu/BasicMenu";
import {
  View as IconMenuView,
  source as IconMenuSrc,
} from "./../../../UIComponents/Docs/Menu/IconMenu";
import {
  View as DenseMenuView,
  source as DenseMenuSrc,
} from "./../../../UIComponents/Docs/Menu/DenseMenu";
import {
  View as PositionedMenuView,
  source as PositionedMenuSrc,
} from "./../../../UIComponents/Docs/Menu/PositionedMenu";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Menu/Customization";
import {
  View as MaxHeightMenuView,
  source as MaxHeightMenuSrc,
} from "./../../../UIComponents/Docs/Menu/MaxHeightMenu";
import {
  View as ContextMenuView,
  source as ContextMenuSrc,
} from "./../../../UIComponents/Docs/Menu/ContextMenu";
import {
  View as SelectedMenuView,
  source as SelectedMenuSrc,
} from "./../../../UIComponents/Docs/Menu/SelectedMenu";
import {
  menuItemProps,
  menuListProps,
  menuProps,
} from "../../Api/PropsApi/constants";

export const menuContent = [
  { label: "#Basic Menu", href: "#basic-menu" },
  { label: "#Icon-Based Menu", href: "#icon-menu" },
  { label: "#Compact Menu", href: "#dense-menu" },
  { label: "#Menu with Selection", href: "#selected-menu" },
  { label: "#Custom Positioning", href: "#positioned-menu" },
  { label: "#Menu Customization", href: "#customization" },
  { label: "#Scrollable Menu", href: "#max-height-menu" },
  { label: "#Contextual Menu", href: "#context-menu" },
  { label: "<Menu />", href: "#menu-api" },
  { label: "<MenuItem />", href: "#menu-item-api" },
  { label: "<MenuList />", href: "#menu-list-api" },
];

export const menuSections = [
  {
    id: "basic-menu",
    title: "#Basic Menu",
    subtitle:
      "This example shows a default menu opening over the anchor point.",
    source: BasicMenuSrc,
    view: BasicMenuView,
  },
  {
    id: "icon-menu",
    title: "#Icon-Based Menu",
    subtitle:
      "In desktop view, extra padding gives more space around the menu items.",
    source: IconMenuSrc,
    view: IconMenuView,
  },
  {
    id: "dense-menu",
    title: "#Compact Menu",
    subtitle:
      "Use the dense prop to minimize padding and text size for longer menus.",
    source: DenseMenuSrc,
    view: DenseMenuView,
  },
  {
    id: "selected-menu",
    title: "#Menu with Selection",
    subtitle: `The selected prop (from ListItem) sets the initial focus to the selected item. Use "menu" variant for no initial focus impact.`,
    source: SelectedMenuSrc,
    view: SelectedMenuView,
  },
  {
    id: "positioned-menu",
    title: "#Custom Positioning",
    subtitle: "Position the menu at specific locations around the anchor.",
    source: PositionedMenuSrc,
    view: PositionedMenuView,
  },
  {
    id: "customization",
    title: "#Menu Customization",
    subtitle: "Example of customizing the appearance of the menu.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "max-height-menu",
    title: "#Scrollable Menu",
    subtitle:
      "The menu can scroll internally when items exceed the available height.",
    source: MaxHeightMenuSrc,
    view: MaxHeightMenuView,
  },
  {
    id: "context-menu",
    title: "#Contextual Menu",
    subtitle: "An example of a context menu triggered by right-clicking.",
    source: ContextMenuSrc,
    view: ContextMenuView,
  },
  {
    id: "menu-api",
    title: "<Menu />",
    isApi: true,
    componentProps: menuProps,
  },
  {
    id: "menu-item-api",
    title: "<MenuItem />",
    isApi: true,
    componentProps: menuItemProps,
  },
  {
    id: "menu-list-api",
    title: "<MenuList />",
    isApi: true,
    componentProps: menuListProps,
  },
];
