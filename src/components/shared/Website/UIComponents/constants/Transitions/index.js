import {
  View as CollapseView,
  source as CollapseSrc,
} from "./../../../UIComponents/Docs/Transitions/Collapse";
import {
  View as FadeView,
  source as FadeSrc,
} from "./../../../UIComponents/Docs/Transitions/Fade";
import {
  View as GrowView,
  source as GrowSrc,
} from "./../../../UIComponents/Docs/Transitions/Grow";
import {
  View as SlideView,
  source as SlideSrc,
} from "./../../../UIComponents/Docs/Transitions/Slide";
import {
  View as ZoomView,
  source as ZoomSrc,
} from "./../../../UIComponents/Docs/Transitions/Zoom";
import {
  View as TransitionGroupView,
  source as TransitionGroupSrc,
} from "./../../../UIComponents/Docs/Transitions/TransitionGroup";
import { collapseProps, fadeProps, growProps, slideProps, transitionGroupProps, zoomProps } from "../../Api/PropsApi/constants";

export const transitionsContent = [
  { label: "#Collapse", href: "#collapse" },
  { label: "#Fade", href: "#fade" },
  { label: "#Zoom", href: "#zoom" },
  { label: "#Slide", href: "#slide" },
  { label: "#Grow", href: "#grow" },
  { label: "#Transition Group", href: "#transition-group" },
  { label: "<Collapse />", href: "#collapse-api" },
  { label: "<Fade />", href: "#fade-api" },
  { label: "<Grow />", href: "#grow-api" },
  { label: "<Slide />", href: "#slide-api" },
  { label: "<Zoom />", href: "#zoom-api" },
  { label: "<TransitionGroup />", href: "#transition-group-api" },
];

export const transitionsSections = [
  {
    id: "collapse",
    title: "#Collapse",
    subtitle:
      "The Collapse component provides an expanding effect to reveal content.",
    source: CollapseSrc,
    view: CollapseView,
  },
  {
    id: "fade",
    title: "#Fade",
    subtitle:
      "The Fade component offers a smooth transition to show or hide elements.",
    source: FadeSrc,
    view: FadeView,
  },
  {
    id: "zoom",
    title: "#Zoom",
    subtitle: "The Zoom component adds a scale-up effect to emphasize content.",
    source: ZoomSrc,
    view: ZoomView,
  },
  {
    id: "slide",
    title: "#Slide",
    subtitle:
      "The Slide component slides content in or out, ideal for panels and notifications.",
    source: SlideSrc,
    view: SlideView,
  },
  {
    id: "grow",
    title: "#Grow",
    subtitle:
      "The Grow component uses a gentle scale-up effect to expand content.",
    source: GrowSrc,
    view: GrowView,
  },
  {
    id: "transition-group",
    title: "#Transition Group",
    subtitle:
      "The Transition Group component manages animations across multiple elements or lists.",
    source: TransitionGroupSrc,
    view: TransitionGroupView,
  },
  {
    id: "collapse-api",
    title: "<Collapse />",
    isApi: true,
    componentProps: collapseProps,
  },
  {
    id: "fade-api",
    title: "<Fade />",
    isApi: true,
    componentProps: fadeProps,
  },
  {
    id: "grow-api",
    title: "<Grow />",
    isApi: true,
    componentProps: growProps,
  },
  {
    id: "slide-api",
    title: "<Slide />",
    isApi: true,
    componentProps: slideProps,
  },
  {
    id: "zoom-api",
    title: "<Zoom />",
    isApi: true,
    componentProps: zoomProps,
  },
  {
    id: "transition-group-api",
    title: "<TransitionGroup />",
    isApi: true,
    componentProps: transitionGroupProps,
  },
];
