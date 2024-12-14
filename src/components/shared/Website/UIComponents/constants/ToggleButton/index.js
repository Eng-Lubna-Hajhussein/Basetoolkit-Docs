import {
  View as ExclusiveSelectionView,
  source as ExclusiveSelectionSrc,
} from "./../../../UIComponents/Docs/ToggleButton/ExclusiveSelection";
import {
  View as MultipleSelectionView,
  source as MultipleSelectionSrc,
} from "./../../../UIComponents/Docs/ToggleButton/MultipleSelection";
import {
  View as SizeView,
  source as SizeSrc,
} from "./../../../UIComponents/Docs/ToggleButton/Size";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/ToggleButton/Color";
import {
  View as VerticalButtonsView,
  source as VerticalButtonsSrc,
} from "./../../../UIComponents/Docs/ToggleButton/VerticalButtons";
import {
  View as StandaloneView,
  source as StandaloneSrc,
} from "./../../../UIComponents/Docs/ToggleButton/Standalone";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/ToggleButton/Customization";
import { toggleButtonGroupProps, toggleButtonProps } from "../../Api/PropsApi/constants";

export const toggleButtonContent = [
    { label: "#Single Choice", href: "#single-choice" },
    { label: "#Multiple Options", href: "#multiple-options" },
    { label: "#Button Sizes", href: "#button-sizes" },
    { label: "#Toggle Colors", href: "#toggle-colors" },
    { label: "#Vertical Layout", href: "#vertical-layout" },
    { label: "#Standalone Button", href: "#standalone-button" },
    { label: "#Component Customization", href: "#component-customization" },
    { label: "<ToggleButton />", href: "#toggle-button-api" },
    { label: "<ToggleButtonGroup />", href: "#toggle-button-group-api" },
  ];
  
  export const toggleButtonSections = [
    {
      id: "single-choice",
      title: "#Single Choice",
      subtitle: "Selecting one option deselects others for exclusive selection.",
      source: ExclusiveSelectionSrc,
      view: ExclusiveSelectionView,
    },
    {
      id: "multiple-options",
      title: "#Multiple Options",
      subtitle:
        "Allows multiple options to be selected, useful for grouped actions like text formatting.",
      source: MultipleSelectionSrc,
      view: MultipleSelectionView,
    },
    {
      id: "button-sizes",
      title: "#Button Sizes",
      subtitle: "Adjust button size using the size prop for larger or smaller buttons.",
      source: SizeSrc,
      view: SizeView,
    },
    {
      id: "toggle-colors",
      title: "#Toggle Colors",
      subtitle: "Apply different colors using the color prop for toggle buttons.",
      source: ColorSrc,
      view: ColorView,
    },
    {
      id: "vertical-layout",
      title: "#Vertical Layout",
      subtitle: "Stack buttons vertically by setting the orientation to vertical.",
      source: VerticalButtonsSrc,
      view: VerticalButtonsView,
    },
    {
      id: "standalone-button",
      title: "#Standalone Button",
      subtitle: "Use the toggle button independently without grouping.",
      source: StandaloneSrc,
      view: StandaloneView,
    },
    {
      id: "component-customization",
      title: "#Component Customization",
      subtitle: "Example of customizing the toggle button for different use cases.",
      source: CustomizationSrc,
      view: CustomizationView,
    },
    {
      id: "toggle-button-api",
      title: "<ToggleButton />",
      isApi: true,
      componentProps: toggleButtonProps,
    },
    {
      id: "toggle-button-group-api",
      title: "<ToggleButtonGroup />",
      isApi: true,
      componentProps: toggleButtonGroupProps,
    },
  ];
  
