import { modalProps } from "../../Api/PropsApi/constants";
import {
  View as BasicModalView,
  source as BasicModalSrc,
} from "./../../../UIComponents/Docs/Modal/BasicModal";
import {
  View as NestedModalView,
  source as NestedModalSrc,
} from "./../../../UIComponents/Docs/Modal/NestedModal";

export const modalContent = [
  { label: "#Simple Modal", href: "#simple-modal" },
  { label: "#Layered Modal", href: "#layered-modal" },
  { label: "<Modal />", href: "#modal-api" },
];

export const modalSections = [
  {
    id: "simple-modal",
    title: "#Simple Modal",
    subtitle: null,
    source: BasicModalSrc,
    view: BasicModalView,
  },
  {
    id: "layered-modal",
    title: "#Layered Modal",
    subtitle: null,
    source: NestedModalSrc,
    view: NestedModalView,
  },
  {
    id: "modal-api",
    title: "<Modal />",
    isApi: true,
    componentProps: modalProps,
  },
];
