import {
  View as BasicButtonView,
  source as BasicButtonSrc,
} from "./../../../UIComponents/Docs/Button/BasicButton";
import {
  View as ButtonVariantsView,
  source as ButtonVariantsSrc,
} from "./../../../UIComponents/Docs/Button/ButtonVariants";
import {
  View as ActionButtonsView,
  source as ActionButtonsSrc,
} from "./../../../UIComponents/Docs/Button/ActionButtons";
import {
  View as NoElevationView,
  source as NoElevationSrc,
} from "./../../../UIComponents/Docs/Button/NoElevation";
import {
  View as ColorsView,
  source as ColorsSrc,
} from "./../../../UIComponents/Docs/Button/Colors";
import {
  View as ButtonSizesView,
  source as ButtonSizesSrc,
} from "./../../../UIComponents/Docs/Button/ButtonSizes";
import {
  View as ButtonsWithIconsView,
  source as ButtonsWithIconsSrc,
} from "./../../../UIComponents/Docs/Button/ButtonsWithIcons";
import {
  View as FileUploadButtonView,
  source as FileUploadButtonSrc,
} from "./../../../UIComponents/Docs/Button/FileUploadButton";
import {
  View as IconButtonsView,
  source as IconButtonsSrc,
} from "./../../../UIComponents/Docs/Button/IconButtons";
import {
  View as IconButtonSizesView,
  source as IconButtonSizesSrc,
} from "./../../../UIComponents/Docs/Button/IconButtonSizes";
import {
  View as LoadingButtonsView,
  source as LoadingButtonsSrc,
} from "./../../../UIComponents/Docs/Button/LoadingButtons";
import {
  View as LoadingWithIconView,
  source as LoadingWithIconSrc,
} from "./../../../UIComponents/Docs/Button/LoadingWithIcon";
import {
  View as PositionedLoadingView,
  source as PositionedLoadingSrc,
} from "./../../../UIComponents/Docs/Button/PositionedLoading";
import {
  View as FullWidthLoadingView,
  source as FullWidthLoadingSrc,
} from "./../../../UIComponents/Docs/Button/FullWidthLoading";
import {
  View as CustomDelayView,
  source as CustomDelaySrc,
} from "./../../../UIComponents/Docs/Button/CustomDelay";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Button/Customization";
import {
  buttonBaseProps,
  buttonProps,
  iconButtonProps,
  loadingButtonProps,
} from "../../Api/PropsApi/constants";

export const buttonContent = [
  { label: "#Basic Buttons", href: "#basic-buttons" },
  { label: "#Button Variants", href: "#button-variants" },
  { label: "#Action Buttons", href: "#action-buttons" },
  { label: "#No Elevation", href: "#no-elevation" },
  { label: "#Color Options", href: "#color-options" },
  { label: "#Button Sizes", href: "#button-sizes" },
  { label: "#Buttons with Icons", href: "#buttons-with-icons" },
  { label: "#File Upload Button", href: "#file-upload-button" },
  { label: "#Icon Button", href: "#icon-button" },
  { label: "#Icon Button Sizes", href: "#icon-button-sizes" },
  { label: "#Loading Button", href: "#loading-button" },
  { label: "#Loading with Icon", href: "#loading-with-icon" },
  { label: "#Positioned Loading", href: "#positioned-loading" },
  { label: "#Full-Width Loading", href: "#full-width-loading" },
  { label: "#Custom Delay", href: "#custom-delay" },
  { label: "#Customization", href: "#customization" },
  { label: "<Button />", href: "#button-api" },
  { label: "<IconButton />", href: "#icon-button-api" },
  { label: "<ButtonBase />", href: "#button-base-api" },
  { label: "<LoadingButton />", href: "#loading-button-api" },
];


