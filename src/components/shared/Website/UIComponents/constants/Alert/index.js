import {
  View as BasicAlertView,
  source as BasicAlertSrc,
} from "./../../../UIComponents/Docs/Alert/BasicAlert";
import {
  View as SeverityView,
  source as SeveritySrc,
} from "./../../../UIComponents/Docs/Alert/Severity";
import {
  View as FilledView,
  source as FilledSrc,
} from "./../../../UIComponents/Docs/Alert/Filled";
import {
  View as OutlinedView,
  source as OutlinedSrc,
} from "./../../../UIComponents/Docs/Alert/Outlined";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/Alert/Color";
import {
  View as ActionsView,
  source as ActionsSrc,
} from "./../../../UIComponents/Docs/Alert/Actions";
import {
  View as IconMappingView,
  source as IconMappingSrc,
} from "./../../../UIComponents/Docs/Alert/IconMapping";
import {
  View as AlertTitleView,
  source as AlertTitleSrc,
} from "./../../../UIComponents/Docs/Alert/AlertTitle";
import {
  View as TransitionsView,
  source as TransitionsSrc,
} from "./../../../UIComponents/Docs/Alert/Transitions";
import { alertProps, alertTitleProps } from "../../Api/PropsApi/constants";

export const alertContent = [
  { label: "#Basic Alert", href: "#basic-alert" },
  { label: "#Severity Levels", href: "#severity-levels" },
  { label: "#Filled Alerts", href: "#filled-alerts" },
  { label: "#Outlined Alerts", href: "#outlined-alerts" },
  { label: "#Custom Colors", href: "#custom-colors" },
  { label: "#Alert Actions", href: "#alert-actions" },
  { label: "#Icon Overrides", href: "#icon-overrides" },
  { label: "#Title Alert", href: "#title-alert" },
  { label: "#Alert Transitions", href: "#alert-transitions" },
  { label: "<Alert />", href: "#alert-api" },
  { label: "<AlertTitle />", href: "#alert-title-api" },
];

export const alertSections = [
  {
    id: "basic-alert",
    title: "#Basic Alert",
    subtitle: null,
    source: BasicAlertSrc,
    view: BasicAlertView,
  },
  {
    id: "severity-levels",
    title: "#Severity Levels",
    subtitle:
      "Choose from success, info, warning, or error severity options, each with unique icon and color.",
    source: SeveritySrc,
    view: SeverityView,
  },
  {
    id: "filled-alerts",
    title: "#Filled Alerts",
    subtitle: null,
    source: FilledSrc,
    view: FilledView,
  },
  {
    id: "outlined-alerts",
    title: "#Outlined Alerts",
    subtitle: null,
    source: OutlinedSrc,
    view: OutlinedView,
  },
  {
    id: "custom-colors",
    title: "#Custom Colors",
    subtitle: "Use color prop to set a custom color regardless of severity.",
    source: ColorSrc,
    view: ColorView,
  },
  {
    id: "alert-actions",
    title: "#Alert Actions",
    subtitle: "Add interactive elements with the action prop.",
    source: ActionsSrc,
    view: ActionsView,
  },
  {
    id: "icon-overrides",
    title: "#Icon Overrides",
    subtitle: "Override icons by severity level using the iconMapping prop.",
    source: IconMappingSrc,
    view: IconMappingView,
  },
  {
    id: "title-alert",
    title: "#Title Alert",
    subtitle: "Add a title to an Alert using the AlertTitle component.",
    source: AlertTitleSrc,
    view: AlertTitleView,
  },
  {
    id: "alert-transitions",
    title: "#Alert Transitions",
    subtitle:
      "Add motion to an Alert's entrance/exit with transitions like Collapse.",
    source: TransitionsSrc,
    view: TransitionsView,
  },
  {
    id: "alert-api",
    title: "<Alert />",
    isApi: true,
    componentProps: alertProps,
  },
  {
    id: "alert-title-api",
    title: "<AlertTitle />",
    isApi: true,
    componentProps: alertTitleProps,
  },
];
