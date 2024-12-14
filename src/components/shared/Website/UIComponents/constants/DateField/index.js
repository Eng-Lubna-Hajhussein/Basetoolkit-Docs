import { dateFieldProps } from "../../Api/PropsApi/constants";
import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../UIComponents/Docs/DateField/BasicUsage";
import {
  View as UncontrolledVSControlledView,
  source as UncontrolledVSControlledSrc,
} from "./../../../UIComponents/Docs/DateField/UncontrolledVSControlled";

export const dateFieldContent = [
  { label: "#Basic Functionality", href: "#basic-functionality" },
  { label: "#Controlled Calendar Value", href: "#controlled-calendar-value" },
  { label: "<DateField />", href: "#date-field-api" },
];

export const dateFieldSections = [
  {
    id: "basic-functionality",
    title: "#Basic Functionality",
    subtitle:
      "This example demonstrates the essential functionality of the Date Field.",
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "controlled-calendar-value",
    title: "#Controlled Calendar Value",
    subtitle:
      "Manage the component’s value using controlled or uncontrolled behavior.",
    source: UncontrolledVSControlledSrc,
    view: UncontrolledVSControlledView,
  },
  {
    id: "date-field-api",
    title: "<DateField />",
    isApi: true,
    componentProps: dateFieldProps,
  },
];