export const buttonSections = [
  {
    id: "basic-buttons",
    title: "#Basic Buttons",
    subtitle: "Examples demonstrating Button basic features.",
    source: BasicButtonSrc,
    view: BasicButtonView,
  },
  {
    id: "button-variants",
    title: "#Button Variants",
    subtitle:
      " Demonstrates the three main Button variants in BaseToolkit: text, contained, and outlined.",
    source: ButtonVariantsSrc,
    view: ButtonVariantsView,
  },
  {
    id: "action-buttons",
    title: "#Action Buttons",
    subtitle:
      "Displays different action states, including a primary action, a disabled state, and a link-style button.",
    source: ActionButtonsSrc,
    view: ActionButtonsView,
  },
  {
    id: "no-elevation",
    title: "#No Elevation",
    subtitle:
      "Demonstrates a contained button without elevation for a flat, minimalistic style.",
    source: NoElevationSrc,
    view: NoElevationView,
  },
  {
    id: "color-options",
    title: "#Color Options",
    subtitle:
      "Different color options available for Button, including theme colors like primary, success, and error or any other custom color.",
    source: ColorsSrc,
    view: ColorsView,
  },
  {
    id: "button-sizes",
    title: "#Button Sizes",
    subtitle:
      "Demonstrates small, medium, and large button sizes in BaseToolkit.",
    source: ButtonSizesSrc,
    view: ButtonSizesView,
  },
  {
    id: "buttons-with-icons",
    title: "#Buttons with Icons",
    subtitle:
      "Showcases buttons with icons to demonstrate start and end icon options.",
    source: ButtonsWithIconsSrc,
    view: ButtonsWithIconsView,
  },
  {
    id: "file-upload-button",
    title: "#File Upload Button",
    subtitle: "Demonstrates a file upload button using a hidden file input.",
    source: FileUploadButtonSrc,
    view: FileUploadButtonView,
  },
  {
    id: "icon-button",
    title: "#Icon Button",
    subtitle:
      "Displays icon-only buttons for actions like delete, add to cart, or notifications.",
    source: IconButtonsSrc,
    view: IconButtonsView,
  },
  {
    id: "icon-button-sizes",
    title: "#Icon Button Sizes",
    subtitle:
      "Demonstrates icon buttons in various sizes for adaptable interfaces.",
    source: IconButtonSizesSrc,
    view: IconButtonSizesView,
  },
  {
    id: "loading-button",
    title: "#Loading Button",
    subtitle:
      "Basic loading buttons with contained, outlined, and text variants.",
    source: LoadingButtonsSrc,
    view: LoadingButtonsView,
  },
  {
    id: "loading-with-icon",
    title: "#Loading with Icon",
    subtitle:
      "Loading buttons with start and end icons for additional context.",
    source: LoadingWithIconSrc,
    view: LoadingWithIconView,
  },
  {
    id: "positioned-loading",
    title: "#Positioned Loading",
    subtitle:
      "Demonstrates loading position (start and end) within the button.",
    source: PositionedLoadingSrc,
    view: PositionedLoadingView,
  },
  {
    id: "full-width-loading",
    title: "#Full-Width Loading",
    subtitle: "Full-width loading button, ideal for larger screens or mobile.",
    source: FullWidthLoadingSrc,
    view: FullWidthLoadingView,
  },
  {
    id: "custom-delay",
    title: "#Custom Delay",
    subtitle: "Button with a delay before the loading indicator appears.",
    source: CustomDelaySrc,
    view: CustomDelayView,
  },
  {
    id: "customization",
    title: "#Customization",
    subtitle:
      "Demonstrates advanced button customizations using cssInjection for unique branding, gradient effects, and shadow styling.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "button-api",
    title: "<Button />",
    isApi: true,
    componentProps: buttonProps,
  },
  {
    id: "icon-button-api",
    title: "<IconButton />",
    isApi: true,
    componentProps: iconButtonProps,
  },
  {
    id: "button-base-api",
    title: "<ButtonBase />",
    isApi: true,
    componentProps: buttonBaseProps,
  },
  {
    id: "loading-button-api",
    title: "<LoadingButton />",
    isApi: true,
    componentProps: loadingButtonProps,
  },
];
