import { linkProps } from "../../Api/PropsApi/constants";
import {
  View as BasicLinksView,
  source as BasicLinksSrc,
} from "./../../../UIComponents/Docs/Link/BasicLinks";
import {
  View as UnderlineView,
  source as UnderlineSrc,
} from "./../../../UIComponents/Docs/Link/Underline";

export const linkContent = [
  { label: "#Basic Links", href: "#basic-links" },
  { label: "#Underline Style", href: "#underline-style" },
  { label: "<Link />", href: "#link-api" },
];

export const linkSections = [
  {
    id: "basic-links",
    title: "#Basic Links",
    subtitle: null,
    source: BasicLinksSrc,
    view: BasicLinksView,
  },
  {
    id: "underline-style",
    title: "#Underline Style",
    subtitle: "Use the underline prop to control link underline styling.",
    source: UnderlineSrc,
    view: UnderlineView,
  },
  {
    id: "link-api",
    title: "<Link />",
    isApi: true,
    componentProps: linkProps,
  },
];
