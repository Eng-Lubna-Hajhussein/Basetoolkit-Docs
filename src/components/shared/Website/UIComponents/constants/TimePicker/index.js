import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../UIComponents/Docs/TimePicker/BasicUsage";
import {
  View as UncontrolledVSControlledView,
  source as UncontrolledVSControlledSrc,
} from "./../../../UIComponents/Docs/TimePicker/UncontrolledVSControlled";
import {
  View as ShowSecondsView,
  source as ShowSecondsSrc,
} from "./../../../UIComponents/Docs/TimePicker/ShowSeconds";
import { timePickerProps } from "../../Api/PropsApi/constants";

export const timePickerContent = [
  { label: "#Basic Usage", href: "#basic-usage" },
  {
    label: "#Controlled Time Picker Value",
    href: "#controlled-time-picker-value",
  },
  { label: "#TimePicker with Seconds", href: "#time-picker-with-seconds" },
  { label: "<TimePicker />", href: "#time-picker-api" },
];

export const timePickerSections = [
  {
    id: "basic-usage",
    title: "#Basic Usage",
    subtitle: null,
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "controlled-time-picker-value",
    title: "#Controlled Time Picker Value",
    subtitle:
      "Manage the component’s value using controlled or uncontrolled behavior.",
    source: UncontrolledVSControlledSrc,
    view: UncontrolledVSControlledView,
  },
  {
    id: "time-picker-with-seconds",
    title: "#TimePicker with Seconds",
    subtitle:
      "This example showcases a TimePicker with seconds enabled, allowing users to select time down to the second.",
    source: ShowSecondsSrc,
    view: ShowSecondsView,
  },
  {
    id: "time-picker-api",
    title: "<TimePicker />",
    isApi: true,
    componentProps: timePickerProps,
  },
];
