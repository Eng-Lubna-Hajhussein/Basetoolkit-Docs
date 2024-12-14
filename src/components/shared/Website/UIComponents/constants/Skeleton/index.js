import {
  View as UsageView,
  source as UsageSrc,
} from "./../../../UIComponents/Docs/Skeleton/Usage";
import {
  View as VariantsView,
  source as VariantsSrc,
} from "./../../../UIComponents/Docs/Skeleton/Variants";
import {
  View as AnimationsView,
  source as AnimationsSrc,
} from "./../../../UIComponents/Docs/Skeleton/Animations";
import {
  View as PulsateExampleView,
  source as PulsateExampleSrc,
} from "./../../../UIComponents/Docs/Skeleton/PulsateExample";
import {
  View as WaveExampleView,
  source as WaveExampleSrc,
} from "./../../../UIComponents/Docs/Skeleton/WaveExample";
import {
  View as InferringDimensionsView,
  source as InferringDimensionsSrc,
} from "./../../../UIComponents/Docs/Skeleton/InferringDimensions";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/Skeleton/Color";
import { skeletonProps } from "../../Api/PropsApi/constants";

export const skeletonContent = [
  { label: "#Usage", href: "#usage" },
  { label: "#Variants Options", href: "#variants-options" },
  { label: "#Animation Styles", href: "#animation-styles" },
  { label: "#Pulsating Style", href: "#pulsating-style" },
  { label: "#Wave Style", href: "#wave-style" },
  { label: "#Auto Dimensions", href: "#auto-dimensions" },
  { label: "#Custom Color", href: "#custom-color" },
  { label: "<Skeleton />", href: "#skeleton-api" },
];

export const skeletonSections = [
  {
    id: "usage",
    title: "#Usage",
    subtitle: "Learn how to apply Skeleton for smoother loading effects.",
    source: UsageSrc,
    view: UsageView,
  },
  {
    id: "variants-options",
    title: "#Variants Options",
    subtitle:
      "Supports text, circular, rectangular, and rounded shapes for diverse layouts.",
    source: VariantsSrc,
    view: VariantsView,
  },
  {
    id: "animation-styles",
    title: "#Animation Styles",
    subtitle: "Skeleton can pulsate by default or be set to wave or static.",
    source: AnimationsSrc,
    view: AnimationsView,
  },
  {
    id: "pulsating-style",
    title: "#Pulsating Style",
    subtitle: "Example of Skeleton with a pulsating effect.",
    source: PulsateExampleSrc,
    view: PulsateExampleView,
  },
  {
    id: "wave-style",
    title: "#Wave Style",
    subtitle: "Example of Skeleton with a wave animation.",
    source: WaveExampleSrc,
    view: WaveExampleView,
  },
  {
    id: "auto-dimensions",
    title: "#Auto Dimensions",
    subtitle: "Skeleton can auto-infer width and height.",
    source: InferringDimensionsSrc,
    view: InferringDimensionsView,
  },
  {
    id: "custom-color",
    title: "#Custom Color",
    subtitle: "Change the background color to suit various backgrounds.",
    source: ColorSrc,
    view: ColorView,
  },
  {
    id: "skeleton-api",
    title: "<Skeleton />",
    isApi: true,
    componentProps: skeletonProps,
  },
];
