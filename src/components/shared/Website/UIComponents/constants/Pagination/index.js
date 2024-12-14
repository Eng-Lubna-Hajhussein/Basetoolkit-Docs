import {
  View as BasicPaginationView,
  source as BasicPaginationSrc,
} from "./../../../UIComponents/Docs/Pagination/BasicPagination";
import {
  View as OutlinedPaginationView,
  source as OutlinedPaginationSrc,
} from "./../../../UIComponents/Docs/Pagination/OutlinedPagination";
import {
  View as RoundedPaginationView,
  source as RoundedPaginationSrc,
} from "./../../../UIComponents/Docs/Pagination/RoundedPagination";
import {
  View as PaginationSizeView,
  source as PaginationSizeSrc,
} from "./../../../UIComponents/Docs/Pagination/PaginationSize";
import {
  View as ButtonsView,
  source as ButtonsSrc,
} from "./../../../UIComponents/Docs/Pagination/Buttons";
import {
  View as CustomIconsView,
  source as CustomIconsSrc,
} from "./../../../UIComponents/Docs/Pagination/CustomIcons";
import {
  View as ControlledPaginationView,
  source as ControlledPaginationSrc,
} from "./../../../UIComponents/Docs/Pagination/ControlledPagination";
import { paginationProps } from "../../Api/PropsApi/constants";

export const paginationContent = [
  { label: "#Basic Pagination", href: "#basic-pagination" },
  { label: "#Outlined Style", href: "#outlined-style" },
  { label: "#Rounded Style", href: "#rounded-style" },
  { label: "#Pagination Sizes", href: "#pagination-sizes" },
  { label: "#Extra Buttons", href: "#extra-buttons" },
  { label: "#Custom Icons", href: "#custom-icons" },
  { label: "#Controlled Pagination", href: "#controlled-pagination" },
  { label: "<Pagination />", href: "#pagination-api" },
];

export const paginationSections = [
  {
    id: "basic-pagination",
    title: "#Basic Pagination",
    subtitle: null,
    source: BasicPaginationSrc,
    view: BasicPaginationView,
  },
  {
    id: "outlined-style",
    title: "#Outlined Style",
    subtitle: null,
    source: OutlinedPaginationSrc,
    view: OutlinedPaginationView,
  },
  {
    id: "rounded-style",
    title: "#Rounded Style",
    subtitle: null,
    source: RoundedPaginationSrc,
    view: RoundedPaginationView,
  },
  {
    id: "pagination-sizes",
    title: "#Pagination Sizes",
    subtitle: null,
    source: PaginationSizeSrc,
    view: PaginationSizeView,
  },
  {
    id: "extra-buttons",
    title: "#Extra Buttons",
    subtitle: "Enable first, last, previous, or next page controls optionally.",
    source: ButtonsSrc,
    view: ButtonsView,
  },
  {
    id: "custom-icons",
    title: "#Custom Icons",
    subtitle: "Customize pagination control icons as needed.",
    source: CustomIconsSrc,
    view: CustomIconsView,
  },
  {
    id: "controlled-pagination",
    title: "#Controlled Pagination",
    subtitle: null,
    source: ControlledPaginationSrc,
    view: ControlledPaginationView,
  },
  {
    id: "pagination-api",
    title: "<Pagination />",
    isApi: true,
    componentProps: paginationProps,
  },
];
