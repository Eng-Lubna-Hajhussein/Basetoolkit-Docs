import {
  View as CountrySelectView,
  source as CountrySelectSrc,
} from "./../../../UIComponents/Docs/Autocomplete/UseCases";
import {
  View as GroupedView,
  source as GroupedSrc,
} from "./../../../UIComponents/Docs/Autocomplete/Grouped";
import {
  View as ControlledStatesView,
  source as ControlledStatesSrc,
} from "./../../../UIComponents/Docs/Autocomplete/ControlledStates";
import {
  View as FixedOptionsView,
  source as FixedOptionsSrc,
} from "./../../../UIComponents/Docs/Autocomplete/FixedOptions";
import {
  View as DisabledOptionsView,
  source as DisabledOptionsSrc,
} from "./../../../UIComponents/Docs/Autocomplete/DisabledOptions";
import {
  View as LimitTagsView,
  source as LimitTagsSrc,
} from "./../../../UIComponents/Docs/Autocomplete/LimitTags";
import {
  View as CustomHighlightView,
  source as CustomHighlightSrc,
} from "./../../../UIComponents/Docs/Autocomplete/CustomHighlight";
import {
  View as CreatableView,
  source as CreatableSrc,
} from "./../../../UIComponents/Docs/Autocomplete/Creatable";
import {
  View as AsyncRequestsView,
  source as AsyncRequestsSrc,
} from "./../../../UIComponents/Docs/Autocomplete/AsyncRequests";
import {
  View as CheckboxOptionView,
  source as CheckboxOptionSrc,
} from "./../../../UIComponents/Docs/Autocomplete/CheckboxOption";

import {
  autocompleteProps,
  textFieldProps,
} from "../../Api/PropsApi/constants";

export const autocompleteContent = [
  { label: "#Country Selector", href: "#country-selector" },
  { label: "#Interactive Playground", href: "#interactive-playground" },
  { label: "#Google Maps Places", href: "#google-maps-places" },
  { label: "#GitHub Picker", href: "#github-picker" },
  { label: "#Controlled Inputs", href: "#controlled-inputs" },
  { label: "#Free Solo Input", href: "#free-solo-input" },
  { label: "#Add Option Creatable", href: "#add-option-creatable" },
  { label: "#Creatable with Dialog", href: "#creatable-with-dialog" },
  { label: "#Disabled Options", href: "#disabled-options" },
  { label: "#Async Load Open", href: "#async-load-open" },
  { label: "#Search As You Type", href: "#search-as-you-type" },
  { label: "#Multiple Value Tags", href: "#multiple-value-tags" },
  { label: "#Fixed Tag Options", href: "#fixed-tag-options" },
  { label: "#Checkbox Options", href: "#checkbox-options" },
  { label: "#Limit Displayed Tags", href: "#limit-displayed-tags" },
  { label: "#Text Highlights", href: "#text-highlights" },
  { label: "<Autocomplete />", href: "#autocomplete-api" },
  { label: "<TextField />", href: "#textfield-api" },
];

export const autocompleteSections = [
  {
    id: "use-cases",
    title: "#Use Cases",
    subtitle:
      "Explore diverse Autocomplete use cases, demonstrating customizable interactions from basic selections to advanced behaviors for tailored user experiences.",
    source: CountrySelectSrc,
    view: CountrySelectView,
  },
  {
    id: "grouped",
    title: "#Grouped",
    subtitle: "Groups options based on the continent they belong to.",
    source: GroupedSrc,
    view: GroupedView,
  },
  {
    id: "controlled-states",
    title: "#Controlled States",
    subtitle:
      "This example demonstrates how to use controlled states to manage both selected values and input values independently in the Autocomplete component.",
    source: ControlledStatesSrc,
    view: ControlledStatesView,
  },
  {
    id: "disabled-options",
    title: "#Disabled Options",
    subtitle:
      "Demonstrates how to disable specific options in the Autocomplete list.",
    source: DisabledOptionsSrc,
    view: DisabledOptionsView,
  },
  {
    id: "fixed-options",
    title: "#Fixed Options",
    subtitle:
      "This demo showcases how to fix certain options so they cannot be removed by the user.",
    source: FixedOptionsSrc,
    view: FixedOptionsView,
  },
  {
    id: "limit-tags",
    title: "#Limit Tags",
    subtitle:
      "Example of limiting the number of visible tags when multiple selections are enabled.",
    source: LimitTagsSrc,
    view: LimitTagsView,
  },
  {
    id: "custom-highlight",
    title: "#Custom Highlight",
    subtitle:
      "Demonstrates custom text highlighting in Autocomplete options using the highlightMatch function.",
    source: CustomHighlightSrc,
    view: CustomHighlightView,
  },
  {
    id: "creatable-options",
    title: "#Creatable Options",
    subtitle:
      "Enables creating new options not listed in the dropdown, using a dialog to capture additional details. Ideal for user-defined entries, expanding beyond predefined choices.",
    source: CreatableSrc,
    view: CreatableView,
  },
  {
    id: "async-data-fetch",
    title: "#Async Data Fetch",
    subtitle:
      "Demonstrates asynchronous fetching of options on dropdown open. Useful for loading large datasets or dynamic content based on user input, with loading indicators for a smooth experience.",
    source: AsyncRequestsSrc,
    view: AsyncRequestsView,
  },
  {
    id: "checkbox-selection",
    title: "#Checkbox Selection",
    subtitle:
      "Allows users to select multiple options using checkboxes in the dropdown. Perfect for scenarios where multiple selections are required, with real-time updates on selected items.",
    source: CheckboxOptionSrc,
    view: CheckboxOptionView,
  },
  {
    id: "autocomplete-api",
    title: "<Autocomplete />",
    isApi: true,
    componentProps: autocompleteProps,
  },
  {
    id: "textfield-api",
    title: "<TextField />",
    isApi: true,
    componentProps: textFieldProps,
  },
];
