import {
  View as BasicListView,
  source as BasicListSrc,
} from "./../../../UIComponents/Docs/List/BasicList";
import {
  View as NestedListView,
  source as NestedListSrc,
} from "./../../../UIComponents/Docs/List/NestedList";
import {
  View as FolderListView,
  source as FolderListSrc,
} from "./../../../UIComponents/Docs/List/FolderList";
import {
  View as InteractiveView,
  source as InteractiveSrc,
} from "./../../../UIComponents/Docs/List/Interactive";
import {
  View as SelectedListItemView,
  source as SelectedListItemSrc,
} from "./../../../UIComponents/Docs/List/SelectedListItem";
import {
  View as AlignListItemsView,
  source as AlignListItemsSrc,
} from "./../../../UIComponents/Docs/List/AlignListItems";
import {
  View as WithCheckboxView,
  source as WithCheckboxSrc,
} from "./../../../UIComponents/Docs/List/WithCheckbox";
import {
  View as WithAvatarView,
  source as WithAvatarSrc,
} from "./../../../UIComponents/Docs/List/WithAvatar";
import {
  View as SwitchView,
  source as SwitchSrc,
} from "./../../../UIComponents/Docs/List/Switch";
import {
  View as StickySubheaderView,
  source as StickySubheaderSrc,
} from "./../../../UIComponents/Docs/List/StickySubheader";
import {
  View as InsetListItemView,
  source as InsetListItemSrc,
} from "./../../../UIComponents/Docs/List/InsetListItem";
import {
  View as GutterlessListView,
  source as GutterlessListSrc,
} from "./../../../UIComponents/Docs/List/GutterlessList";
import {
  View as VirtualizedListView,
  source as VirtualizedListSrc,
} from "./../../../UIComponents/Docs/List/VirtualizedList";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/List/Customization";
import { listItemAvatarProps, listItemButtonProps, listItemIconProps, listItemProps, listItemTextProps, listProps, listSubheaderProps } from "../../Api/PropsApi/constants";

export const listContent = [
  { label: "#Basic List", href: "#basic-list" },
  { label: "#Nested Items", href: "#nested-items" },
  { label: "#Folder View", href: "#folder-view" },
  { label: "#Interactive Demo", href: "#interactive-demo" },
  { label: "#Selected Item", href: "#selected-item" },
  { label: "#Item Alignment", href: "#item-alignment" },
  { label: "#Checkbox List", href: "#checkbox-list" },
  { label: "#Checkbox & Avatar", href: "#checkbox-avatar" },
  { label: "#Switch List", href: "#switch-list" },
  { label: "#Sticky Headers", href: "#sticky-headers" },
  { label: "#Inset Item", href: "#inset-item" },
  { label: "#No Gutters", href: "#no-gutters" },
  { label: "#Virtual List", href: "#virtual-list" },
  { label: "#Custom Styling", href: "#custom-styling" },
  { label: "<List />", href: "#list-api" },
  { label: "<ListItem />", href: "#list-item-api" },
  { label: "<ListItemAvatar />", href: "#list-item-avatar-api" },
  { label: "<ListItemButton />", href: "#list-item-button-api" },
  { label: "<ListItemIcon />", href: "#list-item-icon-api" },
  { label: "<ListItemText />", href: "#list-item-text-api" },
  { label: "<ListSubheader />", href: "#list-subheader-api" },
];

export const listSections = [
  {
    id: "basic-list",
    title: "#Basic List",
    subtitle: "Basic usage of the list component.",
    source: BasicListSrc,
    view: BasicListView,
  },
  {
    id: "nested-items",
    title: "#Nested Items",
    subtitle: "Example of a nested list structure.",
    source: NestedListSrc,
    view: NestedListView,
  },
  {
    id: "folder-view",
    title: "#Folder View",
    subtitle: "List styled as a folder view.",
    source: FolderListSrc,
    view: FolderListView,
  },
  {
    id: "interactive-demo",
    title: "#Interactive Demo",
    subtitle: "Explore list settings with this interactive example.",
    source: InteractiveSrc,
    view: InteractiveView,
  },
  {
    id: "selected-item",
    title: "#Selected Item",
    subtitle: "Example showcasing a selected list item.",
    source: SelectedListItemSrc,
    view: SelectedListItemView,
  },
  {
    id: "item-alignment",
    title: "#Item Alignment",
    subtitle: "Align items using flex-start for multi-line items.",
    source: AlignListItemsSrc,
    view: AlignListItemsView,
  },
  {
    id: "checkbox-list",
    title: "#Checkbox List",
    subtitle: "List with checkboxes for item selection.",
    source: WithCheckboxSrc,
    view: WithCheckboxView,
  },
  {
    id: "checkbox-avatar",
    title: "#Checkbox & Avatar",
    subtitle: "List items with both checkbox and avatar.",
    source: WithAvatarSrc,
    view: WithAvatarView,
  },
  {
    id: "switch-list",
    title: "#Switch List",
    subtitle: "List items with toggle switches.",
    source: SwitchSrc,
    view: SwitchView,
  },
  {
    id: "sticky-headers",
    title: "#Sticky Headers",
    subtitle: "Subheaders stay fixed while scrolling.",
    source: StickySubheaderSrc,
    view: StickySubheaderView,
  },
  {
    id: "inset-item",
    title: "#Inset Item",
    subtitle: "Align items without leading icons using inset.",
    source: InsetListItemSrc,
    view: InsetListItemView,
  },
  {
    id: "no-gutters",
    title: "#No Gutters",
    subtitle: "Remove gutters in lists within guttered containers.",
    source: GutterlessListSrc,
    view: GutterlessListView,
  },
  {
    id: "virtual-list",
    title: "#Virtual List",
    subtitle: "Efficiently render large lists with virtualization.",
    source: VirtualizedListSrc,
    view: VirtualizedListView,
  },
  {
    id: "custom-styling",
    title: "#Custom Styling",
    subtitle: "Examples of styling customization for lists.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "list-api",
    title: "<List />",
    isApi: true,
    componentProps: listProps,
  },
  {
    id: "list-item-api",
    title: "<ListItem />",
    isApi: true,
    componentProps: listItemProps,
  },
  {
    id: "list-item-avatar-api",
    title: "<ListItemAvatar />",
    isApi: true,
    componentProps: listItemAvatarProps,
  },
  {
    id: "list-item-button-api",
    title: "<ListItemButton />",
    isApi: true,
    componentProps: listItemButtonProps,
  },
  {
    id: "list-item-icon-api",
    title: "<ListItemIcon />",
    isApi: true,
    componentProps: listItemIconProps,
  },
  {
    id: "list-item-text-api",
    title: "<ListItemText />",
    isApi: true,
    componentProps: listItemTextProps,
  },
  {
    id: "list-subheader-api",
    title: "<ListSubheader />",
    isApi: true,
    componentProps: listSubheaderProps,
  },
];
