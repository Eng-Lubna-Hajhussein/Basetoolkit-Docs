import {
  View as BasicMasonryView,
  source as BasicMasonrySrc,
} from "./../../../UIComponents/Docs/Masonry/BasicMasonry";
import {
  View as ImageMasonryView,
  source as ImageMasonrySrc,
} from "./../../../UIComponents/Docs/Masonry/ImageMasonry";
import {
  View as VariableHeightView,
  source as VariableHeightSrc,
} from "./../../../UIComponents/Docs/Masonry/VariableHeight";
import {
  View as ColumnsView,
  source as ColumnsSrc,
} from "./../../../UIComponents/Docs/Masonry/Columns";
import {
  View as ResponsiveColumnsView,
  source as ResponsiveColumnsSrc,
} from "./../../../UIComponents/Docs/Masonry/ResponsiveColumns";
import {
  View as SpacingView,
  source as SpacingSrc,
} from "./../../../UIComponents/Docs/Masonry/Spacing";
import {
  View as ResponsiveSpacingView,
  source as ResponsiveSpacingSrc,
} from "./../../../UIComponents/Docs/Masonry/ResponsiveSpacing";
import { masonryProps } from "../../Api/PropsApi/constants";

export const masonryContent = [
  { label: "#Basic Layout", href: "#basic-layout" },
  { label: "#Image Gallery", href: "#image-gallery" },
  { label: "#Variable Heights", href: "#variable-heights" },
  { label: "#Column Setup", href: "#column-setup" },
  { label: "#Responsive Columns", href: "#responsive-columns" },
  { label: "#Spacing Setup", href: "#spacing-setup" },
  { label: "#Responsive Spacing", href: "#responsive-spacing" },
  { label: "<Masonry />", href: "#masonry-api" },
];

export const masonrySections = [
  {
    id: "basic-layout",
    title: "#Basic Layout",
    subtitle: "Simple setup for Masonry. Supports any element type.",
    source: BasicMasonrySrc,
    view: BasicMasonryView,
  },
  {
    id: "image-gallery",
    title: "#Image Gallery",
    subtitle: "Showcases Masonry layout for images by row or column.",
    source: ImageMasonrySrc,
    view: ImageMasonryView,
  },
  {
    id: "variable-heights",
    title: "#Variable Heights",
    subtitle: "Masonry adapts items to fit available space efficiently.",
    source: VariableHeightSrc,
    view: VariableHeightView,
  },
  {
    id: "column-setup",
    title: "#Column Setup",
    subtitle: "Set the number of columns in a Masonry layout.",
    source: ColumnsSrc,
    view: ColumnsView,
  },
  {
    id: "responsive-columns",
    title: "#Responsive Columns",
    subtitle: "Configure columns to respond to screen sizes.",
    source: ResponsiveColumnsSrc,
    view: ResponsiveColumnsView,
  },
  {
    id: "spacing-setup",
    title: "#Spacing Setup",
    subtitle: "Adjust spacing between items using theme spacing.",
    source: SpacingSrc,
    view: SpacingView,
  },
  {
    id: "responsive-spacing",
    title: "#Responsive Spacing",
    subtitle: "Spacing can adapt to screen sizes.",
    source: ResponsiveSpacingSrc,
    view: ResponsiveSpacingView,
  },
  {
    id: "masonry-api",
    title: "<Masonry />",
    isApi: true,
    componentProps: masonryProps,
  },
];
