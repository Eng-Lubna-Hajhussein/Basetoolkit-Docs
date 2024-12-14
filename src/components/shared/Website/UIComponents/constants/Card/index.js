import {
  View as BasicCardView,
  source as BasicCardSrc,
} from "./../../../UIComponents/Docs/Card/BasicCard";
import {
  View as OutlinedCardView,
  source as OutlinedCardSrc,
} from "./../../../UIComponents/Docs/Card/OutlinedCard";
import {
  View as ComplexInteractionView,
  source as ComplexInteractionSrc,
} from "./../../../UIComponents/Docs/Card/ComplexInteraction";
import {
  View as MediaView,
  source as MediaSrc,
} from "./../../../UIComponents/Docs/Card/Media";
import {
  View as VideoMediaView,
  source as VideoMediaSrc,
} from "./../../../UIComponents/Docs/Card/VideoMedia";
import {
  View as PrimaryActionView,
  source as PrimaryActionSrc,
} from "./../../../UIComponents/Docs/Card/PrimaryAction";
import {
  View as SupplementalActionsView,
  source as SupplementalActionsSrc,
} from "./../../../UIComponents/Docs/Card/SupplementalActions";
import {
  View as UIControlsView,
  source as UIControlsSrc,
} from "./../../../UIComponents/Docs/Card/UIControls";
import {
  cardActionAreaProps,
  cardActionsProps,
  cardContentProps,
  cardHeaderProps,
  cardMediaProps,
  cardProps,
} from "../../Api/PropsApi/constants";

export const cardContent = [
  { label: "#Basic Card", href: "#basic-card" },
  { label: "#Outlined Card", href: "#outlined-card" },
  { label: "#Interactive Elements", href: "#interactive-elements" },
  { label: "#Media Display", href: "#media-display" },
  { label: "#Video Integration", href: "#video-integration" },
  { label: "#Full-Surface Action", href: "#full-surface-action" },
  { label: "#Additional Actions", href: "#additional-actions" },
  { label: "#Custom Controls", href: "#custom-controls" },
  { label: "<Card />", href: "#card-api" },
  { label: "<CardActionArea />", href: "#card-action-area-api" },
  { label: "<CardActions />", href: "#card-actions-api" },
  { label: "<CardContent />", href: "#card-content-api" },
  { label: "<CardHeader />", href: "#card-header-api" },
  { label: "<CardMedia />", href: "#card-media-api" },
];

export const cardSections = [
  {
    id: "basic-card",
    title: "#Basic Card",
    subtitle: null,
    source: BasicCardSrc,
    view: BasicCardView,
  },
  {
    id: "outlined-card",
    title: "#Outlined Card",
    subtitle: `Set variant="outlined" to apply an outlined style.`,
    source: OutlinedCardSrc,
    view: OutlinedCardView,
  },
  {
    id: "interactive-elements",
    title: "#Interactive Elements",
    subtitle: "Expand card details on desktop by clicking the chevron.",
    source: ComplexInteractionSrc,
    view: ComplexInteractionView,
  },
  {
    id: "media-display",
    title: "#Media Display",
    subtitle: "Cards can incorporate images to enhance content.",
    source: MediaSrc,
    view: MediaView,
  },
  {
    id: "video-integration",
    title: "#Video Integration",
    subtitle: null,
    source: VideoMediaSrc,
    view: VideoMediaView,
  },
  {
    id: "full-surface-action",
    title: "#Full-Surface Action",
    subtitle:
      "Enable card-wide interaction for primary actions with CardActionArea.",
    source: PrimaryActionSrc,
    view: PrimaryActionView,
  },
  {
    id: "additional-actions",
    title: "#Additional Actions",
    subtitle:
      "Use supplemental actions separate from main actions to prevent overlap.",
    source: SupplementalActionsSrc,
    view: SupplementalActionsView,
  },
  {
    id: "custom-controls",
    title: "#Custom Controls",
    subtitle: "Example of applying custom styles to card controls.",
    source: UIControlsSrc,
    view: UIControlsView,
  },
  {
    id: "card-api",
    title: "<Card />",
    isApi: true,
    componentProps: cardProps,
  },
  {
    id: "card-action-area-api",
    title: "<CardActionArea />",
    isApi: true,
    componentProps: cardActionAreaProps,
  },
  {
    id: "card-actions-api",
    title: "<CardActions />",
    isApi: true,
    componentProps: cardActionsProps,
  },
  {
    id: "card-content-api",
    title: "<CardContent />",
    isApi: true,
    componentProps: cardContentProps,
  },
  {
    id: "card-header-api",
    title: "<CardHeader />",
    isApi: true,
    componentProps: cardHeaderProps,
  },
  {
    id: "card-media-api",
    title: "<CardMedia />",
    isApi: true,
    componentProps: cardMediaProps,
  },
];
