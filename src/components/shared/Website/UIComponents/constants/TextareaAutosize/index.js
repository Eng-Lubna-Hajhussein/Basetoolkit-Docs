import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../UIComponents/Docs/TextareaAutosize/BasicUsage";
import {
  View as MinimumHeightView,
  source as MinimumHeightSrc,
} from "./../../../UIComponents/Docs/TextareaAutosize/MinimumHeight";
import {
  View as MaximumHeightView,
  source as MaximumHeightSrc,
} from "./../../../UIComponents/Docs/TextareaAutosize/MaximumHeight";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/TextareaAutosize/Customization";
import { baseTextareaAutosizeProps } from "../../Api/PropsApi/constants";

export const textareaAutosizeContent = [
  { label: "#Basic Usage", href: "#basic-usage" },
  { label: "#Minimum Height", href: "#minimum-height" },
  { label: "#Maximum Height", href: "#maximum-height" },
  { label: "#Customization", href: "#customization" },
  { label: "<BaseTextareaAutosize />", href: "#base-textarea-autosize-api" },
];

export const textareaAutosizeSections = [
  {
    id: "basic-usage",
    title: "#Basic Usage",
    subtitle: null,
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "minimum-height",
    title: "#Minimum Height",
    subtitle: "Set a lower limit for the component height with minRows:",
    source: MinimumHeightSrc,
    view: MinimumHeightView,
  },
  {
    id: "maximum-height",
    title: "#Maximum Height",
    subtitle: "Set an upper limit for the component height with maxRows:",
    source: MaximumHeightSrc,
    view: MaximumHeightView,
  },
  {
    id: "customization",
    title: "#Customization",
    subtitle: null,
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "base-textarea-autosize-api",
    title: "<BaseTextareaAutosize />",
    isApi: true,
    componentProps: baseTextareaAutosizeProps,
  },
];
