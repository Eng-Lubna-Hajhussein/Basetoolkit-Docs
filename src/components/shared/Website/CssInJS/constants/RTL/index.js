import { View as SetupView, source as SetupSrc } from "./../../../CssInJS/Docs/rtl/Usage/Setup";
import { View as ToggleRtlView, source as ToggleRtlSrc } from "./../../../CssInJS/Docs/rtl/Usage/ToggleRtl";

export const rtlContent = [
  { label: "#Set Up", href: "#set-up" },
  { label: "#Usage Example", href: "#usage-example" },
];

export const rtlSections = [
  {
    id: "set-up",
    title: "#Set Up",
    subtitle: null,
    source: SetupSrc,
    view: SetupView,
  },
  {
    id: "usage-example",
    title: "#Usage Example",
    subtitle: null,
    source: ToggleRtlSrc,
    view: ToggleRtlView,
  },
];
