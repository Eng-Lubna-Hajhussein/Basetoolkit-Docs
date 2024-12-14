import {
  View as BasicTimelineView,
  source as BasicTimelineSrc,
} from "./../../../UIComponents/Docs/Timeline/BasicTimeline";
import {
  View as AlternatingTimelineView,
  source as AlternatingTimelineSrc,
} from "./../../../UIComponents/Docs/Timeline/AlternatingTimeline";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/Timeline/Color";
import {
  View as ReverseAlternatingView,
  source as ReverseAlternatingSrc,
} from "./../../../UIComponents/Docs/Timeline/ReverseAlternating";
import {
  View as LeftPositionedView,
  source as LeftPositionedSrc,
} from "./../../../UIComponents/Docs/Timeline/LeftPositioned";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Timeline/Customization";
import {
  View as OppositeContentView,
  source as OppositeContentSrc,
} from "./../../../UIComponents/Docs/Timeline/OppositeContent";
import {
  View as OutlinedView,
  source as OutlinedSrc,
} from "./../../../UIComponents/Docs/Timeline/Outlined";
import {
  timelineConnectorProps,
  timelineContentProps,
  timelineDotProps,
  timelineItemProps,
  timelineOppositeContentProps,
  timelineProps,
  timelineSeparatorProps,
} from "../../Api/PropsApi/constants";

export const timelineContent = [
  { label: "#Event Layout", href: "#event-layout" },
  { label: "#Left Aligned", href: "#left-aligned" },
  { label: "#Alternating Sides", href: "#alternating-sides" },
  { label: "#Reverse Alternation", href: "#reverse-alternation" },
  { label: "#Color Options", href: "#color-options" },
  { label: "#Outline Style", href: "#outline-style" },
  { label: "#Opposite Content", href: "#opposite-content" },
  { label: "#Customization", href: "#customization" },
  { label: "<Timeline />", href: "#timeline-api" },
  { label: "<TimelineConnector />", href: "#timeline-connector-api" },
  { label: "<TimelineContent />", href: "#timeline-content-api" },
  { label: "<TimelineDot />", href: "#timeline-dot-api" },
  { label: "<TimelineItem />", href: "#timeline-item-api" },
  {
    label: "<TimelineOppositeContent />",
    href: "#timeline-opposite-content-api",
  },
  { label: "<TimelineSeparator />", href: "#timeline-separator-api" },
];

export const timelineSections = [
  {
    id: "event-layout",
    title: "#Event layout",
    subtitle: "Displays a sequence of events on a timeline.",
    source: BasicTimelineSrc,
    view: BasicTimelineView,
  },
  {
    id: "left-aligned",
    title: "#Left aligned",
    subtitle: "Positions timeline events on the left side.",
    source: LeftPositionedSrc,
    view: LeftPositionedView,
  },
  {
    id: "alternating-sides",
    title: "#Alternating sides",
    subtitle: "Displays events on alternating sides of the axis.",
    source: AlternatingTimelineSrc,
    view: AlternatingTimelineView,
  },
  {
    id: "reverse-alternation",
    title: "#Reverse alternation",
    subtitle: "Shows events on alternating sides in reverse order.",
    source: ReverseAlternatingSrc,
    view: ReverseAlternatingView,
  },
  {
    id: "color-options",
    title: "#Color options",
    subtitle: "TimelineDot supports theme and custom colors.",
    source: ColorSrc,
    view: ColorView,
  },
  {
    id: "outline-style",
    title: "#Outline style",
    subtitle: "Displays timeline elements with an outlined style.",
    source: OutlinedSrc,
    view: OutlinedView,
  },
  {
    id: "opposite-content",
    title: "#Opposite content",
    subtitle: "Positions content on opposite sides of events.",
    source: OppositeContentSrc,
    view: OppositeContentView,
  },
  {
    id: "customization",
    title: "#Customization",
    subtitle: "An example of customized styling.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "timeline-api",
    title: "<Timeline />",
    isApi: true,
    componentProps: timelineProps,
  },
  {
    id: "timeline-connector-api",
    title: "<TimelineConnector />",
    isApi: true,
    componentProps: timelineConnectorProps,
  },
  {
    id: "timeline-content-api",
    title: "<TimelineContent />",
    isApi: true,
    componentProps: timelineContentProps,
  },
  {
    id: "timeline-dot-api",
    title: "<TimelineDot />",
    isApi: true,
    componentProps: timelineDotProps,
  },
  {
    id: "timeline-item-api",
    title: "<TimelineItem />",
    isApi: true,
    componentProps: timelineItemProps,
  },
  {
    id: "timeline-opposite-content-api",
    title: "<TimelineOppositeContent />",
    isApi: true,
    componentProps: timelineOppositeContentProps,
  },
  {
    id: "timeline-separator-api",
    title: "<TimelineSeparator />",
    isApi: true,
    componentProps: timelineSeparatorProps,
  },
];
