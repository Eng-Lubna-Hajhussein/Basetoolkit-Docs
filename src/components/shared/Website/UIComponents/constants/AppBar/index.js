import {
  View as BasicAppBarView,
  source as BasicAppBarSrc,
} from "./../../../UIComponents/Docs/AppBar/BasicAppBar";
import {
  View as AppBarWithMenuView,
  source as AppBarWithMenuSrc,
} from "./../../../UIComponents/Docs/AppBar/AppBarWithMenu";
import {
  View as WithResponsiveMenuView,
  source as WithResponsiveMenuSrc,
} from "./../../../UIComponents/Docs/AppBar/WithResponsiveMenu";
import {
  View as WithSearchFieldView,
  source as WithSearchFieldSrc,
} from "./../../../UIComponents/Docs/AppBar/WithSearchField";
import {
  View as ResponsiveWithDrawerView,
  source as ResponsiveWithDrawerSrc,
} from "./../../../UIComponents/Docs/AppBar/ResponsiveWithDrawer";
import {
  View as WithPrimarySearchFieldView,
  source as WithPrimarySearchFieldSrc,
} from "./../../../UIComponents/Docs/AppBar/WithPrimarySearchField";
import {
  View as DenseAppBarView,
  source as DenseAppBarSrc,
} from "./../../../UIComponents/Docs/AppBar/DenseAppBar";
import {
  View as ProminentView,
  source as ProminentSrc,
} from "./../../../UIComponents/Docs/AppBar/Prominent";
import {
  View as BottomAppBarView,
  source as BottomAppBarSrc,
} from "./../../../UIComponents/Docs/AppBar/BottomAppBar";
import {
  View as HideAppBarView,
  source as HideAppBarSrc,
} from "./../../../UIComponents/Docs/AppBar/HideAppBar";
import {
  View as ElevateAppBarView,
  source as ElevateAppBarSrc,
} from "./../../../UIComponents/Docs/AppBar/ElevateAppBar";
import {
  View as BackToTopView,
  source as BackToTopSrc,
} from "./../../../UIComponents/Docs/AppBar/BackToTop";
import {
  appBarProps,
  menuProps,
  toolbarProps,
} from "../../Api/PropsApi/constants";

export const appBarContent = [
  { label: "#Simple App Bar", href: "#simple-app-bar" },
  { label: "#App Bar Menu", href: "#app-bar-menu" },
  { label: "#Menu", href: "#menu" },
  { label: "#Search Field", href: "#search-field" },
  { label: "#Drawer", href: "#drawer" },
  { label: "#Main Search", href: "#main-search" },
  { label: "#Compact View", href: "#compact-view" },
  { label: "#Highlighted Bar", href: "#highlighted-bar" },
  { label: "#Bottom Position", href: "#bottom-position" },
  { label: "#Auto-Hide", href: "#auto-hide" },
  { label: "#Scroll Elevation", href: "#scroll-elevation" },
  { label: "#Scroll to Top", href: "#scroll-to-top" },
  { label: "<AppBar />", href: "#app-bar-api" },
  { label: "<Menu />", href: "#menu-api" },
  { label: "<Toolbar />", href: "#toolbar-api" },
];

export const appBarSections = [
  {
    id: "simple-app-bar",
    title: "#Simple App Bar",
    subtitle: "A basic app bar for easy navigation.",
    source: BasicAppBarSrc,
    view: BasicAppBarView,
  },
  {
    id: "app-bar-menu",
    title: "#App Bar Menu",
    subtitle: "App bar with an integrated menu.",
    source: AppBarWithMenuSrc,
    view: AppBarWithMenuView,
  },
  {
    id: "menu",
    title: "#Menu",
    subtitle: "App bar with a menu that adjusts to screen size.",
    source: WithResponsiveMenuSrc,
    view: WithResponsiveMenuView,
  },
  {
    id: "search-field",
    title: "#Search Field",
    subtitle: "App bar with a search input field.",
    source: WithSearchFieldSrc,
    view: WithSearchFieldView,
  },
  {
    id: "drawer",
    title: "#Drawer",
    subtitle: "Responsive app bar with drawer functionality.",
    source: ResponsiveWithDrawerSrc,
    view: ResponsiveWithDrawerView,
  },
  {
    id: "main-search",
    title: "#Main Search",
    subtitle: "App bar featuring a prominent search field.",
    source: WithPrimarySearchFieldSrc,
    view: WithPrimarySearchFieldView,
  },
  {
    id: "compact-view",
    title: "#Compact View",
    subtitle: "A dense app bar optimized for desktop.",
    source: DenseAppBarSrc,
    view: DenseAppBarView,
  },
  {
    id: "highlighted-bar",
    title: "#Highlighted Bar",
    subtitle: "An app bar with a prominent design.",
    source: ProminentSrc,
    view: ProminentView,
  },
  {
    id: "bottom-position",
    title: "#Bottom Position",
    subtitle: "App bar positioned at the bottom.",
    source: BottomAppBarSrc,
    view: BottomAppBarView,
  },
  {
    id: "auto-hide",
    title: "#Auto-Hide",
    subtitle:
      "App bar that hides when scrolling down using the useScrollTrigger() hook.",
    source: HideAppBarSrc,
    view: HideAppBarView,
  },
  {
    id: "scroll-elevation",
    title: "#Scroll Elevation",
    subtitle: "App bar gains elevation as you scroll down.",
    source: ElevateAppBarSrc,
    view: ElevateAppBarView,
  },
  {
    id: "scroll-to-top",
    title: "#Scroll to Top",
    subtitle: "A button appears on scroll for easy top navigation.",
    source: BackToTopSrc,
    view: BackToTopView,
  },
  {
    id: "app-bar-api",
    title: "<AppBar />",
    isApi: true,
    componentProps: appBarProps,
  },
  {
    id: "menu-api",
    title: "<Menu />",
    isApi: true,
    componentProps: menuProps,
  },
  {
    id: "toolbar-api",
    title: "<Toolbar />",
    isApi: true,
    componentProps: toolbarProps,
  },
];
