import {
  View as BasicSwitchesView,
  source as BasicSwitchesSrc,
} from "./../../../UIComponents/Docs/Switch/BasicSwitches";
import {
  View as LabelView,
  source as LabelSrc,
} from "./../../../UIComponents/Docs/Switch/Label";
import {
  View as SizeView,
  source as SizeSrc,
} from "./../../../UIComponents/Docs/Switch/Size";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/Switch/Color";
import {
  View as ControlledView,
  source as ControlledSrc,
} from "./../../../UIComponents/Docs/Switch/Controlled";
import {
  View as SwitchesWithFormGroupView,
  source as SwitchesWithFormGroupSrc,
} from "./../../../UIComponents/Docs/Switch/SwitchesWithFormGroup";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Switch/Customization";
import {
  View as LabelPlacementView,
  source as LabelPlacementSrc,
} from "./../../../UIComponents/Docs/Switch/LabelPlacement";
import { switchProps } from "../../Api/PropsApi/constants";

export const switchContent = [
    { label: "#Basic Switch", href: "#basic-switch" },
    { label: "#Switch Labels", href: "#switch-labels" },
    { label: "#Switch Sizes", href: "#switch-sizes" },
    { label: "#Switch Colors", href: "#switch-colors" },
    { label: "#Controlled Switch", href: "#controlled-switch" },
    { label: "#Switch Grouping", href: "#switch-grouping" },
    { label: "#Custom Icons", href: "#custom-icons" },
    { label: "#Label Placement", href: "#label-placement" },
    { label: "<Switch />", href: "#switch-api" },
  ];
  
  export const switchSections = [
    {
      id: "basic-switch",
      title: "#Basic Switch",
      subtitle: "A simple basic switches components.",
      source: BasicSwitchesSrc,
      view: BasicSwitchesView,
    },
    {
      id: "switch-labels",
      title: "#Switch Labels",
      subtitle: "Attach labels using FormControlLabel for better context.",
      source: LabelSrc,
      view: LabelView,
    },
    {
      id: "switch-sizes",
      title: "#Switch Sizes",
      subtitle: "Use the size prop to modify the size of the switch.",
      source: SizeSrc,
      view: SizeView,
    },
    {
      id: "switch-colors",
      title: "#Switch Colors",
      subtitle: "Apply different colors to the switch using the color prop.",
      source: ColorSrc,
      view: ColorView,
    },
    {
      id: "controlled-switch",
      title: "#Controlled Switch",
      subtitle: "Control the switch state with checked and onChange props.",
      source: ControlledSrc,
      view: ControlledView,
    },
    {
      id: "switch-grouping",
      title: "#Switch Grouping",
      subtitle: "Use FormGroup to group multiple switches together.",
      source: SwitchesWithFormGroupSrc,
      view: SwitchesWithFormGroupView,
    },
    {
      id: "custom-icons",
      title: "#Custom Icons",
      subtitle: "Example of customizing the icons in the switch component.",
      source: CustomizationSrc,
      view: CustomizationView,
    },
    {
      id: "label-placement",
      title: "#Label Placement",
      subtitle: "Change the label position using labelPlacement prop.",
      source: LabelPlacementSrc,
      view: LabelPlacementView,
    },
    {
      id: "switch-api",
      title: "<Switch />",
      isApi: true,
      componentProps: switchProps,
    },
  ];
  
