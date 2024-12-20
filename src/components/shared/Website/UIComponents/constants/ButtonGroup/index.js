import {
  View as BasicButtonGroupView,
  source as BasicButtonGroupSrc,
} from "./../../../UIComponents/Docs/ButtonGroup/BasicButtonGroup";
import {
  View as VariantsView,
  source as VariantsSrc,
} from "./../../../UIComponents/Docs/ButtonGroup/Variants";
import {
  View as SizesAndColorsView,
  source as SizesAndColorsSrc,
} from "./../../../UIComponents/Docs/ButtonGroup/SizesAndColors";
import {
  View as OrientationView,
  source as OrientationSrc,
} from "./../../../UIComponents/Docs/ButtonGroup/Orientation";
import {
  View as SplitButtonWithMenuView,
  source as SplitButtonWithMenuSrc,
} from "./../../../UIComponents/Docs/ButtonGroup/SplitButtonWithMenu";
import {
  View as DisableElevationView,
  source as DisableElevationSrc,
} from "./../../../UIComponents/Docs/ButtonGroup/DisableElevation";
import {
  View as LoadingButtonGroupView,
  source as LoadingButtonGroupSrc,
} from "./../../../UIComponents/Docs/ButtonGroup/LoadingButtonGroup";

import {
  buttonGroupProps,
  buttonProps,
  loadingButtonProps,
} from "../../Api/PropsApi/constants";

export const buttonGroupContent = [
  { label: "#Group Buttons", href: "#group-buttons" },
  { label: "#Button Styles", href: "#button-styles" },
  { label: "#Size and Color", href: "#size-and-color" },
  { label: "#Vertical Buttons", href: "#vertical-buttons" },
  { label: "#Split Button", href: "#split-button" },
  { label: "#No Elevation", href: "#no-elevation" },
  { label: "#Loading State", href: "#loading-state" },
  { label: "<ButtonGroup />", href: "#button-group-api" },
  { label: "<Button />", href: "#button-api" },
  { label: "<LoadingButton />", href: "#loading-button-api" },
];

export const buttonGroupSections = [
  {
    id: "group-buttons",
    title: "#Group Buttons",
    subtitle:
      "Group buttons by wrapping them with the ButtonGroup component. They should be immediate children.",
    source: BasicButtonGroupSrc,
    view: BasicButtonGroupView,
  },
  {
    id: "button-styles",
    title: "#Button Styles",
    subtitle:
      "Demonstrates different ButtonGroup variants including outlined and text styles for flexibility in design.",
    source: VariantsSrc,
    view: VariantsView,
  },
  {
    id: "size-and-color",
    title: "#Size and Color",
    subtitle:
      "Button groups in varying sizes (small, medium, large) and colors, highlighting the customization options for size and color.",
    source: SizesAndColorsSrc,
    view: SizesAndColorsView,
  },
  {
    id: "vertical-buttons",
    title: "#Vertical Buttons",
    subtitle:
      "Shows ButtonGroup with a vertical orientation in different variants, useful for aligning buttons in a column layout.",
    source: OrientationSrc,
    view: OrientationView,
  },
  {
    id: "split-button",
    title: "#Split Button",
    subtitle:
      "A split button example with a dropdown menu for selecting options, combining a primary button with additional choices.",
    source: SplitButtonWithMenuSrc,
    view: SplitButtonWithMenuView,
  },
  {
    id: "no-elevation",
    title: "#No Elevation",
    subtitle:
      "A ButtonGroup example with elevation disabled, providing a flat appearance ideal for minimalist designs.",
    source: DisableElevationSrc,
    view: DisableElevationView,
  },
  {
    id: "loading-state",
    title: "#Loading State",
    subtitle:
      "Demonstrates ButtonGroup with loading states, including a button that displays a loading spinner to indicate ongoing actions.",
    source: LoadingButtonGroupSrc,
    view: LoadingButtonGroupView,
  },
  {
    id: "button-group-api",
    title: "<ButtonGroup />",
    isApi: true,
    componentProps: buttonGroupProps,
  },
  {
    id: "button-api",
    title: "<Button />",
    isApi: true,
    componentProps: buttonProps,
  },
  {
    id: "loading-button-api",
    title: "<LoadingButton />",
    isApi: true,
    componentProps: loadingButtonProps,
  },
];
