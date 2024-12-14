import {
  View as BasicCheckboxesView,
  source as BasicCheckboxesSrc,
} from "./../../../UIComponents/Docs/Checkbox/BasicCheckboxes";
import {
  View as CheckboxGroupView,
  source as CheckboxGroupSrc,
} from "./../../../UIComponents/Docs/Checkbox/CheckboxGroup";
import {
  View as SizeOptionsView,
  source as SizeOptionsSrc,
} from "./../../../UIComponents/Docs/Checkbox/SizeOptions";

import {
  View as ColorsView,
  source as ColorsSrc,
} from "./../../../UIComponents/Docs/Checkbox/Colors";
import {
  View as IconToggleView,
  source as IconToggleSrc,
} from "./../../../UIComponents/Docs/Checkbox/IconToggle";
import {
  View as StateControlView,
  source as StateControlSrc,
} from "./../../../UIComponents/Docs/Checkbox/StateControl";
import {
  View as IndeterminateView,
  source as IndeterminateSrc,
} from "./../../../UIComponents/Docs/Checkbox/Indeterminate";
import {
  View as ValidationExampleView,
  source as ValidationExampleSrc,
} from "./../../../UIComponents/Docs/Checkbox/ValidationExample";
import {
  View as PositioningLabelsView,
  source as PositioningLabelsSrc,
} from "./../../../UIComponents/Docs/Checkbox/PositioningLabels";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Checkbox/Customization";

import { checkboxProps, formControlLabelProps, formControlProps, formGroupProps, formLabelProps } from "../../Api/PropsApi/constants";

export const checkboxContent = [
  { label: "#Standard Checkbox", href: "#standard-checkbox" },
  { label: "#Icon Checkbox", href: "#icon-checkbox" },
  { label: "#Label Checkbox", href: "#checkbox-label" },
  { label: "#Checkbox Size", href: "#checkbox-size" },
  { label: "#Checkbox Color", href: "#checkbox-color" },
  { label: "#Controlled Checkbox", href: "#controlled-checkbox" },
  { label: "#Indeterminate State", href: "#indeterminate-state" },
  { label: "#Checkbox Group", href: "#checkbox-group" },
  { label: "#Label Placement", href: "#label-placement-options" },
  { label: "#Custom Checkbox", href: "#custom-checkbox" },
  { label: "<Checkbox />", href: "#checkbox-api" },
  { label: "<FormControl />", href: "#form-control-api" },
  { label: "<FormControlLabel />", href: "#form-control-label-api" },
  { label: "<FormGroup />", href: "#form-group-api" },
  { label: "<FormLabel />", href: "#form-label-api" },
];

export const checkboxSections = [
  {
    id: "use-cases",
    title: "#Use Cases",
    subtitle: null,
    source: BasicCheckboxesSrc,
    view: BasicCheckboxesView,
  },
  {
    id: "checkbox-group",
    title: "#Checkbox Group",
    subtitle: "Grouped checkboxes with label, required, and disabled options.",
    source: CheckboxGroupSrc,
    view: CheckboxGroupView,
  },
  {
    id: "size-options",
    title: "#Size Options",
    subtitle: "Display checkboxes in various sizes to suit different layouts.",
    source: SizeOptionsSrc,
    view: SizeOptionsView,
  },
  {
    id: "colors",
    title: "#Colors",
    subtitle: "Checkboxes with different color themes for customization.",
    source: ColorsSrc,
    view: ColorsView,
  },
  {
    id: "icon-toggle",
    title: "#Icon Toggle",
    subtitle: "Customize checkboxes with icons for specific contexts.",
    source: IconToggleSrc,
    view: IconToggleView,
  },
  {
    id: "state-control",
    title: "#State Control",
    subtitle: "Demonstrate a controlled checkbox that toggles its state.",
    source: StateControlSrc,
    view: StateControlView,
  },

  {
    id: "indeterminate-selection",
    title: "#Indeterminate Selection",
    subtitle: "A parent checkbox controls the selection of child options.",
    source: IndeterminateSrc,
    view: IndeterminateView,
  },
  {
    id: "validation-example",
    title: "#Validation Example",
    subtitle: "A checkbox group that validates if two options are selected.",
    source: ValidationExampleSrc,
    view: ValidationExampleView,
  },
  {
    id: "positioning-labels",
    title: "#Positioning Labels",
    subtitle: "Display labels in different positions around the checkbox.",
    source: PositioningLabelsSrc,
    view: PositioningLabelsView,
  },
  {
    id: "styled-checkboxes",
    title: "#Styled Checkboxes",
    subtitle: "Customize checkbox styles for a unique look.",
    source: CustomizationSrc,
    view: CustomizationView,
  },

  {
    id: "checkbox-api",
    title: "<Checkbox />",
    isApi: true,
    componentProps: checkboxProps,
  },
  {
    id: "form-control-api",
    title: "<FormControl />",
    isApi: true,
    componentProps: formControlProps,
  },
  {
    id: "form-control-label-api",
    title: "<FormControlLabel />",
    isApi: true,
    componentProps: formControlLabelProps,
  },
  {
    id: "form-group-api",
    title: "<FormGroup />",
    isApi: true,
    componentProps: formGroupProps,
  },
  {
    id: "form-label-api",
    title: "<FormLabel />",
    isApi: true,
    componentProps: formLabelProps,
  },
];
