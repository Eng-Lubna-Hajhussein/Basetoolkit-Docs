import {
  View as BasicAccordionView,
  source as BasicAccordionSrc,
} from "./../../../UIComponents/Docs/Accordion/BasicAccordion";
import {
  View as ExpandIconView,
  source as ExpandIconSrc,
} from "./../../../UIComponents/Docs/Accordion/ExpandIcon";
import {
  View as ExpandedByDefaultView,
  source as ExpandedByDefaultSrc,
} from "./../../../UIComponents/Docs/Accordion/ExpandedByDefault";
import {
  View as SeparatedView,
  source as SeparatedSrc,
} from "./../../../UIComponents/Docs/Accordion/Separated";
import {
  View as VariantsView,
  source as VariantsSrc,
} from "./../../../UIComponents/Docs/Accordion/Variants";
import {
  View as TransitionView,
  source as TransitionSrc,
} from "./../../../UIComponents/Docs/Accordion/Transition";
import {
  View as DisabledItemView,
  source as DisabledItemSrc,
} from "./../../../UIComponents/Docs/Accordion/DisabledItem";
import {
  View as ControlledAccordionView,
  source as ControlledAccordionSrc,
} from "./../../../UIComponents/Docs/Accordion/ControlledAccordion";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Accordion/Customization";
import {
  accordionActionsProps,
  accordionDetailsProps,
  accordionProps,
  accordionSummaryProps,
} from "../../Api/PropsApi/constants";

export const accordionContent = [
  { label: "#Basic Accordion", href: "#basic-accordion" },
  { label: "#Expand Icon", href: "#expand-icon" },
  { label: "#Default Expanded", href: "#default-expanded" },
  { label: "#Separated Layout", href: "#separated-layout" },
  { label: "#Appearance Variants", href: "#appearance-variants" },
  { label: "#Custom Transition", href: "#custom-transition" },
  { label: "#Disabled Item", href: "#disabled-item" },
  { label: "#Controlled Mode", href: "#controlled-mode" },
  { label: "#Accordion Customization", href: "#accordion-customization" },
  { label: "<Accordion />", href: "#accordion-api" },
  { label: "<AccordionActions />", href: "#accordion-actions-api" },
  { label: "<AccordionDetails />", href: "#accordion-details-api" },
  { label: "<AccordionSummary />", href: "#accordion-summary-api" },
];

export const accordionSections = [
  {
    id: "basic-accordion",
    title: "#Basic Accordion",
    subtitle: null,
    source: BasicAccordionSrc,
    view: BasicAccordionView,
  },
  {
    id: "expand-icon",
    title: "#Expand Icon",
    subtitle:
      "Change the expand icon using the expandIcon prop. The icon flips automatically.",
    source: ExpandIconSrc,
    view: ExpandIconView,
  },
  {
    id: "default-expanded",
    title: "#Default Expanded",
    subtitle: "Set defaultExpanded prop to have the Accordion open by default.",
    source: ExpandedByDefaultSrc,
    view: ExpandedByDefaultView,
  },
  {
    id: "separated-layout",
    title: "#Separated Layout",
    subtitle:
      "Use the connected prop to add space between Accordion items for separation.",
    source: SeparatedSrc,
    view: SeparatedView,
  },
  {
    id: "appearance-variants",
    title: "#Appearance Variants",
    subtitle:
      "Choose between outlined or elevated appearance for border or shadow effects.",
    source: VariantsSrc,
    view: VariantsView,
  },
  {
    id: "custom-transition",
    title: "#Custom Transition",
    subtitle:
      "Use TransitionComponent and TransitionProps to customize transition behavior.",
    source: TransitionSrc,
    view: TransitionView,
  },
  {
    id: "disabled-item",
    title: "#Disabled Item",
    subtitle:
      "Set disabled prop to prevent interaction and focus on an Accordion item.",
    source: DisabledItemSrc,
    view: DisabledItemView,
  },
  {
    id: "controlled-mode",
    title: "#Controlled Mode",
    subtitle:
      "Accordion can be either controlled or uncontrolled for state management.",
    source: ControlledAccordionSrc,
    view: ControlledAccordionView,
  },
  {
    id: "accordion-customization",
    title: "#Accordion Customization",
    subtitle:
      "Use expanded prop and custom state to allow one Accordion open at a time.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "accordion-api",
    title: "<Accordion />",
    isApi: true,
    componentProps: accordionProps,
  },
  {
    id: "accordion-actions-api",
    title: "<AccordionActions />",
    isApi: true,
    componentProps: accordionActionsProps,
  },
  {
    id: "accordion-details-api",
    title: "<AccordionDetails />",
    isApi: true,
    componentProps: accordionDetailsProps,
  },
  {
    id: "accordion-summary-api",
    title: "<AccordionSummary />",
    isApi: true,
    componentProps: accordionSummaryProps,
  },
];
