import {
  View as TemporaryDrawerView,
  source as TemporaryDrawerSrc,
} from "./../../../UIComponents/Docs/Drawer/TemporaryDrawer";
import {
  View as AnchorView,
  source as AnchorSrc,
} from "./../../../UIComponents/Docs/Drawer/Anchor";
import {
  View as SwipeableView,
  source as SwipeableSrc,
} from "./../../../UIComponents/Docs/Drawer/Swipeable";
import {
  drawerProps,
  swipeableDrawerProps,
} from "../../Api/PropsApi/constants";

export const drawerContent = [
  { label: "#Temporary Drawer", href: "#temporary-drawer" },
  { label: "#Drawer Anchor", href: "#drawer-anchor" },
  { label: "#Swipeable Drawer", href: "#swipeable-drawer" },
  { label: "<Drawer />", href: "#drawer-api" },
  { label: "<SwipeableDrawer />", href: "#swipeable-drawer-api" },
];

export const drawerSections = [
  {
    id: "temporary-drawer",
    title: "#Temporary Drawer",
    subtitle:
      "A temporary drawer overlays content until a section is chosen. It can close via the overlay or Esc key, with the open prop managing visibility.",
    source: TemporaryDrawerSrc,
    view: TemporaryDrawerView,
  },
  {
    id: "drawer-anchor",
    title: "#Drawer Anchor",
    subtitle:
      "Specify the drawer's side with the anchor prop. The default setting is left.",
    source: AnchorSrc,
    view: AnchorView,
  },
  {
    id: "swipeable-drawer",
    title: "#Swipeable Drawer",
    subtitle:
      "Enable swipe gestures by using the SwipeableDrawer component for the drawer.",
    source: SwipeableSrc,
    view: SwipeableView,
  },
  {
    id: "drawer-api",
    title: "<Drawer />",
    isApi: true,
    componentProps: drawerProps,
  },
  {
    id: "swipeable-drawer-api",
    title: "<SwipeableDrawer />",
    isApi: true,
    componentProps: swipeableDrawerProps,
  },
];
