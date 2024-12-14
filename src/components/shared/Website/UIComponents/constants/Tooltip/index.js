import {
  View as BasicTooltipView,
  source as BasicTooltipSrc,
} from "./../../../UIComponents/Docs/Tooltip/BasicTooltip";
import {
  View as PositionedTooltipsView,
  source as PositionedTooltipsSrc,
} from "./../../../UIComponents/Docs/Tooltip/PositionedTooltips";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Tooltip/Customization";
import {
  View as ArrowTooltipsView,
  source as ArrowTooltipsSrc,
} from "./../../../UIComponents/Docs/Tooltip/ArrowTooltips";
import {
  View as TriggersView,
  source as TriggersSrc,
} from "./../../../UIComponents/Docs/Tooltip/Triggers";
import {
  View as ControlledTooltipsView,
  source as ControlledTooltipsSrc,
} from "./../../../UIComponents/Docs/Tooltip/ControlledTooltips";
import {
  View as VariableWidthView,
  source as VariableWidthSrc,
} from "./../../../UIComponents/Docs/Tooltip/VariableWidth";
import {
  View as FollowCursorView,
  source as FollowCursorSrc,
} from "./../../../UIComponents/Docs/Tooltip/FollowCursor";
import { tooltipProps } from "../../Api/PropsApi/constants";

export const tooltipContent = [
  { label: "#Basic Tooltip", href: "#basic-tooltip" },
  { label: "#Tooltip Position", href: "#tooltip-position" },
  { label: "#Cursor Follow", href: "#cursor-follow" },
  { label: "#Custom Tooltip", href: "#custom-tooltip" },
  { label: "#Tooltip Arrow", href: "#tooltip-arrow" },
  { label: "#Event Triggers", href: "#event-triggers" },
  { label: "#Tooltip Control", href: "#tooltip-control" },
  { label: "#Text Wrap", href: "#text-wrap" },
  { label: "<Tooltip />", href: "#tooltip-api" },
];

export const tooltipSections = [
  {
    id: "basic-tooltip",
    title: "#Basic Tooltip",
    subtitle: "An introductory example of using tooltips.",
    source: BasicTooltipSrc,
    view: BasicTooltipView,
  },
  {
    id: "tooltip-position",
    title: "#Tooltip Position",
    subtitle: "Tooltips can appear in 12 different positions.",
    source: PositionedTooltipsSrc,
    view: PositionedTooltipsView,
  },
  {
    id: "cursor-follow",
    title: "#Cursor Follow",
    subtitle: "Enable tooltips to follow the mouse cursor.",
    source: FollowCursorSrc,
    view: FollowCursorView,
  },
  {
    id: "custom-tooltip",
    title: "#Custom Tooltip",
    subtitle: "Examples of customizing tooltip styling and behavior.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "tooltip-arrow",
    title: "#Tooltip Arrow",
    subtitle: "Add an arrow to point directly to the tooltip's target.",
    source: ArrowTooltipsSrc,
    view: ArrowTooltipsView,
  },
  {
    id: "event-triggers",
    title: "#Event Triggers",
    subtitle: "Define events that display the tooltip.",
    source: TriggersSrc,
    view: TriggersView,
  },
  {
    id: "tooltip-control",
    title: "#Tooltip Control",
    subtitle: "Manage tooltip visibility with open, onOpen, and onClose props.",
    source: ControlledTooltipsSrc,
    view: ControlledTooltipsView,
  },
  {
    id: "text-wrap",
    title: "#Text Wrap",
    subtitle: "Automatically wrap long tooltip text for readability.",
    source: VariableWidthSrc,
    view: VariableWidthView,
  },
  {
    id: "tooltip-api",
    title: "<Tooltip />",
    isApi: true,
    componentProps: tooltipProps,
  },
];
