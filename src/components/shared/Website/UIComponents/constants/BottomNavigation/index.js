import {
  View as BasicBottomNavigationView,
  source as BasicBottomNavigationSrc,
} from "./../../../UIComponents/Docs/BottomNavigation/BasicBottomNavigation";
import {
  View as WithNoLabelView,
  source as WithNoLabelSrc,
} from "./../../../UIComponents/Docs/BottomNavigation/WithNoLabel";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/BottomNavigation/Customization";
import { bottomNavigationActionProps, bottomNavigationProps } from "../../Api/PropsApi/constants";

export const bottomNavigationContent = [
  { label: "#Basic Navigation", href: "#basic-navigation" },
  { label: "#Label-Free Nav", href: "#label-free-nav" },
  { label: "#Custom Styles", href: "#custom-styles" },
  { label: "<BottomNavigation />", href: "#bottom-navigation-api" },
  {
    label: "<BottomNavigationAction />",
    href: "#bottom-navigation-action-api",
  },
];

export const bottomNavigationSections = [
  {
    id: "basic-navigation",
    title: "#Basic Navigation",
    subtitle: null,
    source: BasicBottomNavigationSrc,
    view: BasicBottomNavigationView,
  },
  {
    id: "label-free-nav",
    title: "#Label-Free Nav",
    subtitle: "Display label only for active action.",
    source: WithNoLabelSrc,
    view: WithNoLabelView,
  },
  {
    id: "custom-styles",
    title: "#Custom Styles",
    subtitle: null,
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "bottom-navigation-api",
    title: "<BottomNavigation />",
    isApi: true,
    componentProps: bottomNavigationProps,
  },
  {
    id: "bottom-navigation-action-api",
    title: "<BottomNavigationAction />",
    isApi: true,
    componentProps: bottomNavigationActionProps,
  },
];
