import {
  View as BasicExampleView,
  source as BasicExampleSrc,
} from "./../../../CssInJS/Docs/useCssClass/Usage/BasicExample";
import {
  View as ThemingUsageView,
  source as ThemingUsageSrc,
} from "./../../../CssInJS/Docs/useCssClass/Usage/ThemingUsage";
import {
  View as ResponsiveStylesView,
  source as ResponsiveStylesSrc,
} from "./../../../CssInJS/Docs/useCssClass/Usage/ResponsiveStyles";
import {
  View as DynamicStylesView,
  source as DynamicStylesSrc,
} from "./../../../CssInJS/Docs/useCssClass/Usage/DynamicStyles";
import {
  View as WithKeyframesView,
  source as WithKeyframesSrc,
} from "./../../../CssInJS/Docs/useCssClass/Usage/WithKeyframes";
import {
  View as UILibrariesView,
  source as UILibrariesSrc,
} from "./../../../CssInJS/Docs/useCssClass/Usage/UILibraries";

export const contentUseCSSClass = [
  { label: "#Basic Styling", href: "#basic-styling" },
  { label: "#Nested Classes & Themes", href: "#nested-classes-themes" },
  { label: "#Responsive States", href: "#responsive-states" },
  { label: "#Dynamic Effects", href: "#dynamic-effects" },
  { label: "#Keyframe Animation", href: "#keyframe-animation" },
  { label: "#UI Library Support", href: "#ui-library-support" },
];

export const sectionsUseCSSClass = [
  {
    id: "basic-styling",
    title: "#Basic Styling",
    subtitle: "Applies multiple classes in different scopes using useCSSClass.",
    source: BasicExampleSrc,
    view: BasicExampleView,
  },
  {
    id: "nested-classes-themes",
    title: "#Nested Classes & Themes",
    subtitle: "Shows theme-aware styling with nested classes for complex effects.",
    source: ThemingUsageSrc,
    view: ThemingUsageView,
  },
  {
    id: "responsive-states",
    title: "#Responsive States",
    subtitle: "Demonstrates responsive styles and :hover pseudo-classes for screens.",
    source: ResponsiveStylesSrc,
    view: ResponsiveStylesView,
  },
  {
    id: "dynamic-effects",
    title: "#Dynamic Effects",
    subtitle: "Showcases dynamic styles with transitions on interaction.",
    source: DynamicStylesSrc,
    view: DynamicStylesView,
  },
  {
    id: "keyframe-animation",
    title: "#Keyframe Animation",
    subtitle: "Uses keyframes, pseudo-classes, and responsive styling together.",
    source: WithKeyframesSrc,
    view: WithKeyframesView,
  },
  {
    id: "ui-library-support",
    title: "#UI Library Support",
    subtitle: "Integrates useCSSClass with UI libraries for cohesive styling.",
    source: UILibrariesSrc,
    view: UILibrariesView,
  },
];

