import { boxProps } from "../../Api/PropsApi/constants";
import {
  View as BasicBoxView,
  source as BasicBoxSrc,
} from "./../../../UIComponents/Docs/Box/BasicBox";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Box/Customization";

export const boxContent = [
  { label: "#Basic Box", href: "#basic-box" },
  { label: "#Styled Box", href: "#styled-box" },
  { label: "<Box />", href: "#box-api" },
];

export const boxSections = [
  {
    id: "basic-box",
    title: "#Basic Box",
    subtitle: null,
    source: BasicBoxSrc,
    view: BasicBoxView,
  },
  {
    id: "styled-box",
    title: "#Styled Box",
    subtitle: "Customizing Box component styling.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "box-api",
    title: "<Box />",
    isApi: true,
    componentProps: boxProps,
  },
];
