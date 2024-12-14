import {
  View as BasicChipView,
  source as BasicChipSrc,
} from "./../../../UIComponents/Docs/Chip/BasicChip";
import {
  View as ClickableView,
  source as ClickableSrc,
} from "./../../../UIComponents/Docs/Chip/Clickable";
import {
  View as DeletableView,
  source as DeletableSrc,
} from "./../../../UIComponents/Docs/Chip/Deletable";
import {
  View as ClickableAndDeletableView,
  source as ClickableAndDeletableSrc,
} from "./../../../UIComponents/Docs/Chip/ClickableAndDeletable";
import {
  View as ClickableLinkView,
  source as ClickableLinkSrc,
} from "./../../../UIComponents/Docs/Chip/ClickableLink";
import {
  View as CustomDeleteIconView,
  source as CustomDeleteIconSrc,
} from "./../../../UIComponents/Docs/Chip/CustomDeleteIcon";
import {
  View as AvatarChipView,
  source as AvatarChipSrc,
} from "./../../../UIComponents/Docs/Chip/AvatarChip";
import {
  View as IconChipView,
  source as IconChipSrc,
} from "./../../../UIComponents/Docs/Chip/IconChip";
import {
  View as ColorChipView,
  source as ColorChipSrc,
} from "./../../../UIComponents/Docs/Chip/ColorChip";
import {
  View as SizesChipView,
  source as SizesChipSrc,
} from "./../../../UIComponents/Docs/Chip/SizesChip";
import {
  View as MultilineChipView,
  source as MultilineChipSrc,
} from "./../../../UIComponents/Docs/Chip/MultilineChip";
import {
  View as ChipArrayView,
  source as ChipArraySrc,
} from "./../../../UIComponents/Docs/Chip/ChipArray";
import { chipProps } from "../../Api/PropsApi/constants";

export const chipContent = [
  { label: "#Basic Chip", href: "#basic-chip" },
  { label: "#Clickable Chip", href: "#clickable-chip" },
  { label: "#Deletable Chip", href: "#deletable-chip" },
  { label: "#Link Chip", href: "#link-chip" },
  { label: "#Custom Delete", href: "#custom-delete" },
  { label: "#Avatar Chips", href: "#avatar-chips" },
  { label: "#Icon Chips", href: "#icon-chips" },
  { label: "#Color Chips", href: "#color-chips" },
  { label: "#Chip Sizes", href: "#chip-sizes" },
  { label: "#Multiline Chip", href: "#multiline-chip" },
  { label: "#Chip Array", href: "#chip-array" },
  { label: "<Chip />", href: "#chip-api" },
];

export const chipSections = [
  {
    id: "basic-chip",
    title: "#Basic Chip",
    subtitle: "The Chip component comes in both filled and outlined styles.",
    source: BasicChipSrc,
    view: BasicChipView,
  },
  {
    id: "clickable-chip",
    title: "#Clickable Chip",
    subtitle: "Make Chips interactive by adding the onClick prop.",
    source: ClickableSrc,
    view: ClickableView,
  },
  {
    id: "deletable-chip",
    title: "#Deletable Chip",
    subtitle: "Use the onDelete prop to allow Chips to be removable.",
    source: DeletableSrc,
    view: DeletableView,
  },
  {
    id: "deletable-and-clickable-chip",
    title: "#Deletable And Clickable Chip",
    subtitle: null,
    source: ClickableAndDeletableSrc,
    view: ClickableAndDeletableView,
  },
  {
    id: "link-chip",
    title: "#Link Chip",
    subtitle: "Turn Chips into links by passing a href to them.",
    source: ClickableLinkSrc,
    view: ClickableLinkView,
  },
  {
    id: "custom-delete",
    title: "#Custom Delete",
    subtitle: "Use a custom delete icon with the deleteIcon prop.",
    source: CustomDeleteIconSrc,
    view: CustomDeleteIconView,
  },
  {
    id: "avatar-chips",
    title: "#Avatar Chips",
    subtitle: "Add an avatar to a Chip by passing the avatar prop.",
    source: AvatarChipSrc,
    view: AvatarChipView,
  },
  {
    id: "icon-chips",
    title: "#Icon Chips",
    subtitle: "Place icons inside Chips with the icon prop.",
    source: IconChipSrc,
    view: IconChipView,
  },
  {
    id: "color-chips",
    title: "#Color Chips",
    subtitle: "Apply colors from the theme or custom ones with the color prop.",
    source: ColorChipSrc,
    view: ColorChipView,
  },
  {
    id: "chip-sizes",
    title: "#Chip Sizes",
    subtitle: "Adjust Chip sizes using the size prop.",
    source: SizesChipSrc,
    view: SizesChipView,
  },
  {
    id: "multiline-chip",
    title: "#Multiline Chip",
    subtitle: "Support multiline Chip content with custom sx styling.",
    source: MultilineChipSrc,
    view: MultilineChipView,
  },
  {
    id: "chip-array",
    title: "#Chip Array",
    subtitle: "Render multiple Chips and manage them in an array.",
    source: ChipArraySrc,
    view: ChipArrayView,
  },
  {
    id: "chip-api",
    title: "<Chip />",
    isApi: true,
    componentProps: chipProps,
  },
];
