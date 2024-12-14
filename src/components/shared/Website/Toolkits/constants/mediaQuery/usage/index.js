import {
  View as MediaQueryView,
  source as MediaQuerySrc,
} from "./../../../../Toolkits/Docs/mediaquery/Usage/MediaQuery";
import {
  View as MediaQueryMatchView,
  source as MediaQueryMatchSrc,
} from "./../../../../Toolkits/Docs/mediaquery/Usage/MediaQueryMatch";
import {
  View as ThemeUsageView,
  source as ThemeUsageSrc,
} from "./../../../../Toolkits/Docs/mediaquery/Usage/ThemeUsage";
import {
  View as MediaQueryGeneratorView,
  source as MediaQueryGeneratorSrc,
} from "./../../../../Toolkits/Docs/mediaquery/Usage/MediaQueryGenerator";

export const mediaqueryContent = [
  { label: "#useMediaQuery", href: "#useMediaQuery" },
  { label: "#useMediaQueryMatch", href: "#useMediaQueryMatch" },
  { label: "#Generating Media Query", href: "#generating-media-query" },
  { label: "#Theme Usage", href: "#theming-usage" },
];

export const mediaquerySections = [
  {
    id: "useMediaQuery",
    title: "#useMediaQuery",
    subtitle:
      "This hook returns the current media query type (xs, sm, md, lg, xl) based on the screen width and the theme's breakpoints. It allows you to easily determine which breakpoint the screen is currently in.",
    source: MediaQuerySrc,
    view: MediaQueryView,
  },
  {
    id: "useMediaQueryMatch",
    title: "#useMediaQueryMatch",
    subtitle:
      "This hook allows you to check if a custom media query is currently matched. It returns true or false depending on whether the media query matches the current screen size.",
    source: MediaQueryMatchSrc,
    view: MediaQueryMatchView,
  },
  {
    id: "generating-media-query",
    title: "#Generating Media Query",
    subtitle: "Use Basetoolkit theme to generate media query easily.",
    source: MediaQueryGeneratorSrc,
    view: MediaQueryGeneratorView,
  },

  {
    id: "theming-usage",
    title: "#Theme Usage",
    subtitle: `This example leverages the Basetoolkit theme to generate custom media queries, such as detecting whether the screen is in "mobile" or "desktop" view based on the theme’s breakpoints.`,
    source: ThemeUsageSrc,
    view: ThemeUsageView,
  },
];
