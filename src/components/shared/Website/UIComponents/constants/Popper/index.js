import { popperProps } from "../../Api/PropsApi/constants";
import {
  View as BasicPopperView,
  source as BasicPopperSrc,
} from "./../../../UIComponents/Docs/Popper/BasicPopper";
import {
  View as PositionedPopperView,
  source as PositionedPopperSrc,
} from "./../../../UIComponents/Docs/Popper/PositionedPopper";
import {
  View as TextHighlightView,
  source as TextHighlightSrc,
} from "./../../../UIComponents/Docs/Popper/TextHighlight";

export const popperContent = [
  { label: "#Basic Popper", href: "#basic-popper" },
  { label: "#Positioned Popper", href: "#positioned-popper" },
  { label: "#Virtual Element", href: "#virtual-element" },
  { label: "<Popper />", href: "#popper-api" },
];

export const popperSections = [
  {
    id: "basic-popper",
    title: "#Basic Popper",
    subtitle: null,
    source: BasicPopperSrc,
    view: BasicPopperView,
  },
  {
    id: "positioned-popper",
    title: "#Positioned Popper",
    subtitle: null,
    source: PositionedPopperSrc,
    view: PositionedPopperView,
  },
  {
    id: "virtual-element",
    title: "#Virtual Element",
    subtitle:
      "AnchorEl prop can reference a simulated DOM object with the VirtualElement shape.",
    source: TextHighlightSrc,
    view: TextHighlightView,
  },
  {
    id: "popper-api",
    title: "<Popper />",
    isApi: true,
    componentProps: popperProps,
  },
];
