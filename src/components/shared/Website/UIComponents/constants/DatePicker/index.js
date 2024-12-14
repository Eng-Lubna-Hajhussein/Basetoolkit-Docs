import {
  View as BasicUsageView,
  source as BasicUsageSrc,
} from "./../../../UIComponents/Docs/DatePicker/BasicUsage";
import {
  View as UncontrolledVSControlledView,
  source as UncontrolledVSControlledSrc,
} from "./../../../UIComponents/Docs/DatePicker/UncontrolledVSControlled";
import {
  View as ColorsView,
  source as ColorsSrc,
} from "./../../../UIComponents/Docs/DatePicker/Colors";
import {
  View as DisableFutureView,
  source as DisableFutureSrc,
} from "./../../../UIComponents/Docs/DatePicker/DisableFuture";
import {
  View as DisablePastView,
  source as DisablePastSrc,
} from "./../../../UIComponents/Docs/DatePicker/DisablePast";
import {
  View as FormPropsView,
  source as FormPropsSrc,
} from "./../../../UIComponents/Docs/DatePicker/FormProps";
import {
  View as MaxDateView,
  source as MaxDateSrc,
} from "./../../../UIComponents/Docs/DatePicker/MaxDate";
import {
  View as MinDateView,
  source as MinDateSrc,
} from "./../../../UIComponents/Docs/DatePicker/MinDate";
import {
  View as MinMaxDateRangeView,
  source as MinMaxDateRangeSrc,
} from "./../../../UIComponents/Docs/DatePicker/MinMaxDateRange";
import {
  View as MobileDatePickerView,
  source as MobileDatePickerSrc,
} from "./../../../UIComponents/Docs/DatePicker/MobileDatePicker";
import { datePickerProps, mobileDatePickerProps } from "../../Api/PropsApi/constants";

export const datePickerContent = [
  { label: "#Simple Usage", href: "#simple-usage" },
  { label: "#Controlled Value", href: "#controlled-value" },
  { label: "#Date Picker Colors", href: "#date-picker-colors" },
  { label: "#Form Props", href: "#form-props" },
  { label: "#Past Dates Disabled", href: "#past-dates-disabled" },
  { label: "#Future Dates Disabled", href: "#future-dates-disabled" },
  { label: "#Minimum Date Set", href: "#minimum-date-set" },
  { label: "#Maximum Date Set", href: "#maximum-date-set" },
  { label: "#Date Range Limit", href: "#date-range-limit" },
  { label: "#Mobile Picker", href: "#mobile-picker" },
  { label: "<DatePicker />", href: "#date-picker-api" },
  { label: "<MobileDatePicker />", href: "#mobile-date-picker-api" },
];

export const datePickerSections = [
  {
    id: "simple-usage",
    title: "#Simple Usage",
    subtitle: null,
    source: BasicUsageSrc,
    view: BasicUsageView,
  },
  {
    id: "controlled-value",
    title: "#Controlled Value",
    subtitle: "The component's value can be either controlled or uncontrolled.",
    source: UncontrolledVSControlledSrc,
    view: UncontrolledVSControlledView,
  },
  {
    id: "date-picker-colors",
    title: "#Date Picker Colors",
    subtitle: null,
    source: ColorsSrc,
    view: ColorsView,
  },
  {
    id: "form-props",
    title: "#Form Props",
    subtitle: "The component can be disabled or set as read-only.",
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
    subtitle: "Restrict selection to dates starting from a minimum date (in this example select a date after Sept 1, 2023).",
    source: MinDateSrc,
    view: MinDateView,
  },
  {
    id: "maximum-date-set",
    title: "#Maximum Date Set",
    subtitle: "Restrict selection to dates up until a maximum date (in this example select a date before Dec 31, 2024).",
    source: MaxDateSrc,
    view: MaxDateView,
  },
  {
    id: "date-range-limit",
    title: "#Date Range Limit",
    subtitle: "Limit the picker to only select dates within a specific range (Select a date between Nov 1, 2024 and Nov 15, 2024).",
    source: MinMaxDateRangeSrc,
    view: MinMaxDateRangeView,
  },
  {
    id: "mobile-picker",
    title: "#Mobile Picker",
    subtitle: null,
    source: MobileDatePickerSrc,
    view: MobileDatePickerView,
  },
  {
    id: "date-picker-api",
    title: "<DatePicker />",
    isApi: true,
    componentProps: datePickerProps,
  },
  {
    id: "mobile-date-picker-api",
    title: "<MobileDatePicker />",
    isApi: true,
    componentProps: mobileDatePickerProps,
  },
];
