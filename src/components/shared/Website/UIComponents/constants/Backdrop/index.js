import { backdropProps } from "../../Api/PropsApi/constants";
import {
  View as ExampleView,
  source as ExampleSrc,
} from "./../../../UIComponents/Docs/Backdrop/Example";

export const backdropContent = [
  { label: "#Usage", href: "#usage" },
  { label: "<Backdrop />", href: "#backdrop-api" },
];

export const backdropSections = [
  {
    id: "usage",
    title: "#Usage",
    subtitle:
      "This example shows a Backdrop with a loading spinner. Click Show Backdrop, then tap anywhere to close it.",
    source: ExampleSrc,
    view: ExampleView,
  },
  {
    id: "backdrop-api",
    title: "<Backdrop />",
    isApi: true,
    componentProps: backdropProps,
  },
];
