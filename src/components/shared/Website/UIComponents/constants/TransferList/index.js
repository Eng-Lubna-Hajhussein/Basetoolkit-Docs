import { listItemProps, listProps } from "../../Api/PropsApi/constants";
import {
  View as BasicTransferListView,
  source as BasicTransferListSrc,
} from "./../../../UIComponents/Docs/TransferList/BasicTransferList";
import {
  View as EnhancedTransferListView,
  source as EnhancedTransferListSrc,
} from "./../../../UIComponents/Docs/TransferList/EnhancedTransferList";

export const transferListContent = [
  { label: "#Standard Transfer", href: "#standard-transfer" },
  { label: "#Advanced Transfer", href: "#advanced-transfer" },
  { label: "<List />", href: "#list-api" },
  { label: "<ListItem />", href: "#list-item-api" },
];

export const transferListSections = [
  {
    id: "standard-transfer",
    title: "#Standard Transfer",
    subtitle: `A basic implementation of transfer functionality with "move all" controls for completeness.`,
    source: BasicTransferListSrc,
    view: BasicTransferListView,
  },
  {
    id: "advanced-transfer",
    title: "#Advanced Transfer",
    subtitle: `Enhanced with "select all" checkboxes and real-time item counting for an optimized experience.`,
    source: EnhancedTransferListSrc,
    view: EnhancedTransferListView,
  },
  {
    id: "list-api",
    title: "<List />",
    isApi: true,
    componentProps: listProps,
  },
  {
    id: "list-item-api",
    title: "<ListItem />",
    isApi: true,
    componentProps: listItemProps,
  },
];
