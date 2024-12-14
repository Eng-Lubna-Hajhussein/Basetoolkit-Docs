import {
  View as UsageView,
  source as UsageSrc,
} from "./../../../UIComponents/Docs/Typography/Usage";
import {
  View as ThemeKeysView,
  source as ThemeKeysSrc,
} from "./../../../UIComponents/Docs/Typography/ThemeKeys";
import { typographyProps } from "../../Api/PropsApi/constants";


export const typographyContent = [
  { label: "#Typography Use", href: "#typography-use" },
  { label: "#Theme Typography", href: "#theme-typography" },
  { label: "<Typography />", href: "#typography-api" },
];

export const typographySections = [
  {
    id: "typography-use",
    title: "#Typography Use",
    subtitle: null,
    source: UsageSrc,
    view: UsageView,
  },
  {
    id: "theme-typography",
    title: "#Theme Typography",
    subtitle:
      "When unable to use the Typography component, try using theme keys for styling.",
    source: ThemeKeysSrc,
    view: ThemeKeysView,
  },
  {
    id: "typography-api",
    title: "<Typography />",
    isApi: true,
    componentProps: typographyProps,
  },
];
