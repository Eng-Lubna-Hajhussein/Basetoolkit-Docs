import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../UIComponents/Docs/TimeField/BasicUsage";
import {
  View as UncontrolledVSControlledView,
  source as UncontrolledVSControlledSrc,
} from "./../../../UIComponents/Docs/TimeField/UncontrolledVSControlled";
import {
  View as ShowSecondsView,
  source as ShowSecondsSrc,
} from "./../../../UIComponents/Docs/TimeField/ShowSeconds";
import { timeFieldProps } from "../../Api/PropsApi/constants";

export const timeFieldContent = [
  { label: "#Basic Usage", href: "#basic-usage" },
  {
    label: "#Controlled Time Field Value",
    href: "#controlled-time-field-value",
  },
  { label: "#TimeField with Seconds", href: "#time-field-with-seconds" },
  { label: "<TimeField />", href: "#time-field-api" },
];

export const timeFieldSections = [
  {
    id: "basic-usage",
    title: "#Basic Usage",
    subtitle: null,
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "controlled-time-field-value",
    title: "#Controlled Time Field Value",
    subtitle:
      "Manage the component’s value using controlled or uncontrolled behavior.",
    source: UncontrolledVSControlledSrc,
    view: UncontrolledVSControlledView,
  },
  {
    id: "time-field-with-seconds",
    title: "#TimeField with Seconds",
    subtitle:
      "This example showcases a TimeField with seconds enabled, allowing users to select time down to the second.",
    source: ShowSecondsSrc,
    view: ShowSecondsView,
  },
  {
    id: "time-field-api",
    title: "<TimeField />",
    isApi: true,
    componentProps: timeFieldProps,
  },
];
