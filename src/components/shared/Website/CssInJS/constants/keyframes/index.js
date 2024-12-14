import {
  View as AnimatedBtnView,
  source as AnimatedBtnSrc,
} from "./../../../CssInJS/Docs/keyframes/Usage/AnimatedBtn";
import {
  View as OnlineAvatarView,
  source as OnlineAvatarSrc,
} from "./../../../CssInJS/Docs/keyframes/Usage/OnlineAvatar";
import {
  View as CardSlideView,
  source as CardSlideSrc,
} from "./../../../CssInJS/Docs/keyframes/Usage/CardSlide";
import {
  View as ProgressBarView,
  source as ProgressBarSrc,
} from "./../../../CssInJS/Docs/keyframes/Usage/ProgressBar";
import {
  View as TextFlickerView,
  source as TextFlickerSrc,
} from "./../../../CssInJS/Docs/keyframes/Usage/TextFlicker";

export const keyframesContent = [
  { label: "#Button Animation", href: "#button-animation" },
  { label: "#Avatar Pulse", href: "#avatar-pulse" },
  { label: "#Slide Card", href: "#slide-card" },
  { label: "#Loading Bar", href: "#loading-bar" },
  { label: "#Text Glow", href: "#text-glow" },
];

export const keyframesSections = [
  {
    id: "button-animation",
    title: "#Button Animation",
    subtitle: "Shows a button with animated effects on hover.",
    source: AnimatedBtnSrc,
    view: AnimatedBtnView,
  },
  {
    id: "avatar-pulse",
    title: "#Avatar Pulse",
    subtitle: "Displays a pulsing effect around an online avatar.",
    source: OnlineAvatarSrc,
    view: OnlineAvatarView,
  },
  {
    id: "slide-card",
    title: "#Slide Card",
    subtitle: "A card sliding animation for entry effects.",
    source: CardSlideSrc,
    view: CardSlideView,
  },
  {
    id: "loading-bar",
    title: "#Loading Bar",
    subtitle: "Simulates a progress bar with a smooth animation.",
    source: ProgressBarSrc,
    view: ProgressBarView,
  },
  {
    id: "text-glow",
    title: "#Text Glow",
    subtitle: "Creates a flickering glow effect on text elements.",
    source: TextFlickerSrc,
    view: TextFlickerView,
  },
];
