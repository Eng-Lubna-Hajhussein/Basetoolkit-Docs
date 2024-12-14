import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../UIComponents/Docs/DateCalendar/BasicUsage";
import {
  View as UncontrolledVSControlledView,
  source as UncontrolledVSControlledSrc,
} from "./../../../UIComponents/Docs/DateCalendar/UncontrolledVSControlled";
import {
  View as DisableFutureView,
  source as DisableFutureSrc,
} from "./../../../UIComponents/Docs/DateCalendar/DisableFuture";
import {
  View as DisablePastView,
  source as DisablePastSrc,
} from "./../../../UIComponents/Docs/DateCalendar/DisablePast";
import {
  View as FormPropsView,
  source as FormPropsSrc,
} from "./../../../UIComponents/Docs/DateCalendar/FormProps";
import {
  View as MaxDateView,
  source as MaxDateSrc,
} from "./../../../UIComponents/Docs/DateCalendar/MaxDate";
import {
  View as MinDateView,
  source as MinDateSrc,
} from "./../../../UIComponents/Docs/DateCalendar/MinDate";
import {
  View as MinMaxDateRangeView,
  source as MinMaxDateRangeSrc,
} from "./../../../UIComponents/Docs/DateCalendar/MinMaxDateRange";
import { dateCalendarProps } from "../../Api/PropsApi/constants";


export const dateCalendarContent = [
  { label: "#Basic Calendar", href: "#basic-calendar" },
  { label: "#Controlled Calendar", href: "#controlled-calendar" },
  { label: "#Form Props", href: "#form-props" },
  { label: "#Past Dates Disabled", href: "#past-dates-disabled" },
  { label: "#Future Dates Disabled", href: "#future-dates-disabled" },
  { label: "#Minimum Date Set", href: "#minimum-date-set" },
  { label: "#Maximum Date Set", href: "#maximum-date-set" },
  { label: "#Date Range Limit", href: "#date-range-limit" },
  { label: "<DateCalendar />", href: "#date-calendar-api" },
];

export const dateCalendarSections = [
  {
    id: "basic-calendar",
    title: "#Basic Calendar",
    subtitle: null,
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "controlled-calendar",
    title: "#Controlled Calendar",
    subtitle:
      "Manage the calendar’s value as either controlled or uncontrolled.",
    source: UncontrolledVSControlledSrc,
    view: UncontrolledVSControlledView,
  },
  {
    id: "form-props",
    title: "#Form Props",
    subtitle: "The component can be disabled or read-only.",
    source: FormPropsSrc,
    view: FormPropsView,
  },
  {
    id: "past-dates-disabled",
    title: "#Past Dates Disabled",
    subtitle: "Disable all past dates, allowing only future dates.",
    source: DisablePastSrc,
    view: DisablePastView,
  },
  {
    id: "future-dates-disabled",
    title: "#Future Dates Disabled",
    subtitle: "Disable all future dates, allowing only past dates.",
    source: DisableFutureSrc,
    view: DisableFutureView,
  },
  {
    id: "minimum-date-set",
    title: "#Minimum Date Set",
    subtitle: "Restrict selection to dates starting from a minimum date (Select a date after Sept 1, 2023).",
    source: MinDateSrc,
    view: MinDateView,
  },
  {
    id: "maximum-date-set",
    title: "#Maximum Date Set",
    subtitle: "Restrict selection to dates up until a maximum date (Select a date before Dec 31, 2024).",
    source: MaxDateSrc,
    view: MaxDateView,
  },
  {
    id: "date-range-limit",
    title: "#Date Range Limit",
    subtitle:
      "Limit the calendar to only select dates within a specific range (Select a date between Nov 1, 2024 and Nov 21, 2024).",
    source: MinMaxDateRangeSrc,
    view: MinMaxDateRangeView,
  },
  {
    id: "date-calendar-api",
    title: "<DateCalendar />",
    isApi: true,
    componentProps: dateCalendarProps,
  },
];
