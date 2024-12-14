import {
  View as BasicBreadcrumbsView,
  source as BasicBreadcrumbsSrc,
} from "./../../../UIComponents/Docs/Breadcrumbs/BasicBreadcrumbs";
import {
  View as ActiveLastBreadcrumbView,
  source as ActiveLastBreadcrumbSrc,
} from "./../../../UIComponents/Docs/Breadcrumbs/ActiveLastBreadcrumb";
import {
  View as CustomSeparatorView,
  source as CustomSeparatorSrc,
} from "./../../../UIComponents/Docs/Breadcrumbs/CustomSeparator";
import {
  View as BreadcrumbsWithIconsView,
  source as BreadcrumbsWithIconsSrc,
} from "./../../../UIComponents/Docs/Breadcrumbs/BreadcrumbsWithIcons";
import {
  View as CollapsedBreadcrumbsView,
  source as CollapsedBreadcrumbsSrc,
} from "./../../../UIComponents/Docs/Breadcrumbs/CollapsedBreadcrumbs";
import {
  View as CondensedWithMenuView,
  source as CondensedWithMenuSrc,
} from "./../../../UIComponents/Docs/Breadcrumbs/CondensedWithMenu";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Breadcrumbs/Customization";
import {
  View as DynamicNestingView,
  source as DynamicNestingSrc,
} from "./../../../UIComponents/Docs/Breadcrumbs/DynamicNesting";
import { breadcrumbsProps, linkProps, typographyProps } from "../../Api/PropsApi/constants";

export const breadcrumbsContent = [
    { label: "#Basic Breadcrumbs", href: "#basic-breadcrumbs" },
    { label: "#Interactive Last Item", href: "#interactive-last-item" },
    { label: "#Custom Separators", href: "#custom-separators" },
    { label: "#Icons in Breadcrumbs", href: "#icons-in-breadcrumbs" },
    { label: "#Collapsed Breadcrumbs", href: "#collapsed-breadcrumbs" },
    { label: "#Condensed with Dropdown", href: "#condensed-with-dropdown" },
    { label: "#Customization", href: "#customization" },
    { label: "#Dynamic Nesting", href: "#dynamic-nesting" },
    { label: "<Breadcrumbs />", href: "#breadcrumbs-api" },
    { label: "<Link />", href: "#link-api" },
    { label: "<Typography />", href: "#typography-api" },
  ];
  
  export const breadcrumbsSections = [
    {
      id: "basic-breadcrumbs",
      title: "#Basic Breadcrumbs",
      subtitle: null,
      source: BasicBreadcrumbsSrc,
      view: BasicBreadcrumbsView,
    },
    {
      id: "interactive-last-item",
      title: "#Interactive Last Item",
      subtitle: "Keep the final breadcrumb link accessible.",
      source: ActiveLastBreadcrumbSrc,
      view: ActiveLastBreadcrumbView,
    },
    {
      id: "custom-separators",
      title: "#Custom Separators",
      subtitle: "These examples show using both text separators and an SVG icon.",
      source: CustomSeparatorSrc,
      view: CustomSeparatorView,
    },
    {
      id: "icons-in-breadcrumbs",
      title: "#Icons in Breadcrumbs",
      subtitle: null,
      source: BreadcrumbsWithIconsSrc,
      view: BreadcrumbsWithIconsView,
    },
    {
      id: "collapsed-breadcrumbs",
      title: "#Collapsed Breadcrumbs",
      subtitle: null,
      source: CollapsedBreadcrumbsSrc,
      view: CollapsedBreadcrumbsView,
    },
    {
      id: "condensed-with-dropdown",
      title: "#Condensed with Dropdown",
      subtitle: "Use a dropdown menu to display condensed links.",
      source: CondensedWithMenuSrc,
      view: CondensedWithMenuView,
    },
    {
      id: "customization",
      title: "#Customization",
      subtitle: "Here is an example of customizing the component.",
      source: CustomizationSrc,
      view: CustomizationView,
    },
    {
      id: "dynamic-nesting",
      title: "#Dynamic Nesting",
      subtitle: null,
      source: DynamicNestingSrc,
      view: DynamicNestingView,
    },
    {
      id: "breadcrumbs-api",
      title: "<Breadcrumbs />",
      isApi: true,
      componentProps: breadcrumbsProps,
    },
    {
      id: "link-api",
      title: "<Link />",
      isApi: true,
      componentProps: linkProps,
    },
    {
      id: "typography-api",
      title: "<Typography />",
      isApi: true,
      componentProps: typographyProps,
    },
  ];
  