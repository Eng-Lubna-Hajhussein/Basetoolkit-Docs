import {
    View as UsageExampleView,
    source as UsageExampleSrc,
  } from "./../../../../Toolkits/Docs/coloris/Scale/UsageExample";
  import {
    View as GradientListView,
    source as GradientListSrc,
  } from "./../../../../Toolkits/Docs/coloris/Scale/GradientList";

export const scaleContent = [
    { label: "#scale", href: "#coloris-scale" },
    { label: "#Gradient List", href: "#gradient-list" },
  ];
  

export const scaleSections = [
  {
    id: "coloris-scale",
    title: "#scale(colors: string[])",
    subtitle: null,
    source: UsageExampleSrc,
    view: UsageExampleView,
  },
  {
    id: "gradient-list",
    title: "#Gradient List",
    subtitle: "Applying a Gradient to a List of Items",
    source: GradientListSrc,
    view: GradientListView,
  },
];
