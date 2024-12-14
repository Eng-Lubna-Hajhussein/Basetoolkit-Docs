import {
  View as BasicBadgeView,
  source as BasicBadgeSrc,
} from "./../../../UIComponents/Docs/Badge/BasicBadge";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/Badge/Color";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Badge/Customization";
import {
  View as BadgeVisibilityView,
  source as BadgeVisibilitySrc,
} from "./../../../UIComponents/Docs/Badge/BadgeVisibility";
import {
  View as ShowZeroView,
  source as ShowZeroSrc,
} from "./../../../UIComponents/Docs/Badge/ShowZero";
import {
  View as MaximumValueView,
  source as MaximumValueSrc,
} from "./../../../UIComponents/Docs/Badge/MaximumValue";
import {
  View as DotBadgeView,
  source as DotBadgeSrc,
} from "./../../../UIComponents/Docs/Badge/DotBadge";
import {
  View as BadgeOverlapView,
  source as BadgeOverlapSrc,
} from "./../../../UIComponents/Docs/Badge/BadgeOverlap";
import {
  View as BadgeAlignmentView,
  source as BadgeAlignmentSrc,
} from "./../../../UIComponents/Docs/Badge/BadgeAlignment";
import { badgeProps } from "../../Api/PropsApi/constants";

export const badgeContent = [
  { label: "#Basic Badge", href: "#basic-badge" },
  { label: "#Badge Colors", href: "#badge-colors" },
  { label: "#Custom Badges", href: "#custom-badges" },
  { label: "#Visibility Control", href: "#visibility-control" },
  { label: "#Zero Count", href: "#zero-count" },
  { label: "#Max Value", href: "#max-value" },
  { label: "#Dot Style", href: "#dot-style" },
  { label: "#Badge Position", href: "#badge-position" },
  { label: "#Alignment Options", href: "#alignment-options" },
  { label: "<Badge />", href: "#badge-api" },
];

export const badgeSections = [
  {
    id: "basic-badge",
    title: "#Basic Badge",
    subtitle: "Showcases badges with text, using different color options.",
    source: BasicBadgeSrc,
    view: BasicBadgeView,
  },
  {
    id: "badge-colors",
    title: "#Badge Colors",
    subtitle: "Example of using various color styles for badges.",
    source: ColorSrc,
    view: ColorView,
  },
  {
    id: "custom-badges",
    title: "#Custom Badges",
    subtitle: "Example of customizing the appearance and behavior of badges.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "visibility-control",
    title: "#Visibility Control",
    subtitle: "Control the visibility of badges with the invisible prop.",
    source: BadgeVisibilitySrc,
    view: BadgeVisibilityView,
  },
  {
    id: "zero-count",
    title: "#Zero Count",
    subtitle:
      "The badge automatically hides when badgeContent is zero unless you use the showZero prop.",
    source: ShowZeroSrc,
    view: ShowZeroView,
  },
  {
    id: "max-value",
    title: "#Max Value",
    subtitle: "Limit the maximum value displayed in badges using the max prop.",
    source: MaximumValueSrc,
    view: MaximumValueView,
  },
  {
    id: "dot-style",
    title: "#Dot Style",
    subtitle:
      "Display a small dot instead of a number for notification purposes.",
    source: DotBadgeSrc,
    view: DotBadgeView,
  },
  {
    id: "badge-position",
    title: "#Badge Position",
    subtitle:
      "Use the overlap prop to control badge placement relative to its element.",
    source: BadgeOverlapSrc,
    view: BadgeOverlapView,
  },
  {
    id: "alignment-options",
    title: "#Alignment Options",
    subtitle:
      "Move the badge to any corner of the element using the anchorOrigin prop.",
    source: BadgeAlignmentSrc,
    view: BadgeAlignmentView,
  },
  {
    id: "badge-api",
    title: "<Badge />",
    isApi: true,
    componentProps: badgeProps,
  },
];
