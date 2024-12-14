import {
  View as BasicSnackbarView,
  source as BasicSnackbarSrc,
} from "./../../../UIComponents/Docs/Snackbar/BasicSnackbar";
import {
  View as PositionView,
  source as PositionSrc,
} from "./../../../UIComponents/Docs/Snackbar/Position";
import {
  View as ContentView,
  source as ContentSrc,
} from "./../../../UIComponents/Docs/Snackbar/Content";
import {
  View as AutomaticDismissView,
  source as AutomaticDismissSrc,
} from "./../../../UIComponents/Docs/Snackbar/AutomaticDismiss";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Snackbar/Customization";
import {
  snackbarContentProps,
  snackbarProps,
} from "../../Api/PropsApi/constants";

export const snackbarContent = [
  { label: "#Basic Snackbar", href: "#basic-snackbar" },
  { label: "#Positioning", href: "#positioning" },
  { label: "#Snackbar Content", href: "#snackbar-content" },
  { label: "#Auto Dismiss", href: "#auto-dismiss" },
  { label: "#Customization", href: "#customization" },
  { label: "<Snackbar />", href: "#snackbar-api" },
  { label: "<SnackbarContent />", href: "#snackbar-content-api" },
];

export const snackbarSections = [
  {
    id: "basic-snackbar",
    title: "#Basic Snackbar",
    subtitle: null,
    source: BasicSnackbarSrc,
    view: BasicSnackbarView,
  },
  {
    id: "positioning",
    title: "#Positioning",
    subtitle: "Control the Snackbar's screen position using anchorOrigin.",
    source: PositionSrc,
    view: PositionView,
  },
  {
    id: "snackbar-content",
    title: "#Snackbar Content",
    subtitle: "Add text or actions to Snackbar using Snackbar Content.",
    source: ContentSrc,
    view: ContentView,
  },
  {
    id: "auto-dismiss",
    title: "#Auto Dismiss",
    subtitle: "Use autoHideDuration to close the Snackbar automatically.",
    source: AutomaticDismissSrc,
    view: AutomaticDismissView,
  },
  {
    id: "customization",
    title: "#Customization",
    subtitle: "Examples of styling customizations.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "snackbar-api",
    title: "<Snackbar />",
    isApi: true,
    componentProps: snackbarProps,
  },
  {
    id: "snackbar-content-api",
    title: "<SnackbarContent />",
    isApi: true,
    componentProps: snackbarContentProps,
  },
];
