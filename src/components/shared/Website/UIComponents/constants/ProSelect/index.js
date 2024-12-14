import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../UIComponents/Docs/ProSelect/BasicUsage";
import {
  View as MultipleSelectionView,
  source as MultipleSelectionSrc,
} from "./../../../UIComponents/Docs/ProSelect/MultipleSelection";
import {
  View as CustomSeparatorsView,
  source as CustomSeparatorsSrc,
} from "./../../../UIComponents/Docs/ProSelect/CustomSeparators";
import { proSelectProps } from "../../Api/PropsApi/constants";

export const proSelectContent = [
  { label: "#Basic Usage", href: "#basic-usage" },
  { label: "#Multiple Selection", href: "#multiple-selection" },
  { label: "#Custom Tags", href: "#custom-tags" },
  { label: "<ProSelect />", href: "#pro-select-api" },
];

export const proSelectSections = [
  {
    id: "basic-usage",
    title: "#Basic Usage",
    subtitle: "Start with basic usage of the pro select component.",
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "multiple-selection",
    title: "#Multiple Selection",
    subtitle: "Allow users to select multiple options.",
    source: MultipleSelectionSrc,
    view: MultipleSelectionView,
  },
  {
    id: "custom-tags",
    title: "#Custom Tags",
    subtitle: "Define custom tags or separators within the select field.",
    source: CustomSeparatorsSrc,
    view: CustomSeparatorsView,
  },
  {
    id: "pro-select-api",
    title: "<ProSelect />",
    isApi: true,
    componentProps: proSelectProps,
  },
];
