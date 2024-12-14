import { clickAwayListenerProps } from "../../Api/PropsApi/constants";
import {
  View as UsageView,
  source as UsageSrc,
} from "./../../../UIComponents/Docs/ClickAwayListener/Usage";

export const clickAwayListenerContent = [
  { label: "#Usage", href: "#usage" },
  { label: "<ClickAwayListener />", href: "#click-away-listener-api" },
];

export const clickAwayListenerSections = [
  {
    id: "uage",
    title: "#Usage",
    subtitle: null,
    source: UsageSrc,
    view: UsageView,
  },
  {
    id: "click-away-listener-api",
    title: "<ClickAwayListener />",
    isApi: true,
    componentProps: clickAwayListenerProps,
  },
];
