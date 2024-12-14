import {
  View as BasicCarouselView,
  source as BasicCarouselSrc,
} from "./../../../UIComponents/Docs/Carousel/BasicCarousel";
import {
  View as HiddenIndicatorsView,
  source as HiddenIndicatorsSrc,
} from "./../../../UIComponents/Docs/Carousel/HiddenIndicators";
import {
  View as AutoplayEnabledView,
  source as AutoplayEnabledSrc,
} from "./../../../UIComponents/Docs/Carousel/AutoplayEnabled";
import {
  View as InteractiveContentView,
  source as InteractiveContentSrc,
} from "./../../../UIComponents/Docs/Carousel/InteractiveContent";
import {
  View as MultipleSlidesViewView,
  source as MultipleSlidesViewSrc,
} from "./../../../UIComponents/Docs/Carousel/MultipleSlidesView";
import {
  View as CarouselWithContentView,
  source as CarouselWithContentSrc,
} from "./../../../UIComponents/Docs/Carousel/CarouselWithContent";
import {
  View as AnimatedCarouselView,
  source as AnimatedCarouselSrc,
} from "./../../../UIComponents/Docs/Carousel/AnimatedCarousel";
import { carouselProps } from "../../Api/PropsApi/constants";

export const carouselContent = [
  { label: "#Basic Carousel", href: "#basic-carousel" },
  { label: "#Autoplay Carousel", href: "#autoplay-carousel" },
  { label: "#Animated Carousel", href: "#animated-carousel" },
  { label: "#Multi-View Carousel", href: "#multi-view-carousel" },
  { label: "#Content Carousel", href: "#content-carousel" },
  { label: "#No Indicators", href: "#no-indicators" },
  { label: "#Interactive Carousel", href: "#interactive-carousel" },
  { label: "<Carousel />", href: "#carousel-api" },
];

export const carouselSections = [
  {
    id: "basic-carousel",
    title: "#Basic Carousel",
    subtitle:
      "A simple carousel for manual image browsing, responsive to screen size.",
    source: BasicCarouselSrc,
    view: BasicCarouselView,
  },
  {
    id: "autoplay-carousel",
    title: "#Autoplay Carousel",
    subtitle:
      "Automatically rotates through slides with optional manual controls.",
    source: AutoplayEnabledSrc,
    view: AutoplayEnabledView,
  },
  {
    id: "animated-carousel",
    title: "#Animated Carousel",
    subtitle: "Custom animations for smooth transitions between slides.",
    source: AnimatedCarouselSrc,
    view: AnimatedCarouselView,
  },
  {
    id: "multi-view-carousel",
    title: "#Multi-View Carousel",
    subtitle: "Displays multiple slides at once, set by user preference.",
    source: MultipleSlidesViewSrc,
    view: MultipleSlidesViewView,
  },
  {
    id: "content-carousel",
    title: "#Content Carousel",
    subtitle: "Combines images with text or other elements in each slide.",
    source: CarouselWithContentSrc,
    view: CarouselWithContentView,
  },
  {
    id: "no-indicators",
    title: "#No Indicators",
    subtitle: "Carousel with hidden indicators, retaining navigation controls.",
    source: HiddenIndicatorsSrc,
    view: HiddenIndicatorsView,
  },
  {
    id: "interactive-carousel",
    title: "#Interactive Carousel",
    subtitle:
      "Carousel with interactive elements like buttons within each slide.",
    source: InteractiveContentSrc,
    view: InteractiveContentView,
  },
  {
    id: "carousel-api",
    title: "<Carousel />",
    isApi: true,
    componentProps: carouselProps,
  },
];
