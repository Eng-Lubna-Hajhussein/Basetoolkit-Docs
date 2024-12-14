import { View as BasicTableView, source as BasicTableSrc } from "./../../../UIComponents/Docs/Table/BasicTable";
import { View as DenseTableView, source as DenseTableSrc } from "./../../../UIComponents/Docs/Table/DenseTable";
import {
  View as SortingAndSelectingView,
  source as SortingAndSelectingSrc,
} from "./../../../UIComponents/Docs/Table/SortingAndSelecting";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Table/Customization";
import {
  View as StickyHeaderView,
  source as StickyHeaderSrc,
} from "./../../../UIComponents/Docs/Table/StickyHeader";
import {
  View as ColumnGroupingView,
  source as ColumnGroupingSrc,
} from "./../../../UIComponents/Docs/Table/ColumnGrouping";
import {
  View as CollapsibleTableView,
  source as CollapsibleTableSrc,
} from "./../../../UIComponents/Docs/Table/CollapsibleTable";
import {
  View as SpanningTableView,
  source as SpanningTableSrc,
} from "./../../../UIComponents/Docs/Table/SpanningTable";
import {
  View as CaptionView,
  source as CaptionSrc,
} from "./../../../UIComponents/Docs/Table/Caption";
import { tableBodyProps, tableCellProps, tableContainerProps, tableFooterProps, tableHeadProps, tablePaginationProps, tableProps, tableRowProps, tableSortLabelProps } from "../../Api/PropsApi/constants";

export const tableContent = [
  { label: "#Basic Table", href: "#basic-table" },
  { label: "#Compact View", href: "#compact-view" },
  { label: "#Sort & Select", href: "#sort-select" },
  { label: "#Custom Styles", href: "#custom-styles" },
  { label: "#Sticky Header", href: "#sticky-header" },
  { label: "#Grouped Columns", href: "#grouped-columns" },
  { label: "#Expandable Rows", href: "#expandable-rows" },
  { label: "#Row & Column Span", href: "#row-column-span" },
  { label: "#Captioned Table", href: "#captioned-table" },
  { label: "<Table />", href: "#table-api" },
  { label: "<TableBody />", href: "#table-body-api" },
  { label: "<TableCell />", href: "#table-cell-api" },
  { label: "<TableContainer />", href: "#table-container-api" },
  { label: "<TableFooter />", href: "#table-footer-api" },
  { label: "<TableHead />", href: "#table-head-api" },
  { label: "<TablePagination />", href: "#table-pagination-api" },
  { label: "<TableRow />", href: "#table-row-api" },
  { label: "<TableSortLabel />", href: "#table-sort-label-api" },
];

export const tableSections = [
  {
    id: "basic-table",
    title: "#Basic Table",
    subtitle: "A straightforward table layout.",
    source: BasicTableSrc,
    view: BasicTableView,
  },
  {
    id: "compact-view",
    title: "#Compact View",
    subtitle: "Example of a table with reduced spacing.",
    source: DenseTableSrc,
    view: DenseTableView,
  },
  {
    id: "sort-select",
    title: "#Sort & Select",
    subtitle: "Selectable rows and sortable headers using checkboxes and labels.",
    source: SortingAndSelectingSrc,
    view: SortingAndSelectingView,
  },
  {
    id: "custom-styles",
    title: "#Custom Styles",
    subtitle: "An example with customized table components.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "sticky-header",
    title: "#Sticky Header",
    subtitle: "Table with fixed headers and scrollable rows using stickyHeader.",
    source: StickyHeaderSrc,
    view: StickyHeaderView,
  },
  {
    id: "grouped-columns",
    title: "#Grouped Columns",
    subtitle: "Group headers by nesting rows in the table head.",
    source: ColumnGroupingSrc,
    view: ColumnGroupingView,
  },
  {
    id: "expandable-rows",
    title: "#Expandable Rows",
    subtitle: "Table with expandable rows for additional information.",
    source: CollapsibleTableSrc,
    view: CollapsibleTableView,
  },
  {
    id: "row-column-span",
    title: "#Row & Column Span",
    subtitle: "Example demonstrating spanning cells across rows and columns.",
    source: SpanningTableSrc,
    view: SpanningTableView,
  },
  {
    id: "captioned-table",
    title: "#Captioned Table",
    subtitle: "Adding a caption to provide context to the table.",
    source: CaptionSrc,
    view: CaptionView,
  },
  {
    id: "table-api",
    title: "<Table />",
    isApi: true,
    componentProps: tableProps,
  },
  {
    id: "table-body-api",
    title: "<TableBody />",
    isApi: true,
    componentProps: tableBodyProps,
  },
  {
    id: "table-cell-api",
    title: "<TableCell />",
    isApi: true,
    componentProps: tableCellProps,
  },
  {
    id: "table-container-api",
    title: "<TableContainer />",
    isApi: true,
    componentProps: tableContainerProps,
  },
  {
    id: "table-footer-api",
    title: "<TableFooter />",
    isApi: true,
    componentProps: tableFooterProps,
  },
  {
    id: "table-head-api",
    title: "<TableHead />",
    isApi: true,
    componentProps: tableHeadProps,
  },
  {
    id: "table-pagination-api",
    title: "<TablePagination />",
    isApi: true,
    componentProps: tablePaginationProps,
  },
  {
    id: "table-row-api",
    title: "<TableRow />",
    isApi: true,
    componentProps: tableRowProps,
  },
  {
    id: "table-sort-label-api",
    title: "<TableSortLabel />",
    isApi: true,
    componentProps: tableSortLabelProps,
  },
];

