import {
  View as BasicExampleView,
  source as BasicExampleSrc,
} from "./../../../CssInJS/Docs/cssInjection/Usage/BasicExample";
import {
  View as ThemingUsageView,
  source as ThemingUsageSrc,
} from "./../../../CssInJS/Docs/cssInjection/Usage/ThemingUsage";
import {
  View as DynamicStylingView,
  source as DynamicStylingSrc,
} from "./../../../CssInJS/Docs/cssInjection/Usage/DynamicStyling";
import {
  View as ShouldForwardPropView,
  source as ShouldForwardPropSrc,
} from "./../../../CssInJS/Docs/cssInjection/Usage/ShouldForwardProp";
import { View as VariantsView, source as VariantsSrc } from "./../../../CssInJS/Docs/cssInjection/Usage/Variants";
import {
  View as UILibrariesView,
  source as UILibrariesSrc,
} from "./../../../CssInJS/Docs/cssInjection/Usage/UILibraries";
import {
  View as WithKeyframesView,
  source as WithKeyframesSrc,
} from "./../../../CssInJS/Docs/cssInjection/Usage/WithKeyframes";
import {
  View as AdvancedUsageView,
  source as AdvancedUsageSrc,
} from "./../../../CssInJS/Docs/cssInjection/Usage/AdvancedUsage";

export const cssInjectionContent = [
  { label: "#Basic Example", href: "#basic-example" },
  { label: "#Theming Usage", href: "#theming-usage" },
  { label: "#Dynamic Styling", href: "#dynamic-styling" },
  { label: "#UI Libraries", href: "#ui-libraries" },
  { label: "#Should Forward Prop", href: "#should-forward-prop" },
  { label: "#Variants Array", href: "#variants-array" },
  { label: "#Keyframe Animations", href: "#keyframe-animations" },
  { label: "#Card Styles", href: "#card-styles" },
];

export const cssInjectionSections = [
  {
    id: "basic-example",
    title: "#Basic Example",
    subtitle: "Demonstrates foundational usage of CSS injection.",
    source: BasicExampleSrc,
    view: BasicExampleView,
  },
  {
    id: "theming-usage",
    title: "#Theming Usage",
    subtitle: "Shows custom theming integration within styling.",
    source: ThemingUsageSrc,
    view: ThemingUsageView,
  },
  {
    id: "dynamic-styling",
    title: "#Dynamic Styling",
    subtitle: "Uses dynamic props to modify styling in real-time.",
    source: DynamicStylingSrc,
    view: DynamicStylingView,
  },
  {
    id: "ui-libraries",
    title: "#UI Libraries",
    subtitle: "Demonstrates seamless CSS injection with UI components.",
    source: UILibrariesSrc,
    view: UILibrariesView,
  },
  {
    id: "should-forward-prop",
    title: "#Should Forward Prop",
    subtitle:
      "Controls which props should or shouldn’t be passed to the underlying DOM element for cleaner HTML output.",
    source: ShouldForwardPropSrc,
    view: ShouldForwardPropView,
  },
  {
    id: "variants-array",
    title: "#Variants Array",
    subtitle:"The variants array is especially useful for components that require multiple, distinct visual styles based on a specific set of props.",
    source: VariantsSrc,
    view: VariantsView,
  },
  {
    id: "keyframe-animations",
    title: "#Keyframe Animations",
    subtitle: "Displays animations with custom keyframes.",
    source: WithKeyframesSrc,
    view: WithKeyframesView,
  },
  {
    id: "card-styles",
    title: "#Card Styles",
    subtitle: "Showcases advanced styling patterns for card components.",
    source: AdvancedUsageSrc,
    view: AdvancedUsageView,
  },
];
