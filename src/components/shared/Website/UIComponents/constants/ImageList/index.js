import {
  View as StandardImageListView,
  source as StandardImageListSrc,
} from "./../../../UIComponents/Docs/ImageList/StandardImageList";
import {
  View as QuiltedImageListView,
  source as QuiltedImageListSrc,
} from "./../../../UIComponents/Docs/ImageList/QuiltedImageList";
import {
  View as WithTitleBarsView,
  source as WithTitleBarsSrc,
} from "./../../../UIComponents/Docs/ImageList/WithTitleBars";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/ImageList/Customization";
import {
  imageListItemBarProps,
  imageListItemProps,
  imageListProps,
} from "../../Api/PropsApi/constants";

export const imageListContent = [
  { label: "#Standard Images", href: "#standard-images" },
  { label: "#Quilted Layout", href: "#quilted-layout" },
  { label: "#Title Bars", href: "#title-bars" },
  { label: "#Customization", href: "#customization" },
  { label: "<ImageList />", href: "#image-list-api" },
  { label: "<ImageListItem />", href: "#image-list-item-api" },
  { label: "<ImageListItemBar />", href: "#image-list-item-bar-api" },
];

export const imageListSections = [
  {
    id: "standard-images",
    title: "#Standard Images",
    subtitle: null,
    source: StandardImageListSrc,
    view: StandardImageListView,
  },
  {
    id: "quilted-layout",
    title: "#Quilted Layout",
    subtitle: "Highlights select images for emphasis in a collection.",
    source: QuiltedImageListSrc,
    view: QuiltedImageListView,
  },
  {
    id: "title-bars",
    title: "#Title Bars",
    subtitle: "Add titles to images for better context.",
    source: WithTitleBarsSrc,
    view: WithTitleBarsView,
  },
  {
    id: "customization",
    title: "#Customization",
    subtitle: null,
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "image-list-api",
    title: "<ImageList />",
    isApi: true,
    componentProps: imageListProps,
  },
  {
    id: "image-list-item-api",
    title: "<ImageListItem />",
    isApi: true,
    componentProps: imageListItemProps,
  },
  {
    id: "image-list-item-bar-api",
    title: "<ImageListItemBar />",
    isApi: true,
    componentProps: imageListItemBarProps,
  },
];
