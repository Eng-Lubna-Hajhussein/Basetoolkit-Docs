import {
  View as BasicDialogView,
  source as BasicDialogSrc,
} from "./../../../UIComponents/Docs/Dialog/BasicDialog";
import {
  View as AlertDialogView,
  source as AlertDialogSrc,
} from "./../../../UIComponents/Docs/Dialog/AlertDialog";
import {
  View as TransitionsView,
  source as TransitionsSrc,
} from "./../../../UIComponents/Docs/Dialog/Transitions";
import {
  View as FormDialogsView,
  source as FormDialogsSrc,
} from "./../../../UIComponents/Docs/Dialog/FormDialogs";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Dialog/Customization";
import {
  View as ConfirmationDialogsView,
  source as ConfirmationDialogsSrc,
} from "./../../../UIComponents/Docs/Dialog/ConfirmationDialogs";
import {
  View as ScrollingLongContentView,
  source as ScrollingLongContentSrc,
} from "./../../../UIComponents/Docs/Dialog/ScrollingLongContent";
import {
  View as OptionalSizesView,
  source as OptionalSizesSrc,
} from "./../../../UIComponents/Docs/Dialog/OptionalSizes";
import {
  View as ResponsiveFullScreenView,
  source as ResponsiveFullScreenSrc,
} from "./../../../UIComponents/Docs/Dialog/ResponsiveFullScreen";
import {
  dialogActionsProps,
  dialogContentProps,
  dialogContentTextProps,
  dialogProps,
  dialogTitleProps,
} from "../../Api/PropsApi/constants";

export const dialogContent = [
  { label: "#Basic Dialog", href: "#basic-dialog" },
  { label: "#Alert Dialog", href: "#alert-dialog" },
  { label: "#Transitions", href: "#transitions" },
  { label: "#Form Dialog", href: "#form-dialog" },
  { label: "#Dialog Sizes", href: "#dialog-sizes" },
  { label: "#Custom Styles", href: "#custom-styles" },
  { label: "#Responsive View", href: "#responsive-view" },
  { label: "#Confirmation Dialog", href: "#confirmation-dialog" },
  { label: "#Scrollable Content", href: "#scrollable-content" },
  { label: "<Dialog />", href: "#dialog-api" },
  { label: "<DialogActions />", href: "#dialog-actions-api" },
  { label: "<DialogContent />", href: "#dialog-content-api" },
  { label: "<DialogContentText />", href: "#dialog-content-text-api" },
  { label: "<DialogTitle />", href: "#dialog-title-api" },
];

export const dialogSections = [
  {
    id: "basic-dialog",
    title: "#Basic Dialog",
    subtitle: "A simple example showing basic dialog structure.",
    source: BasicDialogSrc,
    view: BasicDialogView,
  },
  {
    id: "alert-dialog",
    title: "#Alert Dialog",
    subtitle: "Use this for messages requiring user acknowledgment.",
    source: AlertDialogSrc,
    view: AlertDialogView,
  },
  {
    id: "transitions",
    title: "#Transitions",
    subtitle: "Change the transition; here Slide is applied.",
    source: TransitionsSrc,
    view: TransitionsView,
  },
  {
    id: "form-dialog",
    title: "#Form Dialog",
    subtitle: "Dialog example with form fields for data entry.",
    source: FormDialogsSrc,
    view: FormDialogsView,
  },
  {
    id: "dialog-sizes",
    title: "#Dialog Sizes",
    subtitle: "Use maxWidth and fullWidth props for sizing.",
    source: OptionalSizesSrc,
    view: OptionalSizesView,
  },
  {
    id: "custom-styles",
    title: "#Custom Styles",
    subtitle: "An example of a styled, customized dialog.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "responsive-view",
    title: "#Responsive View",
    subtitle: "Make dialogs fully responsive with media queries.",
    source: ResponsiveFullScreenSrc,
    view: ResponsiveFullScreenView,
  },
  {
    id: "confirmation-dialog",
    title: "#Confirmation Dialog",
    subtitle: "Dialog designed for user confirmation actions.",
    source: ConfirmationDialogsSrc,
    view: ConfirmationDialogsView,
  },
  {
    id: "scrollable-content",
    title: "#Scrollable Content",
    subtitle:
      "For lengthy dialogs: use `scroll='paper'` to scroll within dialog or `scroll='body'` to scroll the entire page.",
    source: ScrollingLongContentSrc,
    view: ScrollingLongContentView,
  },
  {
    id: "dialog-api",
    title: "<Dialog />",
    isApi: true,
    componentProps: dialogProps,
  },
  {
    id: "dialog-actions-api",
    title: "<DialogActions />",
    isApi: true,
    componentProps: dialogActionsProps,
  },
  {
    id: "dialog-content-api",
    title: "<DialogContent />",
    isApi: true,
    componentProps: dialogContentProps,
  },
  {
    id: "dialog-content-text-api",
    title: "<DialogContentText />",
    isApi: true,
    componentProps: dialogContentTextProps,
  },
  {
    id: "dialog-title-api",
    title: "<DialogTitle />",
    isApi: true,
    componentProps: dialogTitleProps,
  },
];
