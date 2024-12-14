import {
  View as SyntaxView,
  source as SyntaxSrc,
} from "./../../../../Toolkits/Docs/scrollTrigger/Usage/Syntax";
import {
  View as HideAppBarView,
  source as HideAppBarSrc,
} from "./../../../../UIComponents/Docs/AppBar/HideAppBar";
import {
  View as ElevateAppBarView,
  source as ElevateAppBarSrc,
} from "./../../../../UIComponents/Docs/AppBar/ElevateAppBar";
import {
  View as BackToTopView,
  source as BackToTopSrc,
} from "./../../../../UIComponents/Docs/AppBar/BackToTop";

export const scrollTriggerContent = [
  { label: "#Syntax and Usage", href: "#syntax-and-usage" },
  { label: "#Auto-Hide", href: "#auto-hide" },
  { label: "#Scroll Elevation", href: "#scroll-elevation" },
  { label: "#Scroll to Top", href: "#scroll-to-top" },
];

export const scrollTriggerSections = [
  {
    id: "syntax-and-usage",
    title: "#Syntax and Usage",
    subtitle: `The useScrollTrigger hook provides a customizable scroll detection mechanism. You can control the behavior by passing options like disableHysteresis, threshold, and target to define how and when the hook triggers based on vertical scroll. The hook returns a boolean trigger state that becomes true once the specified scroll conditions are met.`,
    source: SyntaxSrc,
    view: SyntaxView,
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
];
