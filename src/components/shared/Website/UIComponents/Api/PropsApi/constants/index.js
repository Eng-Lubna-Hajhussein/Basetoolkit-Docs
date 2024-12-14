export const accordionProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the accordion, typically includes AccordionSummary, AccordionDetails, or AccordionActions components.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "defaultExpanded",
    type: ["boolean"],
    description: "If true, expands the accordion by default.",
    defaultValue: "false",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description:
      "If true, disables the accordion and prevents user interaction.",
    defaultValue: "false",
  },
  {
    prop: "disableGutters",
    type: ["boolean"],
    description:
      "If true, removes padding from the accordion details and actions.",
    defaultValue: "false",
  },
  {
    prop: "expanded",
    type: ["boolean"],
    description:
      "Controls the expanded state of the accordion (for controlled usage).",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback fired when the accordion is expanded or collapsed. Receives the event and the new expanded state as arguments.",
  },
  {
    prop: "square",
    type: ["boolean"],
    description: "If true, disables rounded corners on the accordion.",
    defaultValue: "false",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the accordion container.",
    defaultValue: "{}",
  },
  {
    prop: "TransitionComponent",
    type: ["elementType"],
    description:
      "The component used for the transition animation. Defaults to the Collapse component.",
    defaultValue: "Collapse",
  },
  {
    prop: "TransitionProps",
    type: ["object"],
    description: "Properties applied to the transition component.",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Specifies the accordion variant, either outlined or with an elevation.",
    defaultValue: "'outlined'",
  },
  {
    prop: "connected",
    type: ["boolean"],
    description:
      "If true, connects multiple accordion items with shared borders.",
    defaultValue: "true",
  },
];

export const accordionActionsProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the AccordionActions, typically includes action buttons.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the AccordionActions root element.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
    defaultValue: "{}",
  },
];

export const accordionDetailsProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the AccordionDetails.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "expanded",
    type: ["boolean"],
    description:
      "Controls the visibility of the details content. Set to true to expand.",
  },
  {
    prop: "TransitionComponent",
    type: ["elementType"],
    description:
      "The component used for the transition effect. Defaults to Collapse.",
    defaultValue: "Collapse",
  },
  {
    prop: "TransitionProps",
    type: ["object"],
    description:
      "Props applied to the transition component for customizing its behavior.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the AccordionDetails root element.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
    defaultValue: "{}",
  },
];

export const svgIconProps = [
  {
    prop: "icon",
    type: ["string"],
    description: "Specifies the icon to display, following Google Material Icons standards.",
    defaultValue: "'home'",
  },
  {
    prop: "variant",
    type: ["string"],
    options: ["outlined", "filled", "round", "sharp" ],
    description: "Determines the visual style of the icon.",
    defaultValue: "'outlined'",
  },
  {
    prop: "size",
    type: ["string"],
    options: ["small", "medium", "large"],
    description: "Sets predefined icon size based on theme spacing.",
    defaultValue: "'medium'",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Defines the color of the icon, supporting theme colors.",
    defaultValue: "'default'",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "Custom font size, allowing precise control over icon scaling.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description: "System prop for dynamic CSS-in-JS styling with advanced flexibility.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the SvgIcon root element.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Event handler for click interactions on the icon.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin.",
  },
  { prop: "mt", type: ["string", "number"], description: "Top margin." },
  { prop: "mb", type: ["string", "number"], description: "Bottom margin." },
  { prop: "ml", type: ["string", "number"], description: "Left margin." },
  { prop: "mr", type: ["string", "number"], description: "Right margin." },
  { prop: "mx", type: ["string", "number"], description: "Horizontal margin (left & right)." },
  { prop: "my", type: ["string", "number"], description: "Vertical margin (top & bottom)." },
  { prop: "p", type: ["string", "number"], description: "System prop for padding." },
  { prop: "pt", type: ["string", "number"], description: "Top padding." },
  { prop: "pb", type: ["string", "number"], description: "Bottom padding." },
  { prop: "pl", type: ["string", "number"], description: "Left padding." },
  { prop: "pr", type: ["string", "number"], description: "Right padding." },
  { prop: "px", type: ["string", "number"], description: "Horizontal padding (left & right)." },
  { prop: "py", type: ["string", "number"], description: "Vertical padding (top & bottom)." },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "Background color, supporting theme colors.",
  },
  { prop: "typography", type: ["string"], description: "Sets typography style." },
  { prop: "fontFamily", type: ["string"], description: "Font family applied to the icon." },
  { prop: "fontStyle", type: ["string"], description: "Font style property for the icon." },
  { prop: "fontWeight", type: ["string", "number"], description: "Font weight property for the icon." },
  { prop: "letterSpacing", type: ["string", "number"], description: "Adjusts spacing between letters." },
  { prop: "lineHeight", type: ["string", "number"], description: "Controls line height for text alignment." },
  { prop: "textAlign", type: ["string"], description: "Aligns text within the icon." },
  { prop: "width", type: ["string", "number"], description: "Sets custom width of the icon." },
  { prop: "height", type: ["string", "number"], description: "Sets custom height of the icon." },
  { prop: "maxWidth", type: ["string", "number"], description: "Defines maximum width of the icon." },
  { prop: "maxHeight", type: ["string", "number"], description: "Defines maximum height of the icon." },
  { prop: "minWidth", type: ["string", "number"], description: "Defines minimum width of the icon." },
  { prop: "minHeight", type: ["string", "number"], description: "Defines minimum height of the icon." },
  { prop: "display", type: ["string"], description: "CSS display property for layout adjustments." },
  { prop: "alignContent", type: ["string"], description: "Alignment of content within the icon." },
  { prop: "alignItems", type: ["string"], description: "Alignment of items within the icon." },
  { prop: "alignSelf", type: ["string"], description: "Aligns self within the container." },
  { prop: "flex", type: ["string", "number"], description: "Sets flex property for flexible layout." },
  { prop: "flexDirection", type: ["string"], description: "Direction of flex items." },
  { prop: "flexGrow", type: ["string", "number"], description: "Controls flex-grow property." },
  { prop: "flexShrink", type: ["string", "number"], description: "Controls flex-shrink property." },
  { prop: "flexWrap", type: ["string"], description: "Controls wrapping behavior of flex items." },
  { prop: "justifyContent", type: ["string"], description: "Justifies content within the flex container." },
  { prop: "order", type: ["string", "number"], description: "Order property for flex items." },
  { prop: "gridColumn", type: ["string"], description: "Specifies column within a grid layout." },
  { prop: "gridRow", type: ["string"], description: "Specifies row within a grid layout." },
  { prop: "gridAutoFlow", type: ["string"], description: "Defines grid auto flow property." },
  { prop: "gridAutoColumns", type: ["string"], description: "Sets automatic column size in the grid." },
  { prop: "gridAutoRows", type: ["string"], description: "Sets automatic row size in the grid." },
  { prop: "gridTemplateColumns", type: ["string"], description: "Defines grid template columns." },
  { prop: "gridTemplateRows", type: ["string"], description: "Defines grid template rows." },
  { prop: "gridTemplateAreas", type: ["string"], description: "Defines named grid areas." },
  { prop: "gridArea", type: ["string"], description: "Assigns grid area within the layout." },
  { prop: "zIndex", type: ["number"], description: "Specifies the stacking order." },
  { prop: "boxSizing", type: ["string"], description: "Controls the box-sizing property." },
  { prop: "position", type: ["string"], description: "CSS position property for positioning." },
  { prop: "top", type: ["string", "number"], description: "Top position for absolute positioning." },
  { prop: "right", type: ["string", "number"], description: "Right position for absolute positioning." },
  { prop: "bottom", type: ["string", "number"], description: "Bottom position for absolute positioning." },
  { prop: "left", type: ["string", "number"], description: "Left position for absolute positioning." },
  { prop: "border", type: ["string"], description: "CSS border property for the icon." },
  { prop: "borderBottom", type: ["string"], description: "CSS bottom border property." },
  { prop: "borderColor", type: ["string"], description: "CSS border color property." },
  { prop: "borderLeft", type: ["string"], description: "CSS left border property." },
  { prop: "borderRadius", type: ["string", "number"], description: "Radius for rounded borders." },
  { prop: "borderRight", type: ["string"], description: "CSS right border property." },
  { prop: "borderTop", type: ["string"], description: "CSS top border property." },
  { prop: "boxShadow", type: ["string"], description: "CSS box shadow property." },
  { prop: "gap", type: ["string", "number"], description: "Defines the gap between elements." },
  { prop: "columnGap", type: ["string", "number"], description: "Defines the gap between columns." },
  { prop: "rowGap", type: ["string", "number"], description: "Defines the gap between rows." },
];

export const partiallyFilledIconProps = [
  {
    prop: "icon",
    type: ["string"],
    description: "Specifies the icon to display, following Google Material Icons standards.",
    defaultValue: "'favorite'",
  },
  {
    prop: "fillPercentage",
    type: ["number", "string"],
    description: "Defines the percentage of the icon to be filled, between 0 and 1.",
    defaultValue: "0.5",
  },
  {
    prop: "size",
    type: ["string"],
    options: ["small", "medium", "large"],
    description: "Sets predefined icon size based on theme spacing.",
    defaultValue: "'medium'",
  },
  {
    prop: "filledColor",
    type: ["string"],
    description: "Color used for the filled portion of the icon.",
    defaultValue: "'#FF0000'",
  },
  {
    prop: "defaultColor",
    type: ["string"],
    description: "Color used for the unfilled portion of the icon.",
    defaultValue: "'#C0C0C0'",
  },
  {
    prop: "variant",
    type: ["string"],
    options: ["outlined", "filled", "round", "sharp"],
    description: "Determines the visual style of the icon.",
    defaultValue: "'filled'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description: "System prop for dynamic CSS-in-JS styling with advanced flexibility.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the PartiallyFilledIcon root element.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description: "Override or extend the styles applied to the component. Supports 'root', 'filledIcon', and 'unfilledIcon' keys.",
    defaultValue: "{}",
  },
];


export const accordionSummaryProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the AccordionSummary.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "expanded",
    type: ["boolean"],
    description: "Controls the expanded state of the summary.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "Disables the summary, preventing interaction.",
    defaultValue: "false",
  },
  {
    prop: "handleChange",
    type: ["function"],
    description:
      "Function called when the summary is clicked to expand or collapse.",
  },
  {
    prop: "expandIcon",
    type: ["node"],
    description: "Icon element displayed to indicate expansion state.",
    defaultValue: "<SvgIcon icon='expand_more' />",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the AccordionSummary root element.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend styles applied to the component. Supports 'root', 'content', and 'expandIcon' keys.",
    defaultValue: "{}",
  },
];

export const alertProps = [
  {
    prop: "message",
    type: ["string"],
    description: "Primary message or text content displayed in the alert.",
  },
  {
    prop: "severity",
    type: ["string"],
    description:
      "Defines the alert type, adjusting colors and icon to match severity level.",
    defaultValue: "'success'",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Determines the alert style, including background and border configuration.",
    defaultValue: "'standard'",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "Additional content displayed inside the alert, such as custom components or text.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Overrides or extends component styles. Supports keys 'root', 'icon', 'message', 'title', 'action', and 'close'.",
  },
  {
    prop: "closeText",
    type: ["string"],
    description: "Text used as the label for the close button.",
    defaultValue: "'Close'",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Custom color for the alert, overriding default severity-based colors.",
  },
  {
    prop: "components",
    type: ["object"],
    description:
      "Overrides default components, including 'CloseButton' and 'CloseIcon'.",
  },
  {
    prop: "componentsProps",
    type: ["object"],
    description:
      "Props applied to specific components, such as 'closeButton' and 'closeIcon'.",
  },
  {
    prop: "icon",
    type: ["node"],
    description: "Custom icon to display at the start of the alert.",
  },
  {
    prop: "iconMapping",
    type: ["object"],
    description:
      "Defines custom icons for each severity level ('error', 'info', 'success', 'warning').",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback function called when the close button is clicked.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description:
      "Controls the visibility of the alert. Can be used for controlled or uncontrolled states.",
    defaultValue: "true",
  },
  {
    prop: "role",
    type: ["string"],
    description:
      "Specifies the ARIA role for the alert, enhancing accessibility.",
    defaultValue: "'alert'",
  },
  {
    prop: "slotProps",
    type: ["object"],
    description:
      "Props for specific slot elements, such as 'closeButton' and 'closeIcon'.",
  },
  {
    prop: "slots",
    type: ["object"],
    description:
      "Replaces elements for specific slots. Supports 'closeButton' and 'closeIcon'.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the alert container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
];

export const alertTitleProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the AlertTitle, typically text or elements.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports the 'root' key.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the AlertTitle component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
];

export const appBarProps = [
  {
    prop: "position",
    type: ["string"],
    description: "Defines the positioning strategy of the AppBar.",
    defaultValue: "'static'",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Sets the background color of the AppBar.",
    defaultValue: "'primary'",
  },
  {
    prop: "elevation",
    type: ["number"],
    description:
      "Applies a shadow effect for elevation. Accepts values from 0 to theme's max shadows.",
    defaultValue: 4,
  },
  {
    prop: "enableColorOnDark",
    type: ["boolean"],
    description:
      "Allows AppBar to use main color on dark themes, maintaining visibility.",
    defaultValue: false,
  },
  {
    prop: "children",
    type: ["node"],
    description: "Content to render within the AppBar.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Applies inline styles directly to the AppBar.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Applies additional custom classes to the AppBar.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description: "Overrides or extends the AppBar styles. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "margin",
    type: ["string", "number"],
    description: "Sets the margin for the AppBar using theme spacing values.",
  },
  {
    prop: "padding",
    type: ["string", "number"],
    description: "Sets the padding for the AppBar using theme spacing values.",
  },
  {
    prop: "typography",
    type: ["string"],
    description:
      "Sets the typography style for text within the AppBar based on theme typography.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description:
      "Aligns children along the cross-axis of the AppBar's flex container.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description:
      "Aligns children along the main axis of the AppBar's flex container.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "Defines the flex direction within the AppBar.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "Defines the width of the AppBar.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "Defines the height of the AppBar.",
  },
  {
    prop: "zIndex",
    type: ["number"],
    description:
      "Sets the z-index of the AppBar, based on the theme's z-index scale.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "Controls the display behavior of the AppBar.",
  },
];

export const toolbarProps = [
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The HTML element or custom component to render as the Toolbar's root element.",
    defaultValue: "'div'",
  },
  {
    prop: "children",
    type: ["node"],
    description: "Content to be displayed within the Toolbar.",
  },
  {
    prop: "disableGutters",
    type: ["boolean"],
    description: "Removes the default padding on the left and right.",
    defaultValue: false,
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Adjusts the spacing and height of the Toolbar for different contexts.",
    defaultValue: "'regular'",
  },
  {
    prop: "className",
    type: ["string"],
    description:
      "Additional class names to apply to the Toolbar for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the root element of the Toolbar.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Custom styles for various Toolbar elements, supporting the 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "Sets the background color, using theme color values.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description:
      "Specifies how the width and height of the Toolbar are calculated.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "Controls the display property of the Toolbar.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "Sets the height of the Toolbar.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "Aligns Toolbar content along the main axis.",
  },
  {
    prop: "overflow",
    type: ["string"],
    description: "Specifies how content that overflows the Toolbar is handled.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "Defines the position property of the Toolbar.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "Sets the width of the Toolbar.",
  },
];

export const autocompleteProps = [
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "options",
    type: ["array"],
    description: "Array of selectable options for the autocomplete.",
  },
  {
    prop: "renderInput",
    type: ["function"],
    description: "Function to render the custom input field.",
  },

  {
    prop: "value",
    type: ["string", "object", "array"],
    description:
      "Current selected value(s). Can be a string, object, or array (if multiple).",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "Controls whether the dropdown is open or not.",
  },
  {
    prop: "inputValue",
    type: ["string"],
    description: "Controlled input value as a string.",
  },
  {
    prop: "defaultValue",
    type: ["string", "object", "array"],
    description: "Default value(s) when component is initially rendered.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback when the value is changed.",
  },
  {
    prop: "onInputChange",
    type: ["function"],
    description: "Callback when the input value changes.",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text shown when no value is present.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the input is disabled.",
  },
  {
    prop: "autoCompleteInputRef",
    type: ["ref", "object"],
    description: "External ref for the input element.",
  },
  {
    prop: "getOption",
    type: ["function"],
    description: "Callback to get the selected option on selection.",
  },
  {
    prop: "getOptionLabel",
    type: ["function"],
    description: "Function to get the display label of an option.",
  },
  {
    prop: "renderOption",
    type: ["function"],
    description: "Function to render each option in the dropdown list.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the input is read-only and not editable.",
  },
  {
    prop: "freeSolo",
    type: ["boolean"],
    description: "If true, allows free-form input not limited to options.",
  },
  {
    prop: "disableClearable",
    type: ["boolean"],
    description: "If true, prevents clearing of the input value.",
  },
  {
    prop: "selectOnFocus",
    type: ["boolean"],
    description: "If true, selects the input text on focus.",
  },

  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styles for the component.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Size of the input. Can be 'small', 'medium', or 'large'.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The color theme of the input (e.g., 'primary', 'secondary').",
  },
  {
    prop: "name",
    type: ["string"],
    description: "The name attribute for the input field.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "The id attribute for the input field.",
  },
  {
    prop: "autoComplete",
    type: ["boolean"],
    description: "If true, enables auto-completion based on options.",
  },
  {
    prop: "getOptionDisabled",
    type: ["function"],
    description: "Function to determine if an option is disabled.",
  },
  {
    prop: "autoHighlight",
    type: ["boolean"],
    description: "If true, auto-highlights the first matching option.",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "The visual variant of the input. Can be 'standard', 'outlined', etc.",
  },
  {
    prop: "multiple",
    type: ["boolean"],
    description: "If true, allows multiple selections.",
  },
  {
    prop: "label",
    type: ["string"],
    description: "The label for the input field.",
  },
  {
    prop: "openOnFocus",
    type: ["boolean"],
    description: "If true, opens the dropdown when the input is focused.",
  },
  {
    prop: "disableCloseOnSelect",
    type: ["boolean"],
    description: "If true, does not close the dropdown on option selection.",
  },
  {
    prop: "ChipProps",
    type: ["object"],
    description: "Props to pass to each selected chip when multiple is true.",
  },
  {
    prop: "filterOptions",
    type: ["function"],
    description:
      "Function to customize how options are filtered based on input.",
  },
  {
    prop: "isOptionEqualToValue",
    type: ["function"],
    description:
      "Function to determine if an option is equal to the current value.",
  },
  {
    prop: "loading",
    type: ["boolean"],
    description: "If true, displays a loading state.",
  },
  {
    prop: "limitTags",
    type: ["number"],
    description: "Max number of tags shown before truncation (if multiple).",
  },
  {
    prop: "onOpen",
    type: ["function"],
    description: "Callback when the dropdown is opened.",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback when the dropdown is closed.",
  },
  {
    prop: "noOptionsText",
    type: ["string"],
    description: "Text displayed when no options are found.",
  },
  {
    prop: "loadingText",
    type: ["string"],
    description: "Text displayed when options are loading.",
  },
  {
    prop: "dir",
    type: ["string"],
    description: "Text direction for the input ('ltr' or 'rtl').",
  },
  {
    prop: "autoTextHighlight",
    type: ["boolean"],
    description: "If true, highlights text in matching options.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names to style the root element.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for component elements.",
  },
  {
    prop: "renderTags",
    type: ["function"],
    description:
      "Function to render custom tags when multiple selections are enabled.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, marks the input as required.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Additional props to pass to the input element.",
  },
];

export const avatarProps = [
  {
    prop: "src",
    type: ["string"],
    description: "The source URL of the image to display as the avatar.",
  },
  {
    prop: "alt",
    type: ["string"],
    description: "Alternative text describing the image.",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "Content to display if the image fails to load or if no image is provided.",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "The shape of the avatar.",
    options: ["circle", "rounded", "square"],
    defaultValue: "circle",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the root element.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component’s styles, with keys: `root`, `img`, and `content`.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional CSS class for custom styling.",
  },
  {
    prop: "imgProps",
    type: ["object"],
    description:
      "Attributes applied directly to the `img` element when `src` is provided.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Defines the size of the avatar.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "sizes",
    type: ["string"],
    description: "The sizes attribute for the image, for responsive loading.",
  },
  {
    prop: "srcSet",
    type: ["string"],
    description: "The srcSet attribute for the image, for responsive loading.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "Background color of the avatar, supporting theme colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Text color of the avatar, supporting theme colors.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "Font size for avatar text or content if image fails to load.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "Explicit height for the avatar container.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "Explicit width for the avatar container.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description:
      "Applies a box shadow to the avatar, supporting theme shadows.",
  },
];

export const avatarGroupProps = [
  {
    prop: "max",
    type: ["number"],
    description:
      "The maximum number of avatars to display before showing the surplus.",
    defaultValue: 4,
  },
  {
    prop: "total",
    type: ["number"],
    description:
      "The total number of avatars, used to calculate the surplus when limiting visible avatars.",
  },
  {
    prop: "renderSurplus",
    type: ["function"],
    description:
      "A function that renders the surplus count, displayed as the last avatar. By default, renders `+surplus`.",
    defaultValue: "(surplus) => `+${surplus}`",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "The shape of each avatar in the group.",
    options: ["circle", "rounded", "square"],
    defaultValue: "circle",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the root element.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component’s styles. Available keys are `avatarGroup`, `avatarGrid`, and `avatar`.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional CSS class for custom styling.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "A list of Avatar components to display in the group.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "Background color of the group container, supporting theme colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Text color of the surplus avatar, supporting theme colors.",
  },
  {
    prop: "zIndex",
    type: ["number"],
    description: "The z-index applied to the avatars within the group.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description:
      "System margin property to control spacing outside the avatar group container.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "Margin applied to the bottom of the avatar group.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "Margin applied to the left of the avatar group.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "Margin applied to the right of the avatar group.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "Margin applied to the top of the avatar group.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "Horizontal margin, equivalent to setting both `ml` and `mr`.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "Vertical margin, equivalent to setting both `mt` and `mb`.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "Padding applied to the avatar group container.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "Padding applied to the bottom of the avatar group.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "Padding applied to the left of the avatar group.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "Padding applied to the right of the avatar group.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "Padding applied to the top of the avatar group.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description:
      "Horizontal padding, equivalent to setting both `pl` and `pr`.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "Vertical padding, equivalent to setting both `pt` and `pb`.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "Explicit height for the avatar group container.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "Sets a maximum height for the avatar group container.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "Sets a maximum width for the avatar group container.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "Sets a minimum height for the avatar group container.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "Sets a minimum width for the avatar group container.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "Explicit width for the avatar group container.",
  },
  {
    prop: "display",
    type: ["string"],
    description:
      "Sets the CSS display property for the avatar group container.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description:
      "Controls the alignment of avatars within the group along the cross axis.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description:
      "Controls the alignment of each avatar within the group along the cross axis.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description:
      "Overrides the alignment for individual avatars within the group.",
  },
  {
    prop: "flex",
    type: ["string", "number"],
    description:
      "Shorthand for `flexGrow`, `flexShrink`, and `flexBasis` properties.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description:
      "Specifies the direction of avatars within the group, can be `row`, `column`, etc.",
  },
  {
    prop: "flexGrow",
    type: ["number"],
    description: "Defines the flex grow factor of the avatar group container.",
  },
  {
    prop: "flexShrink",
    type: ["number"],
    description:
      "Defines the flex shrink factor of the avatar group container.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description:
      "Controls whether avatars within the group should wrap onto multiple lines.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description:
      "Controls the alignment of avatars along the main axis within the group.",
  },
  {
    prop: "order",
    type: ["number"],
    description:
      "Defines the order of the avatar group container within the flex layout.",
  },
];

export const backdropProps = [
  {
    prop: "open",
    type: ["boolean"],
    description: "If true, the backdrop is visible.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the backdrop is clicked.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed inside the backdrop.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the Backdrop component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' and 'content' keys.",
  },
];

export const badgeProps = [
  {
    prop: "badgeContent",
    type: ["node"],
    description:
      "The content displayed inside the badge, such as a number, icon, or text.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Defines the color of the badge background, supporting theme colors.",
    defaultValue: "primary",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Specifies the type of badge. Use `standard` for normal content or `dot` for a small indicator.",
    options: ["standard", "dot"],
    defaultValue: "standard",
  },
  {
    prop: "anchorOrigin",
    type: ["object"],
    description:
      "Specifies the badge's position relative to its parent. Accepts `vertical` and `horizontal` options.",
    properties: {
      vertical: ["top", "bottom"],
      horizontal: ["left", "right"],
    },
    defaultValue: { vertical: "top", horizontal: "right" },
  },
  {
    prop: "overlap",
    type: ["string"],
    description:
      "The shape overlap mode, either a circle or rectangle to adjust badge shape.",
    options: ["circle", "rectangle"],
    defaultValue: "circle",
  },
  {
    prop: "max",
    type: ["number"],
    description:
      "The maximum count to display. If `badgeContent` exceeds this value, it shows as `${max}+`.",
    defaultValue: 99,
  },
  {
    prop: "showZero",
    type: ["boolean"],
    description: "If true, displays the badge even if `badgeContent` is zero.",
    defaultValue: false,
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the badge container.",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "The element that the badge is attached to, such as an icon or button.",
    required: true,
  },
  {
    prop: "className",
    type: ["string"],
    description:
      "Additional CSS class applied to the root container for custom styling.",
  },
  {
    prop: "invisible",
    type: ["boolean"],
    description:
      "If true, hides the badge, useful for dynamic visibility control.",
    defaultValue: false,
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component’s styles. Available keys are `container`, `badge`, `dot`, and `rectangle`.",
  },
];

export const bottomNavigationProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The child elements, typically `BottomNavigationAction` components, to be rendered within the `BottomNavigation` container.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports the `root` key.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "Specifies the HTML tag or custom component used for the root element.",
    defaultValue: "'div'",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback function triggered when the selected navigation item changes. Receives the event and the new value as arguments.",
  },
  {
    prop: "showLabels",
    type: ["boolean"],
    description:
      "If true, labels are displayed for all navigation actions. Otherwise, only the selected item shows a label.",
    defaultValue: false,
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the component.",
    defaultValue: "{}",
  },
  {
    prop: "value",
    type: ["any"],
    description:
      "The currently selected value. If set, the component acts as a controlled component.",
  },
  {
    prop: "defaultValue",
    type: ["any"],
    description:
      "The default selected value. Only used when the component is uncontrolled.",
  },
];

export const bottomNavigationActionProps = [
  {
    prop: "classes",
    type: ["object"],
    description:
      "Overrides or extends the styles applied to the component. Supports 'root', 'icon', and 'label' keys.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "icon",
    type: ["string"],
    description:
      "Specifies the icon to display within the action, using the name of the SVG icon.",
  },
  {
    prop: "label",
    type: ["node"],
    description:
      "The label displayed under the icon. It will be shown when the `showLabel` prop or `selected` state is true.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback function triggered when the action is clicked. Receives the event and value as arguments.",
  },
  {
    prop: "showLabel",
    type: ["boolean"],
    description:
      "If true, the label is displayed alongside the icon, regardless of selection state.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the component.",
    defaultValue: "{}",
  },
  {
    prop: "value",
    type: ["any"],
    description:
      "The value associated with the action. Used to determine if the action is selected.",
  },
  {
    prop: "selected",
    type: ["boolean"],
    description:
      "If true, the action is highlighted as selected, affecting styling and label visibility.",
  },
];

export const breadcrumbsProps = [
  {
    prop: "separator",
    type: ["node"],
    description: "The separator displayed between breadcrumb items.",
    defaultValue: "'/'",
  },
  {
    prop: "ariaLabel",
    type: ["string"],
    description: "Accessibility label for the breadcrumbs navigation element.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The breadcrumb items, usually rendered as links or text.",
  },
  {
    prop: "maxItems",
    type: ["number"],
    description:
      "Maximum number of breadcrumb items to display before truncating with an ellipsis.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the breadcrumb container.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root', 'breadcrumbs', 'separator', and 'item' keys.",
    defaultValue: "{}",
  },
];

export const collapseProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content to be collapsed.",
  },
  {
    prop: "collapsedSize",
    type: ["number", "string"],
    description: "The size of the component when collapsed.",
    defaultValue: "'0px'",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component or HTML element used as the root.",
    defaultValue: "'div'",
  },
  {
    prop: "easing",
    type: ["string", "object"],
    description:
      "Defines the transition easing function. Accepts a string or an object with 'enter' and 'exit' properties for separate values.",
    defaultValue: "'ease'",
  },
  {
    prop: "in",
    type: ["boolean"],
    description: "Controls the visibility of the collapse content.",
    defaultValue: true,
  },
  {
    prop: "orientation",
    type: ["string"],
    description:
      "Defines the collapse direction as either 'horizontal' or 'vertical'.",
    defaultValue: "'vertical'",
  },
  {
    prop: "timeout",
    type: ["number", "string", "object"],
    description:
      "Sets the transition duration in milliseconds. Accepts a single number, 'auto', or an object with 'appear', 'enter', and 'exit' durations.",
    defaultValue: "{ enter: 500, exit: 200 }",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the collapse component.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root', 'vertical', and 'horizontal' keys.",
    defaultValue: "{}",
  },
];

export const buttonProps = [
  {
    prop: "variant",
    type: ["string"],
    description:
      "The variant of the button. Can be 'contained', 'outlined', or 'text'.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "The color of the button. Can be any theme color or custom value.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Size of the button. Can be 'small', 'medium', or 'large'.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the button will be disabled.",
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description:
      "If true, the button will take the full width of its container.",
  },
  {
    prop: "startIcon",
    type: ["node"],
    description: "The icon to display before the button's content.",
  },
  {
    prop: "endIcon",
    type: ["node"],
    description: "The icon to display after the button's content.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the button.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the button is clicked.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the button.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the button.",
  },
  {
    prop: "href",
    type: ["string"],
    description: "If provided, the button will render as a link (anchor tag).",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component used for the root node. Can be a string or a component.",
  },
  {
    prop: "disableElevation",
    type: ["boolean"],
    description: "If true, the button will not have a box shadow.",
  },
  {
    prop: "alpha",
    type: ["number"],
    description: "Alpha transparency value for the button color.",
  },
  {
    prop: "colorDarkenDegrees",
    type: ["number"],
    description: "Degree to darken the button color.",
  },
  {
    prop: "colorLightenDegrees",
    type: ["number"],
    description: "Degree to lighten the button color.",
  },
  {
    prop: "textAlpha",
    type: ["number"],
    description: "Alpha transparency for the button text color.",
  },
  {
    prop: "textColorDarkenDegrees",
    type: ["number"],
    description: "Degree to darken the button text color.",
  },
  {
    prop: "textColorLightenDegrees",
    type: ["number"],
    description: "Degree to lighten the button text color.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the button will be read-only.",
  },
  {
    prop: "disableRipple",
    type: ["boolean"],
    description: "If true, the ripple effect will be disabled on click.",
  },
];

export const buttonBaseProps = [
  {
    prop: "children",
    type: ["node"],
    description: "Content to be rendered inside the button.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names to style the root element.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component type for the button base (e.g., 'button', 'a').",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the button will be disabled.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the button is clicked.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Callback fired when the button gains focus.",
  },
  {
    prop: "onBlur",
    type: ["function"],
    description: "Callback fired when the button loses focus.",
  },
  {
    prop: "onMouseDown",
    type: ["function"],
    description: "Callback fired on mousedown event.",
  },
  {
    prop: "onMouseUp",
    type: ["function"],
    description: "Callback fired on mouseup event.",
  },
  {
    prop: "onMouseLeave",
    type: ["function"],
    description: "Callback fired when the mouse leaves the button.",
  },
  {
    prop: "onTouchStart",
    type: ["function"],
    description: "Callback fired on touchstart event.",
  },
  {
    prop: "onTouchEnd",
    type: ["function"],
    description: "Callback fired on touchend event.",
  },
  {
    prop: "type",
    type: ["string"],
    description:
      "The type attribute for the button element (e.g., 'button', 'submit').",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles for the button base.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "disableRipple",
    type: ["boolean"],
    description: "If true, the ripple effect will be disabled.",
  },
  {
    prop: "rippleFocus",
    type: ["boolean"],
    description: "If true, the ripple effect is enabled on focus.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for component elements.",
  },
];

export const iconButtonProps = [
  {
    prop: "color",
    type: ["string"],
    description:
      "The color of the button. Can be any theme color or custom value.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Size of the button. Can be 'small', 'medium', or 'large'.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the button will be disabled.",
  },
  {
    prop: "disableRipple",
    type: ["boolean"],
    description: "If true, the ripple effect will be disabled on click.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the button is clicked.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "Content or icon to be rendered inside the button.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the button.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the button.",
  },
  {
    prop: "type",
    type: ["string"],
    description:
      "The type attribute for the button element (e.g., 'button', 'submit').",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for component elements.",
  },
  {
    prop: "disableFocusRipple",
    type: ["boolean"],
    description: "If true, the ripple effect will be disabled on focus.",
  },
];

export const buttonGroupProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "Content within the button group, typically Button components.",
  },
  {
    prop: "orientation",
    type: ["string"],
    description:
      "Sets the layout direction of buttons, either 'horizontal' or 'vertical'.",
    allowedValues: ["horizontal", "vertical"],
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Defines the button group's color, matching theme colors or a custom value.",
  },
  {
    prop: "textColor",
    type: ["string"],
    description:
      "Sets the text color of the buttons within the group, matching theme colors or custom values.",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Determines the appearance of the buttons. Can be 'text', 'outlined', or 'contained'.",
    allowedValues: ["text", "outlined", "contained"],
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Defines button size within the group. Can be 'small', 'medium', or 'large'.",
    allowedValues: ["small", "medium", "large"],
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description:
      "If true, the button group occupies the full width of its container.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "Disables all buttons in the group if set to true.",
  },
  {
    prop: "disableElevation",
    type: ["boolean"],
    description: "Removes the button shadow if set to true.",
  },
  {
    prop: "disableFocusRipple",
    type: ["boolean"],
    description: "Disables the ripple effect on focus for all buttons.",
  },
  {
    prop: "disableRipple",
    type: ["boolean"],
    description: "Disables the ripple effect on click for all buttons.",
  },
  {
    prop: "ariaLabel",
    type: ["string"],
    description: "Provides an accessible label for the button group.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names to style the button group container.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the button group container.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "An object containing additional class names for specific parts of the component, such as `root`.",
  },
  {
    prop: "alpha",
    type: ["number"],
    description: "Sets the transparency level of the button color.",
  },
  {
    prop: "colorDarkenDegrees",
    type: ["number"],
    description: "Specifies how much to darken the button color.",
  },
  {
    prop: "colorLightenDegrees",
    type: ["number"],
    description: "Specifies how much to lighten the button color.",
  },
  {
    prop: "textAlpha",
    type: ["number"],
    description: "Controls the transparency level of the button text color.",
  },
  {
    prop: "textColorDarkenDegrees",
    type: ["number"],
    description: "Specifies how much to darken the button text color.",
  },
  {
    prop: "textColorLightenDegrees",
    type: ["number"],
    description: "Specifies how much to lighten the button text color.",
  },
];

export const cardProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content displayed within the Card component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "raised",
    type: ["boolean"],
    description: "If true, applies a raised shadow effect to the Card.",
    defaultValue: false,
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Defines the Card's style variant, either 'elevation' for shadow or 'outlined' for a border.",
    defaultValue: "'elevation'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the Card.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the Card. Supports the 'root' key.",
    defaultValue: "{}",
  },
];

export const cardActionAreaProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content displayed within the CardActionArea component.",
  },
  {
    prop: "colorEffect",
    type: ["string"],
    description:
      "Sets the color effect for the ripple effect. Matches theme palette colors.",
    defaultValue: "'default'",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables interaction with the CardActionArea.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback function triggered when CardActionArea is clicked.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the CardActionArea.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the CardActionArea. Supports the 'root' key.",
    defaultValue: "{}",
  },
];

export const cardActionsProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content displayed within the CardActions component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "disableSpacing",
    type: ["boolean"],
    description: "If true, removes additional padding between action buttons.",
    defaultValue: false,
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the CardActions component.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the CardActions. Supports the 'root' key.",
    defaultValue: "{}",
  },
];

export const cardContentProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content displayed within the CardContent component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root node. Defaults to 'div'.",
    defaultValue: "'div'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the CardContent component.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the CardContent. Supports the 'root' key.",
    defaultValue: "{}",
  },
];

export const cardHeaderProps = [
  {
    prop: "avatar",
    type: ["node"],
    description: "An element to display as the avatar within the CardHeader.",
    defaultValue: "null",
  },
  {
    prop: "action",
    type: ["node"],
    description:
      "An element displayed as the action button or icon in the header.",
    defaultValue: "null",
  },
  {
    prop: "title",
    type: ["node"],
    description: "The main title text displayed in the header.",
    defaultValue: "null",
  },
  {
    prop: "subheader",
    type: ["node"],
    description: "The subtitle text displayed below the title in the header.",
    defaultValue: "null",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component type of the root node. Defaults to 'div'.",
    defaultValue: "'div'",
  },
  {
    prop: "disableTypography",
    type: ["boolean"],
    description:
      "If true, disables the Typography wrapper around the title and subheader.",
    defaultValue: "false",
  },
  {
    prop: "titleTypographyProps",
    type: ["object"],
    description:
      "Props applied to the Typography element wrapping the title text.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the CardHeader component.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the CardHeader. Supports keys: 'root', 'avatar', 'content', 'title', 'subheader', and 'action'.",
    defaultValue: "{}",
  },
];

export const cardMediaProps = [
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component used for the root node. Examples include 'img', 'video', 'iframe', etc.",
    defaultValue: "'div'",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
  },
  {
    prop: "image",
    type: ["string"],
    description: "The image source to display. Ignored if `src` is provided.",
  },
  {
    prop: "src",
    type: ["string"],
    description:
      "The source to display for media types like video or iframe. Overrides `image` if both are provided.",
  },
  {
    prop: "alt",
    type: ["string"],
    description: "Alternate text for images.",
  },
  {
    prop: "title",
    type: ["string"],
    description:
      "Title for media elements like `iframe` or `video`. Also displayed as a caption when `component` is not 'img', 'video', or 'iframe'.",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "Children elements to display within the media component, primarily for video or iframe captions.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the CardMedia component.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the CardMedia. Supports the 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "Sets the height of the media element.",
  },
];

export const carouselProps = [
  {
    prop: "slides",
    type: ["array"],
    description:
      "An array of slide objects, each containing properties like `image` or `content` to render within each slide.",
  },
  {
    prop: "initialSlide",
    type: ["number"],
    description: "Index of the initial slide displayed in the carousel.",
    defaultValue: 0,
  },
  {
    prop: "slidesPerView",
    type: ["number"],
    description: "Number of slides visible in the view at one time.",
    defaultValue: 1,
  },
  {
    prop: "autoShow",
    type: ["boolean"],
    description:
      "If true, enables automatic slide transitions at intervals specified by the `interval` prop.",
    defaultValue: false,
  },
  {
    prop: "interval",
    type: ["number"],
    description: "Time in milliseconds between automatic slide transitions.",
    defaultValue: 3000,
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the carousel container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for bottom border configuration.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color configuration.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for left border configuration.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border-radius configuration.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for right border configuration.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for top border configuration.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for setting box-shadow.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color configuration using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text and icon color using theme palette values.",
    defaultValue: "'common.white'",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "Sets the height of the carousel container.",
    defaultValue: 200,
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "Sets the width of the carousel container.",
  },
  {
    prop: "hideIndicators",
    type: ["boolean"],
    description: "If true, hides the indicators at the bottom of the carousel.",
    defaultValue: false,
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for setting z-index configuration.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend styles applied to the component. Supports keys like 'root', 'prev', 'next', 'slidesContainer', 'slide', etc.",
  },
];

export const checkboxProps = [
  {
    prop: "checked",
    type: ["boolean"],
    description:
      "If true, the checkbox is checked. Sets the checkbox to a controlled state.",
  },
  {
    prop: "defaultChecked",
    type: ["boolean"],
    description:
      "The initial checked state. Uncontrolled if `checked` is not provided.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the checkbox is disabled.",
  },
  {
    prop: "indeterminate",
    type: ["boolean"],
    description:
      "If true, the checkbox appears indeterminate (partially selected).",
  },
  {
    prop: "label",
    type: ["string", "node"],
    description: "Label text or element to display next to the checkbox.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Defines the color of the checkbox based on the theme or a custom value.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Size of the checkbox. Can be 'small', 'medium', or 'large'.",
    allowedValues: ["small", "medium", "large"],
  },
  {
    prop: "name",
    type: ["string"],
    description: "The name attribute for the input element.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "The id attribute for the input element.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference to the input element.",
  },
  {
    prop: "icon",
    type: ["node"],
    description: "Custom icon to display when the checkbox is unchecked.",
  },
  {
    prop: "checkedIcon",
    type: ["node"],
    description: "Custom icon to display when the checkbox is checked.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback fired when the checked state changes.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles for the checkbox component container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the checkbox.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for component elements such as root, input, and label.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Additional props to pass to the input element.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, the checkbox input is required.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the checkbox is read-only and cannot be changed.",
  },
  {
    prop: "disableRipple",
    type: ["boolean"],
    description: "If true, the ripple effect is disabled.",
  },
  {
    prop: "colorDarkenDegrees",
    type: ["number"],
    description: "Degree to darken the checkbox color.",
  },
  {
    prop: "colorLightenDegrees",
    type: ["number"],
    description: "Degree to lighten the checkbox color.",
  },
];

export const formControlProps = [
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component used for the root node. Can be a string or a component.",
    defaultValue: "div",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "Content to be rendered within the form control, typically form elements.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the root element.",
  },
  {
    prop: "error",
    type: ["boolean"],
    description:
      "If true, applies an error state to the form control and its children.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description:
      "Marks the form control as required, passing the required state to child elements.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the form control container.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific elements of the component, such as root.",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Variant of the form control. Can be used to specify styles such as 'outlined', 'filled', etc.",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Size of the form control, typically 'small', 'medium', or 'large'.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description:
      "Disables the form control if true, passing the disabled state to child elements.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description:
      "Sets the form control as read-only, applying this state to child elements.",
  },
];

export const formControlLabelProps = [
  {
    prop: "label",
    type: ["string"],
    description: "Text or element displayed as the label for the form control.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, adds a required indicator to the label.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description:
      "If true, disables the form control and renders the label in a disabled style.",
  },
  {
    prop: "control",
    type: ["element"],
    description:
      "The control element (e.g., Checkbox or Switch) to render as the form input.",
    isRequired: true,
  },
  {
    prop: "labelPlacement",
    type: ["string"],
    description: "Specifies the position of the label relative to the control.",
    allowedValues: ["start", "end", "top", "bottom"],
    defaultValue: "end",
  },
  {
    prop: "value",
    type: ["string", "number"],
    description: "The value attribute of the control element.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Sets the color of the control element according to theme colors or custom values.",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Specifies the size of the control. Typically 'small', 'medium', or 'large'.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "The name attribute of the control element.",
  },
  {
    prop: "id",
    type: ["string"],
    description:
      "The id attribute of the control element, which links the label to the control.",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "Additional elements or content to render within the form control label.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the root element.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the root element.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific component elements, such as root, wrapper, and label.",
  },
];

export const formGroupProps = [
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component used for the root node. Can be a string (e.g., 'div') or a component.",
    defaultValue: "div",
  },
  {
    prop: "children",
    type: ["node"],
    description: "Content within the form group, typically form controls.",
  },
  {
    prop: "row",
    type: ["boolean"],
    description: "If true, displays the form group in a horizontal row layout.",
    defaultValue: false,
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the root element.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the form group container.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific component elements, such as root.",
  },
];

export const formLabelProps = [
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component used for the root node. Can be a string (e.g., 'label') or a component.",
    defaultValue: "label",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the label, typically text or other elements.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the root element.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description:
      "If true, displays an indicator (usually '*') that the field is required.",
  },
  {
    prop: "error",
    type: ["boolean"],
    description: "If true, applies error styling to the label.",
    defaultValue: false,
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Sets the color of the label text, typically a theme color or a custom color value.",
    defaultValue: "text.primary",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the form label component.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific component elements, such as root and requiredMark.",
  },
];

export const chipProps = [
  {
    prop: "label",
    type: ["string"],
    description: "Text label displayed inside the chip.",
  },
  {
    prop: "onDelete",
    type: ["function"],
    description: "Callback fired when the delete icon is clicked.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the chip is clicked, if clickable.",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Defines the appearance of the chip, such as `filled`, `outlined`, or `text`.",
    options: ["default", "outlined", "text", "contained"],
    defaultValue: "filled",
  },
  {
    prop: "icon",
    type: ["node"],
    description: "Icon to display within the chip, before the label.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Defines the background color of the chip. Supports theme palette colors.",
    defaultValue: "default",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Adjusts the chip size for different layouts.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "avatar",
    type: ["node"],
    description:
      "Avatar element displayed within the chip, usually preceding the label.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component's styles. Available keys are `root`, `avatar`, `icon`, `label`, and `deleteIcon`.",
  },
  {
    prop: "clickable",
    type: ["boolean"],
    description:
      "If true, makes the chip clickable and applies hover/focus styling.",
    defaultValue: false,
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "Optional content to display within the chip, following the label.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component to render the chip as, such as `div` or `Button`.",
    defaultValue: "div",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "Disables the chip if true, making it non-interactive.",
    defaultValue: false,
  },
  {
    prop: "deleteIcon",
    type: ["node"],
    description: "Custom delete icon element to use instead of the default.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the chip container.",
  },
  {
    prop: "className",
    type: ["string"],
    description:
      "Additional CSS class applied to the root container for custom styling.",
  },
  {
    prop: "deleteIconColor",
    type: ["string"],
    description:
      "Defines the color of the delete icon if not provided as a custom icon.",
  },
];

export const colorInputProps = [
  {
    prop: "variant",
    type: ["string"],
    description: "Specifies the style of the input field.",
    options: ["outlined", "filled", "standard"],
    defaultValue: "outlined",
  },
  {
    prop: "label",
    type: ["string"],
    description: "Text label displayed above the input field.",
  },
  {
    prop: "value",
    type: ["string"],
    description:
      "Controlled value for the color input, representing a color code.",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description: "Default color value if the input is uncontrolled.",
    defaultValue: "#000000",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback fired when the color value changes.",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text displayed when input is empty.",
    defaultValue: "",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "Marks the field as required.",
    defaultValue: false,
  },
  {
    prop: "error",
    type: ["boolean"],
    description: "If true, applies error styles.",
    defaultValue: false,
  },
  {
    prop: "helperText",
    type: ["string"],
    description: "Additional information displayed below the input field.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the input.",
    defaultValue: false,
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description: "If true, the input takes up the full width of its container.",
    defaultValue: false,
  },
  {
    prop: "size",
    type: ["string"],
    description: "Specifies the size of the input.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "InputProps",
    type: ["object"],
    description:
      "Properties for the Input component's adornments and additional elements.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Attributes applied directly to the input element.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference to the input element.",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "If true, the input will be focused on initial render.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Callback fired when the input gains focus.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the root element.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the input is read-only.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute for the input element.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "ID attribute for the input element.",
  },
  {
    prop: "step",
    type: ["number"],
    description: "Step size for color adjustments.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The color of the input field, corresponding to theme colors.",
    defaultValue: "primary",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional CSS class for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component’s styles, accepting `root`, `wrapper`, `label`, `adornment`, `adornmentStart`, `adornmentEnd`, `input`, and `helperText` keys.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
];

export const dateCalendarProps = [
  {
    prop: "value",
    type: ["string"],
    description: "The selected date in ISO format (YYYY-MM-DD).",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback fired when a new date is selected. Receives the new date as an argument.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Sets the main color of the calendar.",
    defaultValue: "common.white",
  },
  {
    prop: "inputColor",
    type: ["string"],
    description: "Defines the color of the input field.",
    defaultValue: "primary",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Specifies the visual style of the calendar input.",
    options: ["standard", "outlined", "filled"],
    defaultValue: "outlined",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styles applied to the root element.",
  },
  {
    prop: "label",
    type: ["string"],
    description: "Label for the calendar input.",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description:
      "Default date in ISO format (YYYY-MM-DD) for uncontrolled components.",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text displayed when no value is set.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "Indicates if the field is required.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description:
      "If true, disables the calendar input and prevents date selection.",
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description:
      "If true, the calendar input spans the full width of its container.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Specifies the size of the calendar input.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "If true, sets the focus state of the component.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description:
      "Callback function fired when the calendar input receives focus.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, sets the calendar input to read-only mode.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference to the calendar input field.",
  },
  {
    prop: "disablePast",
    type: ["boolean"],
    description: "If true, disables past dates from being selectable.",
    defaultValue: false,
  },
  {
    prop: "minDate",
    type: ["string"],
    description:
      "Specifies the minimum selectable date in ISO format (YYYY-MM-DD).",
  },
  {
    prop: "disableFuture",
    type: ["boolean"],
    description: "If true, disables future dates from being selectable.",
    defaultValue: false,
  },
  {
    prop: "maxDate",
    type: ["string"],
    description:
      "Specifies the maximum selectable date in ISO format (YYYY-MM-DD).",
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute for the calendar input field.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "ID attribute for the calendar input field.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name(s) for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component's styles, with keys `root` and `paper`.",
  },
];

export const dateFieldProps = [
  {
    prop: "value",
    type: ["string"],
    description: "The date value in ISO format (YYYY-MM-DD).",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback function that is triggered when the date value changes.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The color of the DateField component.",
    defaultValue: "primary",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Specifies the visual style of the input.",
    options: ["standard", "outlined", "filled"],
    defaultValue: "outlined",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text shown when no date is entered.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, the field is required.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the DateField is disabled.",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description:
      "Default date value for uncontrolled input, in ISO format (YYYY-MM-DD).",
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description:
      "If true, the DateField takes up the full width of its container.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "The size of the DateField.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "If true, the DateField will be focused.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Callback function triggered when the DateField is focused.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the DateField is read-only.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute for the input element.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "ID attribute for the input element.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional CSS class for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component's styles. Accepts `root` and `input` keys.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference to the input element.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styling for the root element.",
  },
];

export const datePickerProps = [
  {
    prop: "value",
    type: ["string"],
    description: "The selected date in ISO format (YYYY-MM-DD).",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback fired when a new date is selected. Receives the new date as an argument.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Sets the main color of the calendar control.",
    defaultValue: "common.white",
  },
  {
    prop: "inputColor",
    type: ["string"],
    description: "Sets the color of the input field.",
    defaultValue: "primary",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Specifies the visual style of the input field.",
    options: ["standard", "outlined", "filled"],
    defaultValue: "outlined",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styles applied to the root element.",
  },
  {
    prop: "label",
    type: ["string"],
    description: "Label for the input field.",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description:
      "Default date in ISO format (YYYY-MM-DD) for uncontrolled components.",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text displayed when no value is set.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "Indicates if the field is required.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the input and calendar.",
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description:
      "If true, the input field spans the full width of its container.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Specifies the size of the input field.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "If true, sets the focus state of the component.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Callback function fired when the input field receives focus.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, sets the input field to read-only mode.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference to the input field.",
  },
  {
    prop: "disablePast",
    type: ["boolean"],
    description: "If true, disables past dates from being selected.",
    defaultValue: false,
  },
  {
    prop: "minDate",
    type: ["string"],
    description:
      "Minimum date in ISO format (YYYY-MM-DD) that can be selected.",
  },
  {
    prop: "disableFuture",
    type: ["boolean"],
    description: "If true, disables future dates from being selected.",
    defaultValue: false,
  },
  {
    prop: "maxDate",
    type: ["string"],
    description:
      "Maximum date in ISO format (YYYY-MM-DD) that can be selected.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute of the input field.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "ID attribute of the input field.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name(s) for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component's styles, with keys `root`, `input`, and `calendar`.",
  },
];

export const mobileDatePickerProps = [
  {
    prop: "value",
    type: ["string"],
    description: "The selected date in ISO format (YYYY-MM-DD).",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback fired when a new date is selected. Receives the new date as an argument.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Sets the main color of the calendar control and icons.",
    defaultValue: "common.white",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Specifies the visual style of the input field.",
    options: ["standard", "outlined", "filled"],
    defaultValue: "outlined",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styles applied to the root element.",
  },
  {
    prop: "label",
    type: ["string"],
    description: "Label for the input field.",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description:
      "Default date in ISO format (YYYY-MM-DD) for uncontrolled components.",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text displayed when no value is set.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "Indicates if the field is required.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the input and calendar.",
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description:
      "If true, the input field spans the full width of its container.",
  },
  {
    prop: "size",
    type: ["string"],
    description: "Specifies the size of the input field.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "If true, sets the focus state of the component.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Callback function fired when the input field receives focus.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, sets the input field to read-only mode.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute of the input field.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference to the input field.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "ID attribute of the input field.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name(s) for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component's styles, with keys `root`, `input`, `dialog`, and `paper`.",
  },
];

export const dialogProps = [
  {
    prop: "open",
    type: ["boolean"],
    description: "If true, the dialog is visible.",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback fired when the dialog requests to be closed.",
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description: "If true, the dialog stretches to maxWidth.",
    defaultValue: "false",
  },
  {
    prop: "maxWidth",
    type: ["string"],
    description: "Determines the max-width of the dialog.",
    defaultValue: "'600px'",
  },
  {
    prop: "disableBackdropClick",
    type: ["boolean"],
    description: "If true, clicking the backdrop will not close the dialog.",
    defaultValue: "false",
  },
  {
    prop: "disableEscapeKeyDown",
    type: ["boolean"],
    description: "If true, pressing the Escape key will not close the dialog.",
    defaultValue: "false",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the dialog.",
  },
  {
    prop: "PaperComponent",
    type: ["elementType"],
    description: "Component used as the container for dialog content.",
    defaultValue: "Paper",
  },
  {
    prop: "PaperProps",
    type: ["object"],
    description: "Props applied to the Paper component.",
  },
  {
    prop: "TransitionComponent",
    type: ["elementType"],
    description: "Component used for animating dialog transitions.",
    defaultValue: "Fade",
  },
  {
    prop: "transitionDuration",
    type: ["number", "object"],
    description:
      "The duration (in milliseconds) for the transition. Can be a single number or an object with enter and exit properties.",
    defaultValue: "{ enter: 225, exit: 195 }",
  },
  {
    prop: "TransitionProps",
    type: ["object"],
    description: "Props applied to the Transition component.",
  },
  {
    prop: "fullscreen",
    type: ["boolean"],
    description: "If true, the dialog fills the entire screen.",
  },
  {
    prop: "scroll",
    type: ["string"],
    description: "Defines the scroll behavior within the dialog.",
    defaultValue: "'paper'",
  },
  {
    prop: "showCloseIcon",
    type: ["boolean"],
    description: "If true, displays a close icon button in the dialog header.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the dialog container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend styles. Supports 'overlay' and 'root' keys.",
  },
];

export const dialogActionsProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the DialogActions, typically buttons.",
  },
  {
    prop: "disableSpacing",
    type: ["boolean"],
    description: "If true, disables the default spacing between actions.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the DialogActions container.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "Background color, supports theme colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Text color, supports theme colors.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "Applies box shadow styling.",
  },
  {
    prop: "border",
    type: ["string"],
    description: "Sets border style for the container.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "Defines border radius for rounded corners.",
  },
  {
    prop: "margin",
    type: ["string", "number"],
    description: "Specifies the margin around the container.",
  },
  {
    prop: "marginTop",
    type: ["string", "number"],
    description: "Sets the top margin.",
  },
  {
    prop: "marginBottom",
    type: ["string", "number"],
    description: "Sets the bottom margin.",
  },
  {
    prop: "marginLeft",
    type: ["string", "number"],
    description: "Sets the left margin.",
  },
  {
    prop: "marginRight",
    type: ["string", "number"],
    description: "Sets the right margin.",
  },
  {
    prop: "marginX",
    type: ["string", "number"],
    description: "Sets both left and right margins.",
  },
  {
    prop: "marginY",
    type: ["string", "number"],
    description: "Sets both top and bottom margins.",
  },
  {
    prop: "padding",
    type: ["string", "number"],
    description: "Specifies the padding inside the container.",
  },
  {
    prop: "paddingTop",
    type: ["string", "number"],
    description: "Sets the top padding.",
  },
  {
    prop: "paddingBottom",
    type: ["string", "number"],
    description: "Sets the bottom padding.",
  },
  {
    prop: "paddingLeft",
    type: ["string", "number"],
    description: "Sets the left padding.",
  },
  {
    prop: "paddingRight",
    type: ["string", "number"],
    description: "Sets the right padding.",
  },
  {
    prop: "paddingX",
    type: ["string", "number"],
    description: "Sets both left and right padding.",
  },
  {
    prop: "paddingY",
    type: ["string", "number"],
    description: "Sets both top and bottom padding.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "CSS align-items property to control vertical alignment.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description:
      "CSS justify-content property to control horizontal alignment.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "CSS flex-direction property for layout direction.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description: "Override or extend styles. Supports 'root' key.",
  },
];

export const dialogContentProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the DialogContent, typically text or other elements.",
  },
  {
    prop: "dividers",
    type: ["boolean"],
    description:
      "If true, adds dividers at the top and bottom of the dialog content.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the DialogContent container.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color configuration using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "Applies box shadow styling.",
  },
  {
    prop: "border",
    type: ["string"],
    description: "Sets border style for the container.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "Defines border radius for rounded corners.",
  },
  {
    prop: "margin",
    type: ["string", "number"],
    description: "Specifies the margin around the container.",
  },
  {
    prop: "marginTop",
    type: ["string", "number"],
    description: "Sets the top margin.",
  },
  {
    prop: "marginBottom",
    type: ["string", "number"],
    description: "Sets the bottom margin.",
  },
  {
    prop: "marginLeft",
    type: ["string", "number"],
    description: "Sets the left margin.",
  },
  {
    prop: "marginRight",
    type: ["string", "number"],
    description: "Sets the right margin.",
  },
  {
    prop: "marginX",
    type: ["string", "number"],
    description: "Sets both left and right margins.",
  },
  {
    prop: "marginY",
    type: ["string", "number"],
    description: "Sets both top and bottom margins.",
  },
  {
    prop: "padding",
    type: ["string", "number"],
    description: "Specifies the padding inside the container.",
  },
  {
    prop: "paddingTop",
    type: ["string", "number"],
    description: "Sets the top padding.",
  },
  {
    prop: "paddingBottom",
    type: ["string", "number"],
    description: "Sets the bottom padding.",
  },
  {
    prop: "paddingLeft",
    type: ["string", "number"],
    description: "Sets the left padding.",
  },
  {
    prop: "paddingRight",
    type: ["string", "number"],
    description: "Sets the right padding.",
  },
  {
    prop: "paddingX",
    type: ["string", "number"],
    description: "Sets both left and right padding.",
  },
  {
    prop: "paddingY",
    type: ["string", "number"],
    description: "Sets both top and bottom padding.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "Defines the maximum width for the container.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "Defines the width for the container.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "Defines the height for the container.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "Defines the minimum height for the container.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "Defines the maximum height for the container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description: "Override or extend styles. Supports 'root' key.",
  },
];

export const dialogContentTextProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the DialogContentText, typically text or other elements.",
  },
  {
    prop: "align",
    type: ["string"],
    description: "Sets the alignment of the text content.",
    defaultValue: "'left'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the DialogContentText component.",
  },
  {
    prop: "typographyProps",
    type: ["object"],
    description:
      "Props applied directly to the Typography component within the DialogContentText.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "border",
    type: ["string"],
    description: "System prop for border style configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "System prop for bottom border style.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "System prop for left border style.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius configuration.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between elements.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for column gap between elements.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for row gap between elements.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color configuration.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color configuration.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "typography",
    type: ["string"],
    description:
      "System prop for typography configuration using theme typography settings.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for display configuration.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for align content in flex or grid layouts.",
  },
  {
    prop: "flex",
    type: ["string", "number"],
    description: "System prop for flex configuration in flex layouts.",
  },
];

export const dialogTitleProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the DialogTitle, typically a title text or element.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the DialogTitle component.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "typographyProps",
    type: ["object"],
    description:
      "Props applied directly to the Typography component within the DialogTitle.",
  },
  {
    prop: "border",
    type: ["string"],
    description: "System prop for border style configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "System prop for bottom border style.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "System prop for left border style.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius configuration.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between elements.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for column gap between elements.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for row gap between elements.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color configuration.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color configuration.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "typography",
    type: ["string"],
    description:
      "System prop for typography configuration using theme typography settings.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for display configuration.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for align content in flex or grid layouts.",
  },
  {
    prop: "flex",
    type: ["string", "number"],
    description: "System prop for flex configuration in flex layouts.",
  },
];

export const dividerProps = [
  {
    prop: "className",
    type: ["string"],
    description:
      "Custom CSS class applied to the divider for additional styling.",
  },
  {
    prop: "absolute",
    type: ["boolean"],
    description: "If true, positions the divider absolutely.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "Optional content to display within the divider.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component's default classes. Available keys are `root` and `content`.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "Defines the root component type for the divider, e.g., `hr` or `div`.",
    defaultValue: "hr",
  },
  {
    prop: "flexItem",
    type: ["boolean"],
    description:
      "If true, allows the divider to resize flexibly within a flex container.",
  },
  {
    prop: "light",
    type: ["boolean"],
    description: "Applies a lighter color tone to the divider.",
  },
  {
    prop: "orientation",
    type: ["string"],
    description: "Specifies the divider’s orientation.",
    options: ["horizontal", "vertical"],
    defaultValue: "horizontal",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the divider root.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "Sets the alignment of the divider content, if any.",
    options: ["center", "left", "right"],
    defaultValue: "center",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Defines the display style of the divider.",
    options: ["fullWidth", "inset", "middle"],
    defaultValue: "fullWidth",
  },
];

export const drawerProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed inside the drawer.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "Controls the visibility of the drawer.",
    defaultValue: true,
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "The variant of the drawer: 'temporary' will show the drawer on a toggle, while 'permanent' will always show it.",
    defaultValue: "'temporary'",
  },
  {
    prop: "anchor",
    type: ["string"],
    description: "The anchor position of the drawer.",
    defaultValue: "'left'",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback fired when the drawer is requested to be closed.",
  },
  {
    prop: "elevation",
    type: ["number"],
    description: "The elevation (shadow depth) of the drawer.",
    defaultValue: 3,
  },
  {
    prop: "hideBackdrop",
    type: ["boolean"],
    description: "If true, the backdrop will be hidden.",
  },
  {
    prop: "transitionDuration",
    type: ["number"],
    description: "Duration of the transition animation in milliseconds.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the drawer.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the drawer. Supports 'root' and 'content' keys.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for setting top border.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for setting right border.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting bottom border.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for setting left border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for setting border radius.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["number"],
    description: "System prop for setting the z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for setting width.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for setting max-width.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for setting min-width.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for setting height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for setting max-height.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for setting min-height.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for setting font family.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for setting font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for setting font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for setting font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for setting letter spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for setting line height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for setting text alignment.",
  },
  {
    prop: "flex",
    type: ["string", "number"],
    description: "System prop for setting flex property.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "System prop for setting flex direction.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for setting flex grow property.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for setting flex shrink property.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description: "System prop for setting flex wrap property.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for setting justify-content property.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for setting align-items property.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for setting align-content property.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for setting align-self property.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for setting order of flex items.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column layout.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row layout.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for automatic grid item placement.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns layout.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows layout.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for defining grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for defining grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for defining grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for specifying grid area.",
  },
];

export const swipeableDrawerProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed inside the drawer.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "Controls the visibility of the drawer.",
    defaultValue: true,
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "The variant of the drawer: 'temporary' will show the drawer on a toggle, while 'permanent' will always show it.",
    defaultValue: "'temporary'",
  },
  {
    prop: "anchor",
    type: ["string"],
    description: "The anchor position of the drawer.",
    defaultValue: "'left'",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback fired when the drawer is requested to be closed.",
  },
  {
    prop: "elevation",
    type: ["number"],
    description: "The elevation (shadow depth) of the drawer.",
    defaultValue: 3,
  },
  {
    prop: "hideBackdrop",
    type: ["boolean"],
    description: "If true, the backdrop will be hidden.",
  },
  {
    prop: "transitionDuration",
    type: ["number"],
    description: "Duration of the transition animation in milliseconds.",
  },
  {
    prop: "swipeArea",
    type: ["number"],
    description: "Width of the swipe area in pixels for closing the drawer.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the drawer.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the drawer. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for setting top border.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for setting right border.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting bottom border.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for setting left border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for setting border radius.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["number"],
    description: "System prop for setting the z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for setting width.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for setting max-width.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for setting min-width.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for setting height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for setting max-height.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for setting min-height.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for setting font family.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for setting font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for setting font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for setting font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for setting letter spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for setting line height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for setting text alignment.",
  },
  {
    prop: "flex",
    type: ["string", "number"],
    description: "System prop for setting flex property.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "System prop for setting flex direction.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for setting flex grow property.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for setting flex shrink property.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description: "System prop for setting flex wrap property.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for setting justify-content property.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for setting align-items property.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for setting align-content property.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for setting align-self property.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for setting order of flex items.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column layout.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row layout.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for automatic grid item placement.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns layout.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows layout.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for defining grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for defining grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for defining grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for specifying grid area.",
  },
];

export const fabProps = [
  {
    prop: "variant",
    type: ["string"],
    description: "Defines the button shape. Can be 'round' or 'extended'.",
    allowedValues: ["round", "extended"],
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Sets the background color of the button based on theme or a custom color value.",
  },
  {
    prop: "textColor",
    type: ["string"],
    description:
      "Sets the text color for the button content. Falls back to a contrasting color if not specified.",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Defines the size of the button. Options are 'small', 'medium', or 'large'.",
    allowedValues: ["small", "medium", "large"],
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "Disables the button if true, preventing interaction.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback function fired when the button is clicked.",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "Content to be displayed inside the button, such as text or an icon.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling of the button.",
  },
  {
    prop: "startIcon",
    type: ["node"],
    description: "Icon element displayed at the start of the button content.",
  },
  {
    prop: "endIcon",
    type: ["node"],
    description: "Icon element displayed at the end of the button content.",
  },
  {
    prop: "disableElevation",
    type: ["boolean"],
    description: "If true, removes the box shadow from the button.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the button component.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific component parts, such as root and icon.",
  },
  {
    prop: "disableRipple",
    type: ["boolean"],
    description: "If true, disables the ripple effect on click.",
  },
];

export const linkProps = [
  {
    prop: "href",
    type: ["string"],
    description:
      "The URL to link to. This is rendered as an <a> element's href attribute.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the link. Defaults to 'a'.",
    defaultValue: "'a'",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The color of the link text, using theme values.",
    defaultValue: "'primary'",
  },
  {
    prop: "underline",
    type: ["string"],
    description: "Controls the underline style of the link.",
    defaultValue: "'always'",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed within the link.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the link.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the link. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for setting top border.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for setting right border.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting bottom border.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for setting left border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for setting border radius.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for setting box-shadow.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["number"],
    description: "System prop for setting the z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography style configuration.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for position configuration.",
  },
];

export const paginationProps = [
  {
    prop: "count",
    type: ["number"],
    description: "The total number of pages.",
    required: true,
  },
  {
    prop: "page",
    type: ["number"],
    description: "The current active page.",
  },
  {
    prop: "defaultPage",
    type: ["number"],
    description: "The default page to display when uncontrolled.",
    defaultValue: 1,
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback function triggered when the page changes.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The color of the pagination buttons, using theme values.",
    defaultValue: "'primary'",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the pagination buttons.",
    defaultValue: false,
  },
  {
    prop: "hideNextButton",
    type: ["boolean"],
    description: "If true, hides the next page button.",
    defaultValue: false,
  },
  {
    prop: "hidePrevButton",
    type: ["boolean"],
    description: "If true, hides the previous page button.",
    defaultValue: false,
  },
  {
    prop: "shape",
    type: ["string"],
    description: "The shape of the pagination buttons.",
    defaultValue: "'round'",
  },
  {
    prop: "size",
    type: ["string"],
    description: "The size of the pagination buttons.",
    defaultValue: "'medium'",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "The variant of the pagination buttons.",
    defaultValue: "'contained'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the pagination.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the pagination. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "previousIcon",
    type: ["string"],
    description: "Icon for the previous page button.",
    defaultValue: "'chevron_left'",
  },
  {
    prop: "nextIcon",
    type: ["string"],
    description: "Icon for the next page button.",
    defaultValue: "'chevron_right'",
  },
  {
    prop: "showFirstButton",
    type: ["boolean"],
    description: "If true, shows the button to go to the first page.",
    defaultValue: false,
  },
  {
    prop: "showLastButton",
    type: ["boolean"],
    description: "If true, shows the button to go to the last page.",
    defaultValue: false,
  },
];

export const speedDialProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The elements that will be displayed when the SpeedDial is open.",
  },
  {
    prop: "icon",
    type: ["node"],
    description: "The icon displayed on the SpeedDial button.",
  },
  {
    prop: "direction",
    type: ["string"],
    description: "The direction the SpeedDial expands to.",
    defaultValue: "'up'",
  },
  {
    prop: "hidden",
    type: ["boolean"],
    description: "If true, hides the SpeedDial.",
    defaultValue: false,
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback fired when the SpeedDial is closed.",
  },
  {
    prop: "onOpen",
    type: ["function"],
    description: "Callback fired when the SpeedDial is opened.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "If true, the SpeedDial is open.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The color of the SpeedDial button, using theme values.",
    defaultValue: "'primary'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the SpeedDial.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the SpeedDial. Supports 'root', 'icon', 'button', and 'options' keys.",
    defaultValue: "{}",
  },
  {
    prop: "elevation",
    type: ["number"],
    description: "The elevation of the SpeedDial button.",
    defaultValue: 3,
  },
  {
    prop: "hideBackdrop",
    type: ["boolean"],
    description: "If true, hides the backdrop when the SpeedDial is open.",
    defaultValue: false,
  },
  {
    prop: "transitionDuration",
    type: ["number"],
    description:
      "The duration of the transition when opening/closing the SpeedDial.",
  },
  {
    prop: "swipeArea",
    type: ["number"],
    description:
      "The width of the swipeable area for opening/closing the drawer.",
    defaultValue: 50,
  },
];

export const speedDialActionProps = [
  {
    prop: "icon",
    type: ["node"],
    description: "The icon displayed on the SpeedDial action button.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback function fired when the action button is clicked.",
  },
  {
    prop: "tooltipTitle",
    type: ["node"],
    description: "The content of the tooltip displayed on hover.",
  },
  {
    prop: "tooltipPlacement",
    type: ["string"],
    description: "The position of the tooltip relative to the action button.",
    defaultValue: "'left'",
  },
  {
    prop: "tooltipEnterDelay",
    type: ["number"],
    description: "Delay in milliseconds before the tooltip appears.",
  },
  {
    prop: "tooltipLeaveDelay",
    type: ["number"],
    description: "Delay in milliseconds before the tooltip disappears.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the action button.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' and 'icon' keys.",
    defaultValue: "{}",
  },
];

export const speedDialIconProps = [
  {
    prop: "openIcon",
    type: ["node"],
    description: "The icon displayed when the SpeedDial is open.",
  },
  {
    prop: "icon",
    type: ["node"],
    description: "The icon displayed when the SpeedDial is closed.",
    defaultValue: "<SvgIcon icon='add' color='#fff' />",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the SpeedDial icon.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "Indicates whether the SpeedDial is open.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the SpeedDial icon. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color applied to the SpeedDial icon.",
  },
];

export const fadeProps = [
  {
    prop: "in",
    type: ["boolean"],
    description: "If true, the component is shown.",
    defaultValue: "true",
  },
  {
    prop: "timeout",
    type: ["number","object"],
    description: "Duration of the transition.",
    defaultValue: "{ enter: 300, exit: 300 }",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Custom styles for the component.",
    defaultValue: "{}",
  },
  {
    prop: "appear",
    type: ["boolean"],
    description:
      "If true, the transition is applied when the component first mounts.",
    defaultValue: "true",
  },
  {
    prop: "easing",
    type: ["string"],
    description: "Easing function for the transition.",
    defaultValue: "'ease'",
  },
  {
    prop: "addEndListener",
    type: ["function"],
    description: "Function to call at the end of the transition.",
  },
];

export const growProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed.",
  },
  {
    prop: "in",
    type: ["boolean"],
    description: "If true, the component is shown.",
  },
  {
    prop: "timeout",
    type: ["number","object"],
    description: "Duration of the transition.",
    defaultValue: "300",
  },
  {
    prop: "easing",
    type: ["string"],
    description: "Easing function for the transition.",
  },
  {
    prop: "addEndListener",
    type: ["function"],
    description: "Function to call at the end of the transition.",
  },
  {
    prop: "appear",
    type: ["boolean"],
    description:
      "If true, the transition is applied when the component first mounts.",
    defaultValue: "true",
  },
  {
    prop: "unmountOnExit",
    type: ["boolean"],
    description:
      "If true, the component is removed from the DOM when not visible.",
    defaultValue: "false",
  },
];

export const zoomProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed.",
  },
  {
    prop: "in",
    type: ["boolean"],
    description: "If true, the component is shown.",
  },
  {
    prop: "timeout",
    type: ["number"],
    description: "Duration of the transition.",
    defaultValue: "300",
  },
  {
    prop: "delay",
    type: ["number"],
    description: "Delay before the transition starts.",
    defaultValue: "300",
  },
  {
    prop: "easing",
    type: ["string"],
    description: "Easing function for the transition.",
  },
  {
    prop: "addEndListener",
    type: ["function"],
    description: "Function to call at the end of the transition.",
  },
  {
    prop: "appear",
    type: ["boolean"],
    description:
      "If true, the transition is applied when the component first mounts.",
    defaultValue: "true",
  },
  {
    prop: "unmountOnExit",
    type: ["boolean"],
    description:
      "If true, the component is removed from the DOM when not visible.",
    defaultValue: "false",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Custom styles for the component.",
  },
];

export const transitionGroupProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content to be transitioned.",
  },
];

export const slideProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed within the Slide component.",
  },
  {
    prop: "addEndListener",
    type: ["function"],
    description: "Function called at the end of the transition.",
  },
  {
    prop: "appear",
    type: ["boolean"],
    description:
      "If true, the transition is applied when the component first mounts.",
    defaultValue: "true",
  },
  {
    prop: "container",
    type: ["object","function"],
    description: "The container for the slide component.",
  },
  {
    prop: "direction",
    type: ["string"],
    description: "The direction in which the component slides.",
    defaultValue: "'right'",
  },
  {
    prop: "easing",
    type: ["string","object"],
    description: "Easing function for the transition.",
  },
  {
    prop: "in",
    type: ["boolean"],
    description: "If true, the component is shown.",
  },
  {
    prop: "timeout",
    type: [
"number","object"
    ],
    description: "Duration of the transition.",
    defaultValue: "500",
  },
];

export const baseTextareaAutosizeProps = [
  {
    prop: "minRows",
    type: ["number"],
    description: "Minimum number of rows the textarea can expand to.",
    defaultValue: 1,
  },
  {
    prop: "maxRows",
    type: ["number"],
    description: "Maximum number of rows the textarea can expand to.",
    defaultValue: "Infinity",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text displayed in the textarea when empty.",
    defaultValue: "",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Custom styles to apply to the textarea.",
  },
  {
    prop: "onInput",
    type: ["function"],
    description: "Callback function triggered on input event.",
  },
];

export const barChartProps = [
  {
    prop: "xAxis",
    type: ["array"],
    description: "Labels for the X-axis categories.",
  },
  {
    prop: "yAxis",
    type: ["array"],
    description: "Values for the Y-axis.",
  },
  {
    prop: "series",
    type: ["array"],
    description: "Data series, each with a category and values.",
    shape: {
      category: "string",
      values: [
        {
          id: "number",
          value: "number",
          rootID: "number",
        },
      ],
    },
  },
  {
    prop: "barSize",
    type: ["number"],
    description: "Width of each bar.",
    defaultValue: 40,
  },
  {
    prop: "barGap",
    type: ["number"],
    description: "Gap between bars.",
    defaultValue: 1,
  },
  {
    prop: "xGap",
    type: ["number"],
    description: "Gap between groups on the X-axis.",
    defaultValue: 0,
  },
  {
    prop: "margin",
    type: ["object"],
    description: "Margins for the chart.",
    shape: {
      top: "number",
      right: "number",
      bottom: "number",
      left: "number",
    },
    defaultValue: { top: 20, right: 30, bottom: 50, left: 20 },
  },
  {
    prop: "width",
    type: ["number"],
    description: "Width of the chart.",
    defaultValue: 500,
  },
  {
    prop: "height",
    type: ["number"],
    description: "Height of the chart.",
    defaultValue: 300,
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color for the bars.",
    defaultValue: "primary",
  },
  {
    prop: "overallColor",
    type: ["boolean"],
    description: "If true, applies the main color to all bars.",
    defaultValue: false,
  },
];

export const gaugeProps = [
  {
    prop: "width",
    type: ["number"],
    description: "Width of the gauge.",
  },
  {
    prop: "height",
    type: ["number"],
    description: "Height of the gauge.",
  },
  {
    prop: "value",
    type: ["number"],
    description: "Current value of the gauge.",
  },
  {
    prop: "startAngle",
    type: ["number"],
    description: "Starting angle for the gauge.",
    defaultValue: 0,
  },
  {
    prop: "endAngle",
    type: ["number"],
    description: "Ending angle for the gauge.",
    defaultValue: 360,
  },
  {
    prop: "valueMin",
    type: ["number"],
    description: "Minimum value for the gauge.",
    defaultValue: 0,
  },
  {
    prop: "valueMax",
    type: ["number"],
    description: "Maximum value for the gauge.",
    defaultValue: 100,
  },
  {
    prop: "arcWidth",
    type: ["number"],
    description: "Width of the arc.",
    defaultValue: 10,
  },
  {
    prop: "text",
    type: ["function"],
    description: "Function to format the text displayed in the center.",
  },
  {
    prop: "pointer",
    type: ["boolean"],
    description: "If true, displays a pointer.",
    defaultValue: false,
  },
  {
    prop: "hideText",
    type: ["boolean"],
    description: "If true, hides the text in the center.",
    defaultValue: false,
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color for the arc.",
    defaultValue: "primary",
  },
  {
    prop: "textColor",
    type: ["string"],
    description: "Color for the text.",
    defaultValue: "text",
  },
  {
    prop: "pointerColor",
    type: ["string"],
    description: "Color for the pointer.",
    defaultValue: "primary",
  },
];

export const lineChartProps = [
  {
    prop: "xAxis",
    type: ["array"],
    description: "Labels for the X-axis.",
  },
  {
    prop: "yAxis",
    type: ["array"],
    description: "Values for the Y-axis.",
  },
  {
    prop: "points",
    type: ["array"],
    description: "Data points to plot on the chart.",
    shape: {
      id: "number",
      value: ["arrayOf(number)"],
      matchID: "number",
      area: "boolean",
    },
  },
  {
    prop: "width",
    type: ["number"],
    description: "Width of the chart.",
  },
  {
    prop: "height",
    type: ["number"],
    description: "Height of the chart.",
  },
  {
    prop: "margin",
    type: ["object"],
    description: "Margins for the chart.",
    shape: {
      top: "number",
      right: "number",
      bottom: "number",
      left: "number",
    },
    defaultValue: { top: 20, right: 30, bottom: 30, left: 40 },
  },
  {
    prop: "grid",
    type: ["object"],
    description: "Grid display settings.",
    shape: {
      vertical: "boolean",
      horizontal: "boolean",
    },
    defaultValue: { vertical: true, horizontal: true },
  },
  {
    prop: "match",
    type: ["boolean"],
    description: "If true, connects points with a matching ID.",
    defaultValue: true,
  },
  {
    prop: "areaColor",
    type: ["string"],
    description: "Color for the area under the line.",
    defaultValue: "primary",
  },
  {
    prop: "pointColor",
    type: ["string"],
    description: "Color for the points on the line.",
    defaultValue: "secondary",
  },
  {
    prop: "matchColor",
    type: ["string"],
    description: "Color for the matching line.",
    defaultValue: "warning",
  },
];

export const pieChartProps = [
  {
    prop: "series",
    type: ["array"],
    description: "Data series for the pie chart.",
    shape: {
      id: "oneOfType([string, number])",
      value: "number",
      label: "string",
      color: "string",
      arcLabel: "function",
    },
  },
  {
    prop: "width",
    type: ["number"],
    description: "Width of the chart.",
  },
  {
    prop: "height",
    type: ["number"],
    description: "Height of the chart.",
  },
  {
    prop: "paddingAngle",
    type: ["number"],
    description: "Angle padding between pie slices.",
    defaultValue: 0,
  },
  {
    prop: "innerRadius",
    type: ["number"],
    description: "Inner radius for the pie chart (percentage).",
    defaultValue: 50,
  },
  {
    prop: "startAngle",
    type: ["number"],
    description: "Starting angle for the pie chart.",
    defaultValue: 0,
  },
  {
    prop: "endAngle",
    type: ["number"],
    description: "Ending angle for the pie chart.",
    defaultValue: 360,
  },
  {
    prop: "overallColor",
    type: ["boolean"],
    description: "If true, applies the main color to all slices.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color for the pie slices.",
    defaultValue: "primary",
  },
  {
    prop: "hideLabel",
    type: ["boolean"],
    description: "If true, hides the labels on slices.",
    defaultValue: false,
  },
  {
    prop: "labelColor",
    type: ["string"],
    description: "Color for the slice labels.",
    defaultValue: "text",
  },
  {
    prop: "labelSize",
    type: ["number"],
    description: "Font size for the slice labels.",
    defaultValue: 12,
  },
  {
    prop: "arcLabelMinAngle",
    type: ["number"],
    description: "Minimum angle for labels to be displayed.",
    defaultValue: 0,
  },
];

export const sparkLineChartProps = [
  {
    prop: "data",
    type: ["array"],
    description: "Data points for the sparkline chart.",
  },
  {
    prop: "height",
    type: ["number"],
    description: "Height of the sparkline chart.",
  },
  {
    prop: "width",
    type: ["string","number"],
    description: "Width of the sparkline chart.",
    defaultValue: "100%",
  },
  {
    prop: "plotType",
    type: ["string"],
    description: "Type of the plot, either 'line' or 'bar'.",
    defaultValue: "line",
  },
  {
    prop: "showHighlight",
    type: ["boolean"],
    description: "If true, highlights the points on hover.",
    defaultValue: true,
  },
  {
    prop: "showTooltip",
    type: ["boolean"],
    description: "If true, displays a tooltip on hover.",
    defaultValue: true,
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color for the sparkline.",
    defaultValue: "primary",
  },
  {
    prop: "yAxis",
    type: ["object"],
    description: "Y-axis settings.",
    shape: {
      min: "number",
      max: "number",
    },
  },
];

export const listItemProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the list item, typically composed of text or other components.",
  },
  {
    prop: "button",
    type: ["boolean"],
    description:
      "If true, the ListItem is rendered with button behavior (e.g., focus and click effects).",
  },
  {
    prop: "dense",
    type: ["boolean"],
    description:
      "If true, compact vertical padding is applied to the list item.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the list item is disabled.",
  },
  {
    prop: "divider",
    type: ["boolean"],
    description: "If true, a divider is shown below the list item.",
  },
  {
    prop: "selected",
    type: ["boolean"],
    description: "If true, the list item appears selected.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the list item is clicked.",
  },
  {
    prop: "disableGutters",
    type: ["boolean"],
    description:
      "If true, removes gutters (left and right padding) from the list item.",
  },
  {
    prop: "disablePadding",
    type: ["boolean"],
    description: "If true, removes padding from the list item.",
  },
  {
    prop: "secondaryAction",
    type: ["node"],
    description:
      "Element displayed at the end of the list item, typically an icon or action button.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The root component to use for the ListItem, defaulting to 'li'.",
    defaultValue: "'li'",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the list item.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for border configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for configuring the bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color configuration.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for configuring the left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border-radius configuration.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for configuring the right border.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for configuring the top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box-shadow configuration.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color configuration using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for layering order configuration.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for configuring the left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for configuring the right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for configuring the top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for configuring the left and right margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for configuring the left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for configuring the right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for configuring the top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for configuring the left and right padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom padding.",
  },
  {
    prop: "typography",
    type: ["string"],
    description:
      "System prop for typography configuration using theme typography settings.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size configuration.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style configuration.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight configuration.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing configuration.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height configuration.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment configuration.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height configuration.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width configuration.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height configuration.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width configuration.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
];

export const listProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the list, typically composed of list items or subheaders.",
  },
  {
    prop: "dense",
    type: ["boolean"],
    description: "If true, compact vertical padding is applied to the list.",
    defaultValue: "true",
  },
  {
    prop: "disablePadding",
    type: ["boolean"],
    description: "If true, removes padding from the list.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the list.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "subheader",
    type: ["node"],
    description:
      "Element displayed at the top of the list, typically a header or title.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for setting background color using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for setting margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for setting bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for setting left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for setting right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for setting top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for setting horizontal margins (left and right).",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for setting vertical margins (top and bottom).",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for setting padding.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for setting bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for setting left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for setting right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for setting top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for setting horizontal padding (left and right).",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for setting vertical padding (top and bottom).",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography settings from theme.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family settings.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size settings.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style settings.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight settings.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing settings.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height settings.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment settings.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for setting the height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for setting the maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for setting the maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for setting the minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for setting the minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for setting the width.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description: "System prop for box-sizing settings.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for display settings.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for position settings.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' and 'subheader' keys.",
  },
];

export const listItemAvatarProps = [
  {
    prop: "children",
    type: ["element"],
    description:
      "The avatar element or any content to be rendered within the ListItemAvatar component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "alt",
    type: ["string"],
    description: "Alternative text for the avatar image, if applicable.",
    defaultValue: '""',
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the ListItemAvatar component.",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting the border.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting the bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for setting the border color.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for setting the left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for setting the border radius.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for setting the right border.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for setting the top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for setting the box shadow.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for setting the background color using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for setting the text color using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for setting the margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for setting the bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for setting the left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for setting the right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for setting the top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for setting horizontal margins (left and right).",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for setting vertical margins (top and bottom).",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for setting the padding.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for setting the bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for setting the left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for setting the right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for setting the top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for setting horizontal padding (left and right).",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for setting vertical padding (top and bottom).",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for setting the height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for setting the maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for setting the maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for setting the minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for setting the minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for setting the width.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for setting display type (e.g., flex, block).",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for aligning content along the cross-axis.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for aligning items along the cross-axis.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for self-alignment along the cross-axis.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for justifying content along the main axis.",
  },
  {
    prop: "order",
    type: ["number"],
    description: "System prop for controlling item order in flex layouts.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Customizes the styles applied to the component, supporting the 'root' key.",
  },
];

export const listItemButtonProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the ListItemButton, typically text or other components.",
  },
  {
    prop: "dense",
    type: ["boolean"],
    description: "If true, applies compact vertical padding to the button.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the button, preventing user interactions.",
  },
  {
    prop: "divider",
    type: ["boolean"],
    description: "If true, adds a divider below the button.",
  },
  {
    prop: "selected",
    type: ["boolean"],
    description: "If true, highlights the button as selected.",
  },
  {
    prop: "selectedColor",
    type: ["string"],
    description:
      "The color applied when the button is selected, based on theme palette colors.",
    defaultValue: "'primary'",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the button is clicked.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "autoFocus",
    type: ["boolean"],
    description: "If true, the button will receive focus on mount.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The root component to use for the ListItemButton, defaulting to 'div'.",
    defaultValue: "'div'",
  },
  {
    prop: "disableGutters",
    type: ["boolean"],
    description: "If true, removes padding from the button.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the button.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Customizes the styles applied to the component, supporting the 'root' key.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for setting background color using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for setting the text color using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for setting margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for setting bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for setting left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for setting right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for setting top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for setting horizontal margins (left and right).",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for setting vertical margins (top and bottom).",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for setting padding.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for setting bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for setting left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for setting right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for setting top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for setting horizontal padding (left and right).",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for setting vertical padding (top and bottom).",
  },
  {
    prop: "typography",
    type: ["string"],
    description:
      "System prop for setting typography using theme typography values.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for setting the font family.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for setting font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for setting font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for setting font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for setting letter spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for setting line height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for setting text alignment.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for setting height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for setting maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for setting maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for setting minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for setting minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for setting width.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description: "System prop for setting box-sizing property.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for setting position (e.g., absolute, relative).",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for setting the top position.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for setting the right position.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for setting the bottom position.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for setting the left position.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for setting display (e.g., flex, block).",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for aligning content along the cross-axis.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for aligning items along the cross-axis.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for self-alignment along the cross-axis.",
  },
  {
    prop: "flex",
    type: ["string", "number"],
    description: "System prop for flex settings in flex layouts.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "System prop for flex direction in flex layouts.",
  },
  {
    prop: "flexGrow",
    type: ["number"],
    description: "System prop for flex grow settings in flex layouts.",
  },
  {
    prop: "flexShrink",
    type: ["number"],
    description: "System prop for flex shrink settings in flex layouts.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description: "System prop for flex wrapping behavior in flex layouts.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for justifying content along the main axis.",
  },
  {
    prop: "order",
    type: ["number"],
    description: "System prop for item order in flex layouts.",
  },
];

export const listItemIconProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the ListItemIcon, typically an icon element.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the ListItemIcon is clicked.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the component.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size configuration.",
  },
  {
    prop: "margin",
    type: ["string", "number"],
    description: "System prop for setting margin.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for setting margin shorthand.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for setting bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for setting left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for setting right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for setting top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for setting horizontal margins (left and right).",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for setting vertical margins (top and bottom).",
  },
  {
    prop: "padding",
    type: ["string", "number"],
    description: "System prop for setting padding.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding shorthand.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for setting bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for setting left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for setting right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for setting top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for setting horizontal padding (left and right).",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for setting vertical padding (top and bottom).",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for setting background color using theme palette colors.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for setting box shadow.",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for setting border color.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for setting left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for setting border radius.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for setting right border.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for setting top border.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description:
      "System prop for setting alignment along the cross-axis within a flex container.",
  },
  {
    prop: "flex",
    type: ["string", "number"],
    description:
      "System prop for setting flex-grow, flex-shrink, and flex-basis.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description:
      "System prop for setting the direction of flex items within a flex container.",
  },
  {
    prop: "flexGrow",
    type: ["number"],
    description: "System prop for setting flex-grow within a flex container.",
  },
  {
    prop: "flexShrink",
    type: ["number"],
    description: "System prop for setting flex-shrink within a flex container.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description:
      "System prop for setting whether flex items should wrap onto multiple lines.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for setting height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for setting maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for setting maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for setting minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for setting minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for setting width.",
  },
  {
    prop: "position",
    type: ["string"],
    description:
      "System prop for setting positioning, e.g., 'absolute' or 'relative'.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for setting the top position.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for setting the right position.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for setting the bottom position.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for setting the left position.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for setting text alignment.",
  },
  {
    prop: "typography",
    type: ["string"],
    description:
      "System prop for setting typography styles using theme typography values.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for setting font family.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for setting font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for setting font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for setting letter spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for setting line height.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component, supporting the 'root' key.",
  },
];

export const listItemTextProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The primary content of the list item text. Displayed as primary if no primary prop is specified.",
  },
  {
    prop: "primary",
    type: ["node"],
    description: "Main content displayed as the primary text in the list item.",
  },
  {
    prop: "secondary",
    type: ["node"],
    description:
      "Secondary text content displayed below or alongside the primary text.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "primaryTypographyProps",
    type: ["object"],
    description: "Props applied to the primary Typography component.",
  },
  {
    prop: "secondaryTypographyProps",
    type: ["object"],
    description: "Props applied to the secondary Typography component.",
  },
  {
    prop: "inset",
    type: ["boolean"],
    description: "If true, adds inset margin to the start of the ListItemText.",
  },
  {
    prop: "noWrap",
    type: ["boolean"],
    description:
      "If true, the text will not wrap, and ellipsis will be applied for overflow.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the component.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for setting background color using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography settings using theme values.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding (left and right).",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding (top and bottom).",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins (left and right).",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins (top and bottom).",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports the 'root' key.",
  },
];

export const listSubheaderProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the subheader, usually text or elements like icons.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Defines the color of the subheader text.",
    defaultValue: "'default'",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root element. Defaults to 'li'.",
    defaultValue: "'li'",
  },
  {
    prop: "disableGutters",
    type: ["boolean"],
    description: "If true, removes padding on the sides of the subheader.",
    defaultValue: "false",
  },
  {
    prop: "disableSticky",
    type: ["boolean"],
    description: "If true, disables the sticky positioning of the subheader.",
    defaultValue: "false",
  },
  {
    prop: "inset",
    type: ["boolean"],
    description:
      "If true, the subheader is inset, adding margin to the left side.",
    defaultValue: "false",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the component.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for setting background color using theme palette colors.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography settings using theme values.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size configuration.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style configuration.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight configuration.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing configuration.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height configuration.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment configuration.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin configuration.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin configuration.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin configuration.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin configuration.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins (left and right).",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins (top and bottom).",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding configuration.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding configuration.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding configuration.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding configuration.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding (left and right).",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding (top and bottom).",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports the 'root' key.",
  },
];

export const menuProps = [
  {
    prop: "anchorEl",
    type: ["object"],
    description:
      "Element that the menu will use as an anchor to set its position.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "If true, the menu is displayed.",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback function that triggers when the menu is closed.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the menu component.",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Defines the menu appearance, either as a 'menu' or 'list'.",
    defaultValue: "'menu'",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
  },
  {
    prop: "anchorOrigin",
    type: ["object"],
    description:
      "Defines the origin of the menu's anchor position relative to the anchorEl.",
    defaultValue: "{ vertical: 'bottom', horizontal: 'center' }",
  },
  {
    prop: "transformOrigin",
    type: ["object"],
    description:
      "Specifies the point on the menu used for positioning in relation to the anchor origin.",
    defaultValue: "{ vertical: 'top', horizontal: 'center' }",
  },
  {
    prop: "anchorPosition",
    type: ["object"],
    description:
      "Explicitly sets the top and left position of the menu. Overrides anchorEl if provided.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the menu component.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend styles applied to the component. Supports 'root' key.",
    defaultValue: "{}",
  },
];

export const menuItemProps = [
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback function triggered when the menu item is clicked.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the menu item is disabled and not selectable.",
    defaultValue: false,
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content displayed within the menu item.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "dense",
    type: ["boolean"],
    description: "If true, applies dense padding to the menu item.",
    defaultValue: false,
  },
  {
    prop: "divider",
    type: ["boolean"],
    description: "If true, adds a divider below the menu item.",
    defaultValue: false,
  },
  {
    prop: "selected",
    type: ["boolean"],
    description: "If true, applies selected styling to the menu item.",
    defaultValue: false,
  },
  {
    prop: "autoFocus",
    type: ["boolean"],
    description: "If true, the menu item receives focus on mount.",
    defaultValue: false,
  },
  {
    prop: "role",
    type: ["string"],
    description: "Specifies the ARIA role of the component.",
    defaultValue: "'menuitem'",
  },
  {
    prop: "tabIndex",
    type: ["number"],
    description: "Sets the tabIndex attribute, controlling focus behavior.",
    defaultValue: 0,
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "Specifies the HTML tag or custom component for the root element.",
    defaultValue: "'div'",
  },
  {
    prop: "disableGutters",
    type: ["boolean"],
    description:
      "If true, removes the default padding (gutters) from the content.",
    defaultValue: false,
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the menu item.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' and 'content' keys.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box-shadow configuration.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography style configuration.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for position configuration.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
];

export const menuListProps = [
  {
    prop: "autoFocusItem",
    type: ["boolean"],
    description:
      "If true, automatically focuses the first item when the MenuList is opened.",
    defaultValue: false,
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the MenuList, typically MenuItem components.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "disablePadding",
    type: ["boolean"],
    description:
      "If true, removes the default padding from the MenuList component.",
    defaultValue: false,
  },
  {
    prop: "onKeyDown",
    type: ["function"],
    description:
      "Callback function that is triggered when a key is pressed within the MenuList.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the MenuList component.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports the 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color, utilizing theme palette values if provided.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color, utilizing theme palette values.",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting the bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for setting the left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for setting border radius.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for setting the right border.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for setting the top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box-shadow configuration.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for setting maximum height.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for setting minimum height.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for setting the width.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index configuration.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding (left and right).",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding (top and bottom).",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margin (left and right).",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margin (top and bottom).",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography configuration.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height.",
  },
];

export const paperProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content displayed within the Paper component.",
  },
  {
    prop: "elevation",
    type: ["number"],
    description: "The elevation shadow intensity for the Paper component.",
    defaultValue: 1,
  },
  {
    prop: "square",
    type: ["boolean"],
    description: "If true, removes the border-radius style for squared edges.",
    defaultValue: false,
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Sets the appearance variant for the Paper component.",
    defaultValue: "'elevation'",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for custom styling.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the Paper component.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The HTML element or custom component used for the Paper root.",
    defaultValue: "'div'",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend styles applied to the Paper component. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string", "number"],
    description: "System prop for setting box-shadow.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for setting CSS display property.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for CSS position property.",
  },
  {
    prop: "zIndex",
    type: ["number"],
    description: "System prop for z-index stacking order.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for setting height.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for setting width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
    defaultValue: "auto",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
    defaultValue: "auto",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for CSS align-content property in flex/grid.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for CSS align-items property in flex/grid.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for CSS align-self property in flex/grid.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for CSS justify-content property in flexbox.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography styling.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font-family styling.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font-size styling.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font-style styling.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font-weight styling.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing styling.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height styling.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top position.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right position.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom position.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left position.",
  },
];

export const circularProgressProps = [
  {
    prop: "size",
    type: ["number"],
    description:
      "Specifies the diameter of the circular progress indicator in pixels.",
  },
  {
    prop: "thickness",
    type: ["number"],
    description: "Specifies the thickness of the circular progress ring.",
  },
  {
    prop: "value",
    type: ["number"],
    description: "Sets the progress value (0-100) for the determinate variant.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Defines the color of the progress indicator. Accepts theme palette values or custom colors.",
    defaultValue: "'primary'",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Defines the type of progress indicator to show. 'determinate' shows a controlled value, while 'indeterminate' displays a rotating indicator.",
    defaultValue: "'indeterminate'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description:
      "Inline styles applied to the root element of the CircularProgress component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' and 'circle' keys.",
  },
  {
    prop: "duration",
    type: ["number"],
    description:
      "Duration of the rotation animation in seconds for the indeterminate variant.",
    defaultValue: 1,
  },
];

export const linearProgressProps = [
  {
    prop: "value",
    type: ["number"],
    description:
      "Specifies the progress value as a percentage (0-100) for the determinate variant.",
    defaultValue: 50,
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Sets the color of the progress bar. Accepts theme palette values or custom colors.",
    defaultValue: "'primary'",
  },
  {
    prop: "variant",
    type: ["determinate", "indeterminate"],
    description:
      "Defines the type of progress indicator. 'determinate' shows a controlled value, while 'indeterminate' shows an animated loading bar.",
    defaultValue: "'indeterminate'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description:
      "Inline styles applied to the root element of the LinearProgress component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' and 'bar' keys.",
  },
];

export const proSelectProps = [
  {
    prop: "options",
    type: ["array"],
    description: "Array of selectable options for the ProSelect component.",
  },
  {
    prop: "renderInput",
    type: ["function"],
    description:
      "Custom function to render the input field of the select component.",
  },
  {
    prop: "value",
    type: ["any"],
    description:
      "The selected value(s) of the component. Can be a single value or array if multiple is enabled.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "If true, the dropdown list is open.",
  },
  {
    prop: "inputValue",
    type: ["string"],
    description: "Controlled input value for the search input.",
  },
  {
    prop: "defaultValue",
    type: ["any"],
    description: "Default value(s) when the component is initially rendered.",
    defaultValue: "",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback fired when the value changes. Receives the selected option(s).",
  },
  {
    prop: "onInputChange",
    type: ["function"],
    description: "Callback fired when the input value changes.",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text shown when no value is selected.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the component is disabled.",
    defaultValue: false,
  },
  {
    prop: "proSelectInputRef",
    type: ["ref"],
    description: "Ref for the input element within the ProSelect component.",
  },
  {
    prop: "getOption",
    type: ["function"],
    description: "Callback to get the selected option.",
  },
  {
    prop: "getOptionLabel",
    type: ["function"],
    description: "Function to get the display label of an option.",
  },
  {
    prop: "renderOption",
    type: ["function"],
    description: "Function to render each option in the dropdown list.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the component is read-only and not editable.",
    defaultValue: false,
  },
  {
    prop: "freeSolo",
    type: ["boolean"],
    description: "If true, allows free-form input not limited to options.",
  },
  {
    prop: "disableClearable",
    type: ["boolean"],
    description: "If true, prevents clearing of the input value.",
  },
  {
    prop: "selectOnFocus",
    type: ["boolean"],
    description: "If true, selects the input text on focus.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the ProSelect container.",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Size of the ProSelect input. Can be 'small', 'medium', or 'large'.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The color theme of the input (e.g., 'primary', 'secondary').",
    defaultValue: "primary",
  },
  {
    prop: "name",
    type: ["string"],
    description: "The name attribute for the input field.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "The id attribute for the input field.",
  },
  {
    prop: "autoComplete",
    type: ["boolean"],
    description: "If true, enables auto-completion based on options.",
  },
  {
    prop: "getOptionDisabled",
    type: ["function"],
    description: "Function to determine if an option is disabled.",
  },
  {
    prop: "autoHighlight",
    type: ["boolean"],
    description: "If true, auto-highlights the first matching option.",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "The visual variant of the input. Can be 'standard', 'outlined', etc.",
    defaultValue: "standard",
  },
  {
    prop: "multiple",
    type: ["boolean"],
    description: "If true, allows multiple selections.",
  },
  {
    prop: "label",
    type: ["string"],
    description: "The label for the input field.",
  },
  {
    prop: "openOnFocus",
    type: ["boolean"],
    description: "If true, opens the dropdown when the input is focused.",
  },
  {
    prop: "disableCloseOnSelect",
    type: ["boolean"],
    description: "If true, does not close the dropdown on option selection.",
  },
  {
    prop: "ChipProps",
    type: ["object"],
    description: "Props to pass to each selected chip when multiple is true.",
  },
  {
    prop: "filterOptions",
    type: ["function"],
    description:
      "Function to customize how options are filtered based on input.",
  },
  {
    prop: "isOptionEqualToValue",
    type: ["function"],
    description:
      "Function to determine if an option is equal to the current value.",
  },
  {
    prop: "loading",
    type: ["boolean"],
    description: "If true, displays a loading state.",
  },
  {
    prop: "limitTags",
    type: ["number"],
    description: "Max number of tags shown before truncation (if multiple).",
    defaultValue: -1,
  },
  {
    prop: "onOpen",
    type: ["function"],
    description: "Callback when the dropdown is opened.",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback when the dropdown is closed.",
  },
  {
    prop: "noOptionsText",
    type: ["string"],
    description: "Text displayed when no options are found.",
    defaultValue: "No options found",
  },
  {
    prop: "loadingText",
    type: ["string"],
    description: "Text displayed when options are loading.",
    defaultValue: "Loading…",
  },
  {
    prop: "dir",
    type: ["string"],
    description: "Text direction for the input ('ltr' or 'rtl').",
  },
  {
    prop: "autoTextHighlight",
    type: ["boolean"],
    description: "If true, highlights text in matching options.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names to style the root element.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for component elements, such as root, options, and chips.",
  },
  {
    prop: "renderTags",
    type: ["function"],
    description:
      "Function to render custom tags when multiple selections are enabled.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, marks the input as required.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Additional props to pass to the input element.",
  },
];

export const radioProps = [
  {
    prop: "checked",
    type: ["boolean"],
    description:
      "If true, the radio input is selected. Sets the radio input to a controlled state.",
  },
  {
    prop: "defaultChecked",
    type: ["boolean"],
    description:
      "The initial checked state. Uncontrolled if `checked` is not provided.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback function fired when the checked state changes.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the radio input.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "The name attribute for the radio input element.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "The id attribute for the radio input element.",
  },
  {
    prop: "value",
    type: ["string"],
    description: "The value attribute for the radio input.",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Specifies the size of the radio input. Options are 'small', 'medium', or 'large'.",
    allowedValues: ["small", "medium", "large"],
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the radio input container.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Specifies the color of the radio input, matching theme colors or a custom color.",
    defaultValue: "primary",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description: "Default value for the radio input if not controlled.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Additional props to pass to the radio input element.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the radio input is read-only.",
  },
  {
    prop: "icon",
    type: ["node"],
    description: "Custom icon to display when the radio input is unchecked.",
  },
  {
    prop: "checkedIcon",
    type: ["node"],
    description: "Custom icon to display when the radio input is checked.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the root element.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific component elements, such as root, input, and checkedIcon.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference for the radio input element.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, marks the radio input as required.",
  },
  {
    prop: "disableRipple",
    type: ["boolean"],
    description: "If true, disables the ripple effect on click.",
  },
];

export const radioGroupProps = [
  {
    prop: "children",
    type: ["node"],
    description: "Radio components to be rendered within the radio group.",
  },
  {
    prop: "value",
    type: ["string"],
    description:
      "The selected value in the radio group. Sets the radio group to a controlled state.",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description:
      "The initial selected value in the radio group. Uncontrolled if `value` is not provided.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback function fired when the selected value changes. Receives the event and the new value as arguments.",
  },
  {
    prop: "name",
    type: ["string"],
    description:
      "The name attribute applied to each radio input in the group for form submission.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Specifies the color of each radio input in the group, matching theme colors or a custom color.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables all radio inputs in the group.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, makes all radio inputs in the group read-only.",
  },
  {
    prop: "row",
    type: ["boolean"],
    description:
      "If true, arranges the radio inputs in a horizontal row layout. Default is vertical.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the radio group container.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific component elements, such as root.",
  },
  {
    prop: "disableRipple",
    type: ["boolean"],
    description:
      "If true, disables the ripple effect on all radio inputs in the group.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the root element.",
  },
];

export const ratingProps = [
  {
    prop: "defaultValue",
    type: ["number"],
    description: "The initial rating value when uncontrolled.",
    defaultValue: 0,
  },
  {
    prop: "value",
    type: ["number"],
    description:
      "The current rating value. Sets the rating component to a controlled state.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback function fired when the rating value changes. Receives the new value as an argument.",
  },
  {
    prop: "precision",
    type: ["number"],
    description:
      "Defines the precision of the rating value (e.g., 0.5 for half stars).",
    defaultValue: 1,
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description:
      "If true, the rating component is read-only, preventing interaction.",
    defaultValue: false,
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the rating component is disabled.",
    defaultValue: false,
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the rating component container.",
  },
  {
    prop: "filledColor",
    type: ["string"],
    description: "Specifies the color of the filled stars.",
    defaultValue: "#FFD700",
  },
  {
    prop: "defaultColor",
    type: ["string"],
    description: "Specifies the color of the empty stars.",
    defaultValue: "#C0C0C0",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Defines the size of each star in the rating. Options are 'small', 'medium', or 'large'.",
    allowedValues: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "icon",
    type: ["node", "string"],
    description:
      "The icon to use as the filled star. Can be a string name or an icon component.",
    defaultValue: "star",
  },
  {
    prop: "emptyIcon",
    type: ["node"],
    description:
      "The icon to use as the empty star. Typically a faded or outlined version of the filled icon.",
    defaultValue: "<SvgIcon icon='star_border' />",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the root element.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific component elements, such as root.",
  },
];

export const selectProps = [
  {
    prop: "variant",
    type: ["string"],
    description:
      "The variant of the select input. Options are 'outlined', 'filled', or 'standard'.",
    defaultValue: "outlined",
  },
  {
    prop: "label",
    type: ["string"],
    description: "The label displayed on the select input.",
  },
  {
    prop: "value",
    type: ["object"],
    description:
      "The selected value in the select input. Should be an object with keys `label` and `value` for controlled state.",
  },
  {
    prop: "defaultValue",
    type: ["object"],
    description:
      "The initial selected value when the component is uncontrolled. Can be an object with keys `label` and `value`.",
    defaultValue: "{}",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback function fired when the selected value changes. Receives an object with `value` and `label`.",
  },
  {
    prop: "error",
    type: ["boolean"],
    description: "If true, applies error styling to the select input.",
    defaultValue: false,
  },
  {
    prop: "helperText",
    type: ["string"],
    description:
      "Text displayed below the select input, often used for validation or guidance.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the select input.",
    defaultValue: false,
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description:
      "If true, the select input takes up the full width of its container.",
    defaultValue: false,
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Size of the select input. Options are 'small', 'medium', or 'large'.",
    allowedValues: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "startAdornment",
    type: ["node"],
    description:
      "An element displayed at the start of the select input, such as an icon.",
  },
  {
    prop: "endAdornment",
    type: ["node"],
    description:
      "An element displayed at the end of the select input, such as an icon.",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "If true, the select input is focused by default.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Callback function fired when the select input gains focus.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the select input is read-only.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Specifies the color of the select input, matching theme colors or a custom color.",
    defaultValue: "primary",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the select input container.",
  },
  {
    prop: "ref",
    type: ["ref"],
    description: "Reference for the select input container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the root element.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for specific component elements, such as root, label, wrapper, and more.",
  },
  {
    prop: "displayEmpty",
    type: ["boolean"],
    description:
      "If true, displays the placeholder text even when a value is selected.",
  },
  {
    prop: "autoWidth",
    type: ["boolean"],
    description:
      "If true, the select input automatically adjusts its width based on the selected value.",
  },
  {
    prop: "renderValue",
    type: ["function"],
    description:
      "Custom function to render the selected value. Receives the selected value as an argument.",
    defaultValue: "(value) => value",
  },
  {
    prop: "open",
    type: ["boolean"],
    description:
      "Controls whether the select input dropdown is open. Useful for controlled open state.",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "The options to display within the dropdown, usually MenuItem components.",
  },
];

export const skeletonProps = [
  {
    prop: "variant",
    type: ["text", "rectangular", "rounded", "circular"],
    description:
      "Specifies the visual shape of the skeleton. Options include 'text' for lines, 'rectangular' for boxes, 'rounded' for elements with rounded edges, and 'circular' for circular shapes.",
    defaultValue: "'text'",
  },
  {
    prop: "animation",
    type: ["pulse", "wave", "none"],
    description:
      "Defines the animation style. 'pulse' animates with a soft pulse effect, 'wave' animates with a left-to-right wave effect, and 'none' removes animation.",
    defaultValue: "'pulse'",
  },
  {
    prop: "width",
    type: ["string"],
    description:
      "Sets the width of the skeleton. Accepts any valid CSS width value.",
    defaultValue: "'100%'",
  },
  {
    prop: "height",
    type: ["string"],
    description:
      "Sets the height of the skeleton. Accepts any valid CSS height value.",
    defaultValue: "10",
  },
  {
    prop: "borderRadius",
    type: ["string"],
    description:
      "Defines the border radius of the skeleton, useful for creating rounded or circular shapes. Accepts any valid CSS border-radius value.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description:
      "Inline styles applied to the root element of the Skeleton component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key for the main class.",
  },
];

export const sliderProps = [
  {
    prop: "min",
    type: ["number"],
    description: "The minimum value of the slider.",
    defaultValue: 0,
  },
  {
    prop: "max",
    type: ["number"],
    description: "The maximum value of the slider.",
    defaultValue: 100,
  },
  {
    prop: "step",
    type: ["number"],
    description:
      "The granularity with which the slider can step between values.",
    defaultValue: 1,
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "The size of the slider. Can be 'small', 'medium', or 'large'.",
  },
  {
    prop: "value",
    type: ["number"],
    description: "The current value of the slider (controlled).",
  },
  {
    prop: "defaultValue",
    type: ["number"],
    description: "The default value when the component is uncontrolled.",
    defaultValue: 0,
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the slider container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names to style the slider container.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The color of the slider track.",
    defaultValue: "primary",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback fired when the slider value changes.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Props to pass directly to the slider input element.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute for the slider input.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the slider will be disabled.",
  },
  {
    prop: "ariaLabel",
    type: ["string"],
    description: "The aria-label attribute for accessibility.",
  },
  {
    prop: "valueLabelDisplay",
    type: ["string"],
    description:
      "How to display the slider value. Can be 'auto', 'on', or 'off'.",
  },
  {
    prop: "marks",
    type: ["boolean", "array"],
    description:
      "If true, marks will be displayed along the slider. If array, custom marks are shown.",
    defaultValue: false,
  },
  {
    prop: "tooltip",
    type: ["boolean"],
    description: "If true, shows a tooltip displaying the slider's value.",
  },
  {
    prop: "tooltipPlacement",
    type: ["string"],
    description: "Tooltip position relative to the slider. Default is 'top'.",
    defaultValue: "top",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Ref for the slider input element.",
  },
  {
    prop: "getTooltip",
    type: ["function"],
    description: "Function to customize the tooltip display value.",
    defaultValue: "(value) => value",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for slider elements, such as root, input, and tooltip.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, marks the slider as required.",
  },
  {
    prop: "thumbColor",
    type: ["string"],
    description: "The color of the slider thumb.",
    defaultValue: "primary",
  },
  {
    prop: "tooltipColor",
    type: ["string"],
    description: "The color of the tooltip background.",
  },
  {
    prop: "TooltipProps",
    type: ["object"],
    description:
      "Props passed to the Tooltip component when tooltip is enabled.",
  },
];

export const snackbarProps = [
  {
    prop: "message",
    type: ["string"],
    description: "The main text displayed in the Snackbar.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "Controls the visibility of the Snackbar.",
  },
  {
    prop: "autoHideDuration",
    type: ["number", "null"],
    description:
      "Duration in milliseconds before the Snackbar auto-hides. If set to null, it remains visible until manually closed.",
    defaultValue: "null",
  },
  {
    prop: "onClose",
    type: ["func"],
    description:
      "Function called when the Snackbar closes, either manually or automatically after the autoHideDuration.",
    defaultValue: "() => {}",
  },
  {
    prop: "action",
    type: ["node", "null"],
    description:
      "Optional action component, typically a button, displayed alongside the message.",
    defaultValue: "null",
  },
  {
    prop: "anchorOrigin",
    type: ["object"],
    description:
      "Defines the position of the Snackbar on the screen. Accepts an object with vertical and horizontal keys.",
    defaultValue: "{ vertical: 'bottom', horizontal: 'left' }",
    properties: {
      vertical: ["top", "bottom", "center"],
      horizontal: ["left", "right", "center"],
    },
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the Snackbar container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root', 'message', and 'action' keys.",
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "Content or elements that can be displayed within the Snackbar.",
  },
];

export const snackbarContentProps = [
  {
    prop: "message",
    type: ["node"],
    description: "The main content displayed in the SnackbarContent.",
  },
  {
    prop: "action",
    type: ["node", "null"],
    description:
      "Optional action component, typically a button or link, displayed alongside the message.",
    defaultValue: "null",
  },
  {
    prop: "role",
    type: ["string"],
    description:
      "Specifies the ARIA role of the component for accessibility purposes, typically set to 'alert'.",
    defaultValue: "'alert'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the SnackbarContent container.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root', 'message', and 'action' keys.",
    defaultValue: "{}",
  },
];

export const switchProps = [
  {
    prop: "checked",
    type: ["boolean"],
    description: "If true, the switch is checked (controlled component).",
  },
  {
    prop: "defaultChecked",
    type: ["boolean"],
    description:
      "The default checked state when the component is uncontrolled.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback fired when the switch's checked state changes.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the switch will be disabled and unclickable.",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "The size of the switch. Can be 'small', 'medium', or 'large'.",
    defaultValue: "medium",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the switch container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names to style the switch container.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Props passed directly to the underlying input element.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "The name attribute for the switch input.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "The color of the switch track when checked. Defaults to 'primary'.",
    defaultValue: "primary",
  },
  {
    prop: "thumbColor",
    type: ["string"],
    description: "The color of the switch thumb when checked.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for switch elements, including root, input, slider, thumb, and icon.",
  },
  {
    prop: "checkedIcon",
    type: ["node"],
    description:
      "The icon to display inside the thumb when the switch is checked.",
  },
  {
    prop: "icon",
    type: ["node"],
    description:
      "The icon to display inside the thumb when the switch is unchecked.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Ref for the underlying input element.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, the switch input will be marked as required.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the switch will be read-only.",
  },
];

export const tableProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the table, typically consisting of TableRow, TableHead, or TableBody components.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component used for the root element. Defaults to 'table'.",
    defaultValue: "'table'",
  },
  {
    prop: "padding",
    type: ["checkbox", "none", "normal"],
    description: "Sets padding for the cells within the table.",
    defaultValue: "'normal'",
  },
  {
    prop: "size",
    type: ["medium", "small", "string"],
    description: "Specifies the size of the table. Defaults to 'medium'.",
    defaultValue: "'medium'",
  },
  {
    prop: "stickyHeader",
    type: ["boolean"],
    description: "If true, enables sticky positioning for the header row.",
    defaultValue: "false",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the table component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for setting background color using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for setting margin.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for setting bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for setting left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for setting right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for setting top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins (left and right).",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins (top and bottom).",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding configuration.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding configuration.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding configuration.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding configuration.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding (left and right).",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding (top and bottom).",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography settings from theme.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family settings.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size settings.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style settings.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight settings.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing settings.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height settings.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment settings.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height configuration.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width configuration.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height configuration.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width configuration.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
];

export const tableBodyProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the table body, typically composed of TableRow components.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root node. Defaults to 'tbody'.",
    defaultValue: "'tbody'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the table body component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color configuration using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for configuring the left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for configuring the right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for configuring the top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for configuring the left and right margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for configuring the left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for configuring the right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for configuring the top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for configuring the left and right padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom padding.",
  },
  {
    prop: "typography",
    type: ["string"],
    description:
      "System prop for typography configuration using theme typography settings.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size configuration.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style configuration.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight configuration.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing configuration.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height configuration.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment configuration.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height configuration.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width configuration.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height configuration.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width configuration.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
];

export const tableCellProps = [
  {
    prop: "align",
    type: ["center", "inherit", "justify", "left", "right"],
    description: "Set the text-align on the table cell content.",
    defaultValue: "'inherit'",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the table cell.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root', 'head', and 'body' keys.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component used for the root node. Can be either 'td' or 'th'. Defaults to 'td'.",
    defaultValue: "'td'",
  },
  {
    prop: "colSpan",
    type: ["number"],
    description: "Sets the number of columns a cell should span.",
    defaultValue: 1,
  },
  {
    prop: "rowSpan",
    type: ["number"],
    description: "Sets the number of rows a cell should span.",
    defaultValue: 1,
  },
  {
    prop: "padding",
    type: ["checkbox", "none", "normal"],
    description: "Sets padding size for the cell.",
    defaultValue: "'normal'",
  },
  {
    prop: "scope",
    type: ["string"],
    description:
      "Defines the scope attribute, used in header cells to indicate their scope within a table.",
  },
  {
    prop: "size",
    type: ["medium", "small", "string"],
    description: "Adjusts the cell padding based on the table size.",
    defaultValue: "'medium'",
  },
  {
    prop: "sortDirection",
    type: ["asc", "desc", false],
    description:
      "Sets the sort direction. Use 'asc' or 'desc' to indicate sorted columns.",
    defaultValue: "false",
  },
  {
    prop: "variant",
    type: ["body", "footer", "head", "string"],
    description: "Defines the variant context for the cell.",
    defaultValue: "'body'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the table cell component.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color configuration using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for configuring the left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for configuring the right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for configuring the top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for configuring the left and right margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for configuring the left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for configuring the right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for configuring the top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for configuring the left and right padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom padding.",
  },
  {
    prop: "typography",
    type: ["string"],
    description:
      "System prop for typography configuration using theme typography settings.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size configuration.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style configuration.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight configuration.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing configuration.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height configuration.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment configuration.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height configuration.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width configuration.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height configuration.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width configuration.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
];

export const tableContainerProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the TableContainer, typically a table element.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the table container component.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root node. Default is 'div'.",
    defaultValue: "'div'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color configuration using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for configuring the left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for configuring the right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for configuring the top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for configuring the left and right margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for configuring the left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for configuring the right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for configuring the top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for configuring the left and right padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height configuration.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width configuration.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height configuration.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width configuration.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
];

export const tableFooterProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the table footer, typically table row elements.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root node. Defaults to 'tfoot'.",
    defaultValue: "'tfoot'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the table footer component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color configuration using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for configuring the left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for configuring the right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for configuring the top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for configuring the left and right margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for configuring the left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for configuring the right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for configuring the top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for configuring the left and right padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height configuration.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width configuration.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height configuration.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width configuration.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
];

export const tableHeadProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the table head, typically table row elements.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root node. Defaults to 'thead'.",
    defaultValue: "'thead'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the table head component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description:
      "System prop for background color configuration using theme palette colors.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "System prop for text color configuration using theme palette colors.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for configuring the left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for configuring the right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for configuring the top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for configuring the left and right margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for configuring the bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for configuring the left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for configuring the right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for configuring the top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for configuring the left and right padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for configuring the top and bottom padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height configuration.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height configuration.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width configuration.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height configuration.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width configuration.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width configuration.",
  },
];

export const tablePaginationProps = [
  {
    prop: "count",
    type: ["number"],
    description: "The total number of rows in the data set.",
  },
  {
    prop: "rowsPerPage",
    type: ["number"],
    description: "The number of rows displayed per page.",
  },
  {
    prop: "page",
    type: ["number"],
    description: "The current page index (0-based).",
  },
  {
    prop: "onPageChange",
    type: ["function"],
    description: "Callback fired when the page is changed.",
  },
  {
    prop: "onRowsPerPageChange",
    type: ["function"],
    description: "Callback fired when the number of rows per page is changed.",
  },
  {
    prop: "rowsPerPageOptions",
    type: ["array"],
    description:
      "Array of options for rows per page. Each item can be a number or an object with label and value keys.",
    defaultValue: "[10, 25, 50, 100]",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root node. Defaults to Box.",
    defaultValue: "Box",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables pagination actions.",
    defaultValue: "false",
  },
  {
    prop: "getItemAriaLabel",
    type: ["function"],
    description: "Function to provide ARIA label for pagination actions.",
    defaultValue: "(type) => `Go to ${type} page`",
  },
  {
    prop: "labelDisplayedRows",
    type: ["function"],
    description:
      "Function returning the displayed range of rows. Parameters are `from`, `to`, and `count`.",
    defaultValue: "({ from, to, count }) => `${from}–${to} of ${count}`",
  },
  {
    prop: "labelRowsPerPage",
    type: ["node"],
    description: "Label text for rows per page dropdown.",
    defaultValue: "'Rows per page:'",
  },
  {
    prop: "showFirstButton",
    type: ["boolean"],
    description: "If true, displays the first-page button.",
    defaultValue: "false",
  },
  {
    prop: "showLastButton",
    type: ["boolean"],
    description: "If true, displays the last-page button.",
    defaultValue: "false",
  },
  {
    prop: "slotProps",
    type: ["object"],
    description:
      "Additional props to be passed to pagination action components (e.g., previousButton, nextButton).",
  },
  {
    prop: "slots",
    type: ["object"],
    description:
      "Components for pagination icons, such as `firstButtonIcon`, `previousButtonIcon`, `nextButtonIcon`, and `lastButtonIcon`.",
  },
  {
    prop: "SelectProps",
    type: ["object"],
    description:
      "Additional props for the Select component used in pagination.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the pagination component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root', 'perPage', and 'actions' keys.",
  },
  {
    prop: "menuDirection",
    type: ["string"],
    description:
      "Sets the menu direction for the rows-per-page dropdown (up or down).",
    defaultValue: "'up'",
  },
];

export const tableRowProps = [
  {
    prop: "children",
    type: ["node"],
    description:
      "The content of the table row, typically consisting of TableCell components.",
  },
  {
    prop: "hover",
    type: ["boolean"],
    description: "If true, applies a hover effect to the row.",
    defaultValue: "false",
  },
  {
    prop: "selected",
    type: ["boolean"],
    description: "If true, styles the row to indicate selection.",
    defaultValue: "false",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the row is clicked.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root node. Defaults to 'tr'.",
    defaultValue: "'tr'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the table row component.",
  },
  {
    prop: "selectedColor",
    type: ["string"],
    description:
      "Defines the background color used for selected rows, based on theme palette.",
    defaultValue: "'action.selected'",
  },
  {
    prop: "hoverColor",
    type: ["string"],
    description:
      "Defines the background color used for hover state, based on theme palette.",
    defaultValue: "'action.hover'",
  },
];

export const tableSortLabelProps = [
  {
    prop: "active",
    type: ["boolean"],
    description:
      "If true, the label will have active styling to indicate sorting is applied.",
    defaultValue: "false",
  },
  {
    prop: "direction",
    type: ["string"],
    description: "Sets the sort direction when the label is active.",
    defaultValue: "'asc'",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback fired when the label is clicked.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the TableSortLabel, usually the header text.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' and 'icon' keys.",
  },
  {
    prop: "hideSortIcon",
    type: ["boolean"],
    description: "If true, the sort icon will be hidden when active.",
    defaultValue: "false",
  },
  {
    prop: "icon",
    type: ["string"],
    description:
      "The icon name for the sort indicator, defaulting to 'arrow_downward'.",
    defaultValue: "'arrow_downward'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the TableSortLabel component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
];

export const formHelperTextProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the helper text.",
  },
  {
    prop: "error",
    type: ["boolean"],
    description: "If true, the helper text will display in an error state.",
    defaultValue: "false",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the helper text will appear in a disabled state.",
    defaultValue: "false",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "If true, the helper text will display in a focused state.",
    defaultValue: "false",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root node, default is 'p'.",
    defaultValue: "'p'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the FormHelperText container.",
  },
  {
    prop: "className",
    type: ["string"],
    description:
      "Additional class names for styling the helper text container.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for styling, including root.",
  },
];

export const inputAdornmentProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the adornment, typically an icon or text.",
    required: true,
  },
  {
    prop: "position",
    type: ["string"],
    description: "The position of the adornment. Can be 'start' or 'end'.",
    defaultValue: "'start'",
  },
  {
    prop: "disablePointerEvents",
    type: ["boolean"],
    description: "If true, pointer events are disabled on the adornment.",
    defaultValue: "false",
  },
  {
    prop: "disableTypography",
    type: ["boolean"],
    description:
      "If true, the adornment content will not use typography styles.",
    defaultValue: "false",
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "The component type for the root node. Can be a string or a component.",
    defaultValue: "'div'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the InputAdornment container.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the adornment container.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object containing additional class names for styling, including root.",
  },
];

export const inputLabelProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the label, typically text.",
  },
  {
    prop: "error",
    type: ["boolean"],
    description: "If true, applies error styling to the label.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styles applied to the label.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object to override or extend the styles applied to the component. Includes the following keys: `root`.",
    defaultValue: "{}",
  },
];

export const textFieldProps = [
  {
    prop: "variant",
    type: ["string"],
    description:
      "Variant of the TextField. Options are 'outlined', 'filled', and 'standard'.",
    defaultValue: "'outlined'",
  },
  {
    prop: "label",
    type: ["string"],
    description: "Label text for the TextField.",
  },
  {
    prop: "value",
    type: ["string", "number"],
    description: "Current value of the TextField.",
  },
  {
    prop: "defaultValue",
    type: ["string", "number"],
    description: "Default value for the TextField.",
    defaultValue: "''",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Function triggered when the value changes.",
  },
  {
    prop: "type",
    type: ["string"],
    description: "Type attribute for the input field.",
    defaultValue: "'text'",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text for the input.",
    defaultValue: "''",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "If true, the field will be marked as required.",
    defaultValue: "false",
  },
  {
    prop: "error",
    type: ["boolean"],
    description: "If true, the field will display error styling.",
    defaultValue: "false",
  },
  {
    prop: "helperText",
    type: ["string"],
    description: "Helper text displayed below the TextField.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the field will be disabled.",
    defaultValue: "false",
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description:
      "If true, the field will take up the full width of its container.",
    defaultValue: "false",
  },
  {
    prop: "InputProps",
    type: ["object"],
    description: "Additional props for the input element.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Props applied directly to the input field.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Ref for the input element.",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "If true, the field will be focused.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Function triggered when the field is focused.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styles applied to the TextField container.",
  },
  {
    prop: "autoComplete",
    type: ["string"],
    description: "AutoComplete attribute for the input field.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the field will be read-only.",
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute for the input element.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "ID attribute for the input element.",
  },
  {
    prop: "step",
    type: ["string", "number"],
    description: "Step attribute for numeric input types.",
  },
  {
    prop: "shrink",
    type: ["boolean"],
    description: "If true, the label will shrink as if the field is focused.",
  },
  {
    prop: "maxRows",
    type: ["number"],
    description: "Maximum number of rows for multiline input.",
  },
  {
    prop: "minRows",
    type: ["number"],
    description: "Minimum number of rows for multiline input.",
  },
  {
    prop: "rows",
    type: ["number"],
    description: "Sets the row count for multiline input.",
  },
  {
    prop: "multiline",
    type: ["boolean"],
    description: "If true, the input field will be multiline (textarea).",
    defaultValue: "false",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color of the TextField.",
    defaultValue: "'primary'",
  },
  {
    prop: "onBlur",
    type: ["function"],
    description: "Function triggered when the field loses focus.",
  },
  {
    prop: "dir",
    type: ["string"],
    description: "Text direction, either 'ltr' or 'rtl'.",
    defaultValue: "'ltr'",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Object with class names for customization, e.g., `root`, `wrapper`, `label`, `input`, `adornment`, etc.",
  },
];

export const timeFieldProps = [
  {
    prop: "value",
    type: ["string"],
    description:
      "Controlled value for the time field, formatted as HH:mm or HH:mm:ss.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback fired when the time value changes.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Defines the color of the time field, based on theme colors.",
    defaultValue: "default",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Specifies the style of the input field.",
    options: ["standard", "outlined", "filled"],
    defaultValue: "outlined",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the root element.",
  },
  {
    prop: "label",
    type: ["string"],
    description: "Text label displayed above the input field.",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description: "Default time value if the input is uncontrolled.",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text displayed when input is empty.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "Marks the field as required.",
    defaultValue: false,
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the input field.",
    defaultValue: false,
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description: "If true, the input takes up the full width of its container.",
    defaultValue: false,
  },
  {
    prop: "size",
    type: ["string"],
    description: "Specifies the size of the input.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "focused",
    type: ["boolean"],
    description: "Controls the focused state of the input.",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Callback fired when the input gains focus.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the input is read-only.",
    defaultValue: false,
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute for the input element.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "ID attribute for the input element.",
  },
  {
    prop: "showSeconds",
    type: ["boolean"],
    description: "If true, displays seconds in the time format (HH:mm:ss).",
    defaultValue: false,
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component’s styles, with keys: `root` and `input`.",
  },
  {
    prop: "endIcon",
    type: ["node"],
    description: "Custom icon element to place at the end of the input.",
  },
  {
    prop: "startIcon",
    type: ["node"],
    description: "Custom icon element to place at the start of the input.",
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Attributes applied directly to the input element.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional CSS class for custom styling.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference to the input element.",
  },
];

export const timePickerProps = [
  {
    prop: "value",
    type: ["string"],
    description:
      "Controlled value for the time picker, formatted as HH:mm or HH:mm:ss.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback fired when the time value changes.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color of the input and icon, based on theme colors.",
    defaultValue: "default",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Specifies the style of the input field.",
    options: ["standard", "outlined", "filled"],
    defaultValue: "outlined",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the root element.",
  },
  {
    prop: "label",
    type: ["string"],
    description: "Text label displayed above the input field.",
  },
  {
    prop: "defaultValue",
    type: ["string"],
    description: "Default time value if the input is uncontrolled.",
  },
  {
    prop: "placeholder",
    type: ["string"],
    description: "Placeholder text displayed when input is empty.",
  },
  {
    prop: "required",
    type: ["boolean"],
    description: "Marks the field as required.",
    defaultValue: false,
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the input field.",
    defaultValue: false,
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description: "If true, the input takes up the full width of its container.",
    defaultValue: false,
  },
  {
    prop: "size",
    type: ["string"],
    description: "Specifies the size of the input.",
    options: ["small", "medium", "large"],
    defaultValue: "medium",
  },
  {
    prop: "onFocus",
    type: ["function"],
    description: "Callback fired when the input gains focus.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description: "If true, the input is read-only.",
    defaultValue: false,
  },
  {
    prop: "name",
    type: ["string"],
    description: "Name attribute for the input element.",
  },
  {
    prop: "id",
    type: ["string"],
    description: "ID attribute for the input element.",
  },
  {
    prop: "showSeconds",
    type: ["boolean"],
    description: "If true, displays seconds in the time format (HH:mm:ss).",
    defaultValue: false,
  },
  {
    prop: "inputProps",
    type: ["object"],
    description: "Attributes applied directly to the input element.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional CSS class for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the component’s styles, with keys: `root`, `input`, and `icon`.",
  },
  {
    prop: "startIcon",
    type: ["node"],
    description: "Custom icon element to place at the start of the input.",
  },
  {
    prop: "endIcon",
    type: ["node"],
    description: "Custom icon element to place at the end of the input.",
  },
  {
    prop: "inputRef",
    type: ["React.Ref"],
    description: "Reference to the input element.",
  },
];

export const toggleButtonProps = [
  {
    prop: "value",
    type: ["any"],
    description:
      "The value of the button, which is passed to the `onChange` callback when clicked.",
  },
  {
    prop: "selected",
    type: ["boolean"],
    description: "If true, the button is rendered in a selected state.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback fired when the button is clicked. Receives the `value` as an argument.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the button.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name(s) for custom styling.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styles applied to the root element.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Determines the color of the button. Accepts theme color values (e.g., 'primary', 'secondary').",
    defaultValue: "primary",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Defines the size of the button. Accepts 'small', 'medium', or 'large' values.",
    defaultValue: "medium",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Overrides or extends the styles applied to the component. Accepts keys `root` and `disabled`.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description:
      "If true, the button is disabled and cannot be interacted with.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description:
      "If true, the button is read-only and will not trigger `onChange` when clicked.",
  },
  {
    prop: "type",
    type: ["string"],
    description:
      "Defines the HTML button `type` attribute. Defaults to 'button'.",
    defaultValue: "button",
  },
];

export const toggleButtonGroupProps = [
  {
    prop: "value",
    type: ["string", "array"],
    description:
      "The value(s) of the selected toggle button(s) within the group. Can be a single value or an array when not in exclusive mode.",
  },
  {
    prop: "defaultValue",
    type: ["string", "array"],
    description:
      "The default value(s) for the selected toggle button(s) if the component is uncontrolled.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description:
      "Callback fired when the selection changes. Receives the updated value(s) as an argument.",
  },
  {
    prop: "exclusive",
    type: ["boolean"],
    description: "If true, only one button can be selected at a time.",
    defaultValue: false,
  },
  {
    prop: "children",
    type: ["node"],
    description: "The toggle buttons within the group.",
  },
  {
    prop: "orientation",
    type: ["string"],
    description:
      "Determines the layout orientation of the buttons, either 'horizontal' or 'vertical'.",
    defaultValue: "horizontal",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Defines the color of the buttons, which applies to all buttons in the group.",
    defaultValue: "default",
  },
  {
    prop: "size",
    type: ["string"],
    description:
      "Specifies the size of the toggle buttons within the group. Accepts 'small', 'medium', or 'large'.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name(s) for custom styling.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Accepts keys `root` and `disabled`.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline CSS styles applied to the root element.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, all buttons in the group are disabled.",
  },
  {
    prop: "readOnly",
    type: ["boolean"],
    description:
      "If true, the buttons are read-only, and selection cannot be changed.",
  },
];

export const tooltipProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The target element that the tooltip will be displayed for.",
  },
  {
    prop: "title",
    type: ["node"],
    description: "The content displayed inside the tooltip.",
  },
  {
    prop: "placement",
    type: [
      "string"
    ],
    description: "The position of the tooltip relative to the target element.",
    defaultValue: "'bottom'",
  },
  {
    prop: "enterDelay",
    type: ["number"],
    description: "The delay in milliseconds before the tooltip is shown.",
    defaultValue: 0,
  },
  {
    prop: "leaveDelay",
    type: ["number"],
    description: "The delay in milliseconds before the tooltip hides.",
    defaultValue: 0,
  },
  {
    prop: "interactive",
    type: ["boolean"],
    description:
      "If true, the tooltip is interactive and won't close when the mouse hovers over it.",
    defaultValue: false,
  },
  {
    prop: "arrow",
    type: ["boolean"],
    description: "If true, displays an arrow pointing to the target element.",
    defaultValue: false,
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the tooltip container.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root', 'tooltip', 'arrow', 'transition', and 'contentContainer' keys.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "The background color of the tooltip.",
    defaultValue: "'rgba(0, 0, 0, 0.7)'",
  },
  {
    prop: "arrowColor",
    type: ["string"],
    description: "Sets the color of the tooltip arrow, if present.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description:
      "Controls the visibility of the tooltip. If provided, manages the open state externally.",
    defaultValue: false,
  },
  {
    prop: "onOpen",
    type: ["function"],
    description: "Callback function fired when the tooltip opens.",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback function fired when the tooltip closes.",
  },
  {
    prop: "disableHoverListener",
    type: ["boolean"],
    description: "If true, disables the tooltip showing on hover.",
    defaultValue: false,
  },
  {
    prop: "TransitionComponent",
    type: ["elementType"],
    description:
      "A transition component for animating the tooltip. Common options include Fade or Grow.",
  },
  {
    prop: "transitionDuration",
    type: ["object", "number"],
    description:
      "The duration of the transition animation. Can be an object with 'enter' and 'exit' values.",
    defaultValue: "{ enter: 225, exit: 195 }",
  },
  {
    prop: "TransitionProps",
    type: ["object"],
    description: "Props applied to the TransitionComponent.",
  },
  {
    prop: "followCursor",
    type: ["boolean"],
    description: "If true, the tooltip follows the mouse cursor.",
    defaultValue: false,
  },
];

export const typographyProps = [
  {
    prop: "variant",
    type: [
      "string",
    ],
    description:
      "Applies typography styles based on the theme's variant settings.",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Sets the color of the text using theme palette values or custom colors.",
    defaultValue: "'text'",
  },
  {
    prop: "align",
    type: ["string"],
    description: "Specifies the text alignment within the component.",
    defaultValue: "'inherit'",
  },
  {
    prop: "display",
    type: ["string"],
    description: "Sets the CSS display property of the component.",
    defaultValue: "'block'",
  },
  {
    prop: "gutterBottom",
    type: ["boolean"],
    description: "If true, applies a bottom margin to the text.",
    defaultValue: false,
  },
  {
    prop: "noWrap",
    type: ["boolean"],
    description:
      "If true, text will not wrap, and will instead truncate with an ellipsis.",
    defaultValue: false,
  },
  {
    prop: "paragraph",
    type: ["boolean"],
    description: "If true, sets the root element to be a 'p' tag.",
    defaultValue: false,
  },
  {
    prop: "component",
    type: ["elementType"],
    description:
      "Specifies the HTML tag or custom component used for the root element.",
    defaultValue: "'div'",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the typography component.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the typography component.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "fontName",
    type: ["string"],
    description: "Specifies a custom font family, if applicable.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the component. Supports 'root' key.",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box-shadow configuration.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography style configuration.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for position configuration.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
];

export const stepperProps = [
  {
    prop: "activeStep",
    type: ["number"],
    description: "The index of the currently active step.",
    defaultValue: 0,
  },
  {
    prop: "children",
    type: ["node"],
    description:
      "The steps of the Stepper component, typically defined using Step components.",
  },
  {
    prop: "orientation",
    type: ["string"],
    description: "The orientation of the Stepper, which defines the layout.",
    defaultValue: "'horizontal'",
  },
  {
    prop: "alternativeLabel",
    type: ["boolean"],
    description:
      "If true, the Stepper will display an alternative label format.",
  },
  {
    prop: "nonLinear",
    type: ["boolean"],
    description: "If true, steps can be selected out of order.",
  },
  {
    prop: "component",
    type: ["elementType"],
    description: "The component used for the root element.",
    defaultValue: "'div'",
  },
  {
    prop: "connector",
    type: ["node"],
    description: "A component used to render the connector between steps.",
    defaultValue: "<div className={`connector ${orientation}`} />",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the Stepper.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the Stepper. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "Background color for the Stepper.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color for the Stepper elements.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting the bottom border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "CSS display property for the Stepper.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "CSS flex-direction property for the Stepper layout.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "CSS justify-content property for alignment.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "CSS align-items property for alignment.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "Max width for the Stepper component.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "z-index of the Stepper component.",
  },
];

export const stepProps = [
  {
    prop: "active",
    type: ["boolean"],
    description: "If true, the step is marked as active.",
    defaultValue: "false",
  },
  {
    prop: "completed",
    type: ["boolean"],
    description: "If true, the step is marked as completed.",
    defaultValue: "false",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the step is disabled.",
    defaultValue: "false",
  },
  {
    prop: "expanded",
    type: ["boolean"],
    description: "If true, the step is expanded to show additional content.",
    defaultValue: "false",
  },
  {
    prop: "last",
    type: ["boolean"],
    description: "If true, the step is the last one in the list.",
    defaultValue: "false",
  },
  {
    prop: "index",
    type: ["number"],
    description: "The index of the step in the stepper.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the step.",
  },
  {
    prop: "orientation",
    type: ["string"],
    description: "The orientation of the stepper (horizontal or vertical).",
    defaultValue: "'horizontal'",
  },
  {
    prop: "alternativeLabel",
    type: ["boolean"],
    description:
      "If true, the labels will be positioned in an alternative way.",
    defaultValue: "false",
  },
  {
    prop: "StepIconComponent",
    type: ["elementType"],
    description: "Custom component to render as the step icon.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the step component.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the step component. Supports 'root' and 'indicator' keys.",
    defaultValue: "{}",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description: "System prop for box-sizing.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box-shadow configuration.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography style configuration.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
];

export const stepButtonProps = [
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback function fired when the button is clicked.",
  },
  {
    prop: "active",
    type: ["boolean"],
    description: "If true, the button is marked as active.",
    defaultValue: "false",
  },
  {
    prop: "completed",
    type: ["boolean"],
    description: "If true, the button is marked as completed.",
    defaultValue: "false",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the button is disabled.",
    defaultValue: "false",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the step button.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the step button.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the step button. Supports 'root' key.",
    defaultValue: "{}",
  },
];

export const stepConnectorProps = [
  {
    prop: "active",
    type: ["boolean"],
    description: "If true, the connector is marked as active.",
    defaultValue: "false",
  },
  {
    prop: "completed",
    type: ["boolean"],
    description: "If true, the connector is marked as completed.",
    defaultValue: "false",
  },
  {
    prop: "orientation",
    type: ["string"],
    description: "The orientation of the connector.",
    defaultValue: "'horizontal'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the connector.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the step connector. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "Sets the color of the connector using theme palette values or custom colors.",
    defaultValue: "'divider'",
  },
];

export const stepContentProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the step.",
  },
  {
    prop: "active",
    type: ["boolean"],
    description: "If true, the step content is displayed as active.",
    defaultValue: "false",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the step content.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the step content. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string", "number"],
    description: "System prop for setting border configuration.",
  },
  {
    prop: "borderBottom",
    type: ["string", "number"],
    description: "System prop for setting bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string", "number"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string", "number"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string", "number"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box-shadow configuration.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for display configuration.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
];

export const stepIconProps = [
  {
    prop: "icon",
    type: ["node"],
    description:
      "The icon to be displayed for the step. If not provided, the step index will be shown.",
  },
  {
    prop: "active",
    type: ["boolean"],
    description: "If true, the icon will be displayed as active.",
    defaultValue: "false",
  },
  {
    prop: "completed",
    type: ["boolean"],
    description: "If true, the icon will be displayed as completed.",
    defaultValue: "false",
  },
  {
    prop: "error",
    type: ["boolean"],
    description: "If true, the icon will indicate an error.",
    defaultValue: "false",
  },
  {
    prop: "index",
    type: ["number"],
    description: "The index of the step in the stepper.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied directly to the step icon.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the step icon. Supports 'root' key.",
    defaultValue: "{}",
  },
];

export const stepLabelProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the StepLabel component.",
  },
  {
    prop: "active",
    type: ["boolean"],
    description: "If true, the step label is marked as active.",
    defaultValue: "false",
  },
  {
    prop: "completed",
    type: ["boolean"],
    description: "If true, the step label is marked as completed.",
    defaultValue: "false",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the step label is marked as disabled.",
    defaultValue: "false",
  },
  {
    prop: "optional",
    type: ["node"],
    description: "Optional content to display alongside the step label.",
  },
  {
    prop: "error",
    type: ["boolean"],
    description: "If true, the step label will indicate an error state.",
    defaultValue: "false",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the step label.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the step label. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography style configuration.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for position configuration.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top positioning.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right positioning.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom positioning.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left positioning.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between flex items.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for gap between columns.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for gap between rows.",
  },
];

export const tabProps = [
  {
    prop: "label",
    type: ["node"],
    description: "The label for the tab, displayed as the tab's content.",
  },
  {
    prop: "icon",
    type: ["node"],
    description: "The icon to be displayed in the tab.",
  },
  {
    prop: "value",
    type: ["any"],
    description: "The value of the tab, which is used to identify it.",
  },
  {
    prop: "selected",
    type: ["boolean"],
    description: "If true, the tab is marked as selected.",
    defaultValue: "false",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback function fired when the tab is clicked.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, the tab is disabled.",
    defaultValue: "false",
  },
  {
    prop: "iconPosition",
    type: ["string"],
    description:
      "The position of the icon, can be 'start', 'end', 'top', or 'bottom'.",
    defaultValue: "'top'",
  },
  {
    prop: "wrapped",
    type: ["boolean"],
    description: "If true, the label wraps to the next line.",
    defaultValue: "false",
  },
  {
    prop: "textColor",
    type: ["string"],
    description: "Color of the text in the tab.",
    defaultValue: "'inherit'",
  },
  {
    prop: "indicatorColor",
    type: ["string"],
    description: "Color of the tab indicator.",
    defaultValue: "'primary'",
  },
  {
    prop: "orientation",
    type: ["string"],
    description: "Orientation of the tab, can be 'horizontal' or 'vertical'.",
    defaultValue: "'horizontal'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the tab.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the tab. Supports 'root' and 'label' keys.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string"],
    description: "System prop for border.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "System prop for bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between items.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for gap between columns.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for gap between rows.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for position configuration.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top positioning.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right positioning.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom positioning.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left positioning.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for grid auto flow.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for grid area.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for align content.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for align items.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for align self.",
  },
  {
    prop: "flex",
    type: ["string"],
    description: "System prop for flex.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "System prop for flex direction.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for flex grow.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for flex shrink.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description: "System prop for flex wrap.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for justify content.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for order in flex.",
  },
];

export const tabsProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The Tab components to be rendered within the Tabs.",
  },
  {
    prop: "value",
    type: ["any"],
    description: "The value of the currently selected tab.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback function fired when the selected tab changes.",
  },
  {
    prop: "orientation",
    type: ["string"],
    description: "Orientation of the tabs, can be 'horizontal' or 'vertical'.",
    defaultValue: "'horizontal'",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "Variant of the tabs, can be 'standard', 'scrollable', or 'fullWidth'.",
    defaultValue: "'standard'",
  },
  {
    prop: "textColor",
    type: ["string"],
    description: "Color of the text in the tabs.",
    defaultValue: "'inherit'",
  },
  {
    prop: "indicatorColor",
    type: ["string"],
    description: "Color of the tab indicator.",
    defaultValue: "'secondary'",
  },
  {
    prop: "scrollButtons",
    type: ["string"],
    description:
      "Control the visibility of scroll buttons. Options: 'auto', 'desktop', 'on', 'off'.",
    defaultValue: "'auto'",
  },
  {
    prop: "allowScrollButtonsMobile",
    type: ["boolean"],
    description:
      "If true, allow scroll buttons to be visible on mobile devices.",
    defaultValue: "false",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the tabs.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the tabs. Supports 'root', 'tabs', 'leftArrow', 'rightArrow' keys.",
    defaultValue: "{}",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "Maximum height of the tabs.",
    defaultValue: "'500px'",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "Maximum width of the tabs.",
    defaultValue: "'500px'",
  },
  {
    prop: "scrollMode",
    type: ["string"],
    description: "Mode for scrolling behavior. Can be 'icon' or 'button'.",
    defaultValue: "'icon'",
  },
  {
    prop: "border",
    type: ["string"],
    description: "System prop for border.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "System prop for bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between items.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for gap between columns.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for gap between rows.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "System prop for position configuration.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top positioning.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right positioning.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom positioning.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left positioning.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for grid auto flow.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for grid area.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for align content.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for align items.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for align self.",
  },
  {
    prop: "flex",
    type: ["string"],
    description: "System prop for flex.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "System prop for flex direction.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for flex grow.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for flex shrink.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description: "System prop for flex wrap.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for justify content.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for order in flex.",
  },
];

export const boxProps = [
  {
    prop: "component",
    type: ["string", "elementType"],
    description: "The component used for the root node, defaults to 'div'.",
    defaultValue: "'div'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the box.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the box.",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback function fired when the box is clicked.",
  },
  {
    prop: "fontName",
    type: ["string"],
    description: "CSS class name for font styling.",
  },
  {
    prop: "border",
    type: ["string"],
    description: "System prop for border.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "System prop for bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between items.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for gap between columns.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for gap between rows.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description: "System prop for box-sizing.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top positioning.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right positioning.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom positioning.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left positioning.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for grid auto flow.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for grid area.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for align content.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for align items.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for align self.",
  },
  {
    prop: "flex",
    type: ["string"],
    description: "System prop for flex.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "System prop for flex direction.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for flex grow.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for flex shrink.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description: "System prop for flex wrap.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for justify content.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for order in flex.",
  },
];

export const containerProps = [
  {
    prop: "component",
    type: ["string", "elementType"],
    description: "The component used for the root node, defaults to 'div'.",
    defaultValue: "'div'",
  },
  {
    prop: "maxWidth",
    type: ["string"],
    description:
      "Sets the maximum width of the container. Can be values like 'sm', 'md', 'lg', etc.",
    defaultValue: "'lg'",
  },
  {
    prop: "fixed",
    type: ["boolean"],
    description: "If true, the container will have a fixed width.",
    defaultValue: "false",
  },
  {
    prop: "disableGutters",
    type: ["boolean"],
    description:
      "If true, the container will have no padding on the left and right sides.",
    defaultValue: "false",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the container.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the container.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the container. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string"],
    description: "System prop for border.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "System prop for bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between items.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for gap between columns.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for gap between rows.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description: "System prop for box-sizing.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top positioning.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right positioning.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom positioning.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left positioning.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for grid auto flow.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for grid area.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for align content.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for align items.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for align self.",
  },
  {
    prop: "flex",
    type: ["string"],
    description: "System prop for flex.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "System prop for flex direction.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for flex grow.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for flex shrink.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description: "System prop for flex wrap.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for justify content.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for order in flex.",
  },
];

export const gridProps = [
  {
    prop: "container",
    type: ["boolean"],
    description:
      "If true, the component behaves as a container for grid items.",
    defaultValue: "false",
  },
  {
    prop: "item",
    type: ["boolean"],
    description: "If true, the component behaves as a grid item.",
    defaultValue: "false",
  },
  {
    prop: "xs",
    type: ["number"],
    description: "Grid size for extra-small devices.",
  },
  {
    prop: "sm",
    type: ["number"],
    description: "Grid size for small devices.",
  },
  {
    prop: "md",
    type: ["number"],
    description: "Grid size for medium devices.",
  },
  {
    prop: "lg",
    type: ["number"],
    description: "Grid size for large devices.",
  },
  {
    prop: "xl",
    type: ["number"],
    description: "Grid size for extra-large devices.",
  },
  {
    prop: "spacing",
    type: ["number"],
    description: "Spacing between grid items.",
    defaultValue: "1",
  },
  {
    prop: "rowSpacing",
    type: ["number"],
    description: "Spacing between rows of grid items.",
  },
  {
    prop: "columnSpacing",
    type: ["number"],
    description: "Spacing between columns of grid items.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "Aligns grid items along the main axis.",
    oneOf: ["start", "center", "end", "around", "between", "evenly"],
  },
  {
    prop: "justifyItems",
    type: ["string"],
    description: "Aligns grid items along the cross axis.",
    oneOf: ["start", "center", "end", "stretch"],
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "Aligns items along the cross axis.",
    oneOf: ["start", "center", "end", "stretch", "baseline"],
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "Aligns content within the grid container.",
    oneOf: ["start", "center", "end", "between", "around", "stretch"],
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "Aligns a specific grid item along the cross axis.",
    oneOf: ["start", "center", "end", "stretch", "baseline"],
  },
  {
    prop: "justifySelf",
    type: ["string"],
    description: "Aligns a specific grid item along the main axis.",
    oneOf: ["start", "center", "end", "stretch", "baseline"],
  },
  {
    prop: "direction",
    type: ["string"],
    description: "Direction of the grid items.",
    defaultValue: "'row'",
    oneOf: ["row", "column"],
  },
  {
    prop: "wrap",
    type: ["string"],
    description: "Specifies whether grid items should wrap.",
    oneOf: ["wrap", "nowrap", "wrap-reverse"],
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content of the grid.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the grid.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the grid. Supports keys for various states.",
    defaultValue: "{}",
  },
  {
    prop: "border",
    type: ["string"],
    description: "System prop for border.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "System prop for bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between items.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for gap between columns.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for gap between rows.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description: "System prop for box-sizing.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top positioning.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right positioning.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom positioning.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left positioning.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for grid auto flow.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for grid area.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "flex",
    type: ["string"],
    description: "System prop for flex.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for flex grow.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for flex shrink.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for order in flex.",
  },
];

export const imageListProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The image list items to be rendered within the ImageList.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the ImageList.",
    defaultValue: "{}",
  },
  {
    prop: "cols",
    type: ["number"],
    description: "Number of columns in the grid.",
    defaultValue: "2",
  },
  {
    prop: "gap",
    type: ["number"],
    description: "Gap between the items in pixels.",
    defaultValue: "8",
  },
  {
    prop: "rowHeight",
    type: ["number"],
    description: "Height of each row in pixels.",
    defaultValue: "180",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
];

export const imageListItemProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the ImageListItem.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the ImageListItem.",
  },
  {
    prop: "rowHeight",
    type: ["number"],
    description: "Height of the item in rows.",
    defaultValue: "180",
  },
  {
    prop: "cols",
    type: ["number"],
    description: "Number of columns the item should span.",
    defaultValue: "1",
  },
  {
    prop: "rows",
    type: ["number"],
    description: "Number of rows the item should span.",
    defaultValue: "1",
  },
  {
    prop: "gap",
    type: ["number"],
    description: "Gap between the items.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
];

export const imageListItemBarProps = [
  {
    prop: "title",
    type: ["string"],
    description: "Title of the ImageListItemBar.",
  },
  {
    prop: "subtitle",
    type: ["string"],
    description: "Subtitle of the ImageListItemBar.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "Position of the ImageListItemBar, can be 'top' or 'bottom'.",
    defaultValue: "'bottom'",
  },
  {
    prop: "actionIcon",
    type: ["node"],
    description: "An icon or element to be displayed as an action.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the ImageListItemBar.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
];

export const stackProps = [
  {
    prop: "component",
    type: ["string", "elementType"],
    description: "The component used for the root node, defaults to 'div'.",
    defaultValue: "'div'",
  },
  {
    prop: "direction",
    type: ["string"],
    description: "Direction of the stack items, can be 'row' or 'column'.",
    defaultValue: "'column'",
  },
  {
    prop: "spacing",
    type: ["number"],
    description: "Spacing between stack items in pixels.",
    defaultValue: "2",
  },
  {
    prop: "divider",
    type: ["node"],
    description: "An optional element to be rendered between stack items.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the stack.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "useFlexGap",
    type: ["boolean"],
    description: "If true, uses flex gap for spacing between items.",
    defaultValue: "true",
  },
  {
    prop: "border",
    type: ["string"],
    description: "System prop for border.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "System prop for bottom border.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "System prop for border color.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "System prop for left border.",
  },
  {
    prop: "borderRadius",
    type: ["string", "number"],
    description: "System prop for border radius.",
  },
  {
    prop: "borderRight",
    type: ["string"],
    description: "System prop for right border.",
  },
  {
    prop: "borderTop",
    type: ["string"],
    description: "System prop for top border.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "System prop for box shadow.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "System prop for gap between items.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "System prop for gap between columns.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "System prop for gap between rows.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "System prop for background color using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "System prop for text color using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["string", "number"],
    description: "System prop for z-index.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "System prop for margin configuration.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "System prop for bottom margin.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "System prop for left margin.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "System prop for right margin.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "System prop for top margin.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "System prop for horizontal margins.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "System prop for vertical margins.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "System prop for padding configuration.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "System prop for bottom padding.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "System prop for left padding.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "System prop for right padding.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "System prop for top padding.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "System prop for horizontal padding.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "System prop for vertical padding.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description: "System prop for box-sizing.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top positioning.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right positioning.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom positioning.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left positioning.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for grid auto flow.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for grid area.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for align content.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for align items.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for align self.",
  },
  {
    prop: "flex",
    type: ["string"],
    description: "System prop for flex.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for flex grow.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for flex shrink.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for order in flex.",
  },
];

export const timelineProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The timeline items to be rendered within the Timeline.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "Position of the timeline items, can be 'left' or 'right'.",
    defaultValue: "'right'",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the Timeline.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the Timeline. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables interactions.",
    defaultValue: "false",
  },
];

export const timelineConnectorProps = [
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the TimelineConnector.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the TimelineConnector. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color of the connector line.",
    defaultValue: "'default'",
  },
];

export const timelineContentProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the TimelineContent.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color of the text in the TimelineContent.",
    defaultValue: "'text'",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the TimelineContent.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the TimelineContent. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "position",
    type: ["string"],
    description: "Position of the TimelineContent, can be 'left' or 'right'.",
  },
  {
    prop: "even",
    type: ["boolean"],
    description: "Indicates whether the TimelineContent is even.",
  },
];

export const timelineDotProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content inside the TimelineDot.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the TimelineDot.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the TimelineDot. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color of the dot.",
    defaultValue: "'default'",
  },
  {
    prop: "variant",
    type: ["string"],
    description: "Variant of the dot, can be 'filled' or 'outlined'.",
    defaultValue: "'filled'",
  },
];

export const timelineItemProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the TimelineItem.",
  },
  {
    prop: "even",
    type: ["boolean"],
    description: "Indicates whether the TimelineItem is even.",
  },
  {
    prop: "position",
    type: ["string"],
    description: "Position of the TimelineItem, can be 'left' or 'right'.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the TimelineItem.",
    defaultValue: "{}",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the TimelineItem. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
];

export const timelineOppositeContentProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content of the TimelineOppositeContent.",
  },
  {
    prop: "position",
    type: ["string"],
    description:
      "Position of the TimelineOppositeContent, can be 'left' or 'right'.",
  },
  {
    prop: "even",
    type: ["boolean"],
    description: "Indicates whether the TimelineOppositeContent is even.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the TimelineOppositeContent.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the TimelineOppositeContent. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Color of the text in the TimelineOppositeContent.",
    defaultValue: "'text'",
  },
];

export const timelineSeparatorProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content inside the TimelineSeparator.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the TimelineSeparator.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the TimelineSeparator. Supports 'root' key.",
    defaultValue: "{}",
  },
];

export const masonryProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The items to be rendered within the Masonry component.",
    required: true,
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the Masonry. Supports 'root', 'column', and 'item' keys.",
    defaultValue: "{}",
  },
  {
    prop: "columns",
    type: ["number", "object"],
    description:
      "Number of columns for the masonry layout or responsive column configuration.",
  },
  {
    prop: "component",
    type: ["string", "elementType"],
    description: "The component used for the root node, defaults to 'div'.",
    defaultValue: "'div'",
  },
  {
    prop: "defaultColumns",
    type: ["number"],
    description: "The default number of columns to use if none are specified.",
  },
  {
    prop: "defaultHeight",
    type: ["number"],
    description: "The default height for the masonry layout.",
    defaultValue: "0",
  },
  {
    prop: "defaultSpacing",
    type: ["number"],
    description: "The default spacing between items.",
    defaultValue: "1",
  },
  {
    prop: "spacing",
    type: ["number", "object"],
    description:
      "Spacing between items in pixels or responsive spacing configuration.",
    defaultValue: "1",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the Masonry.",
    defaultValue: "{}",
  },
];

export const focusTrapProps = [
  {
    prop: "open",
    type: ["boolean"],
    description:
      "If true, the FocusTrap is activated and focus is trapped within the component.",
  },
  {
    prop: "onDeactivate",
    type: ["function"],
    description:
      "Callback function that is called when the FocusTrap is deactivated.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content to render inside the FocusTrap.",
  },
  {
    prop: "disableAutoFocus",
    type: ["boolean"],
    description:
      "If true, the auto focus on the first tabbable element is disabled.",
    defaultValue: "false",
  },
  {
    prop: "disableEnforceFocus",
    type: ["boolean"],
    description: "If true, prevents enforcing focus within the FocusTrap.",
    defaultValue: "false",
  },
  {
    prop: "disableRestoreFocus",
    type: ["boolean"],
    description:
      "If true, prevents restoring focus to the previously focused element on deactivation.",
    defaultValue: "false",
  },
  {
    prop: "getTabbable",
    type: ["function"],
    description:
      "Function to retrieve tabbable elements. Defaults to a function that gets common interactive elements.",
    defaultValue: "getTabbableElements",
  },
  {
    prop: "isEnabled",
    type: ["function"],
    description: "Function that determines if the FocusTrap should be active.",
    defaultValue: "() => true",
  },
  {
    prop: "props",
    type: ["object"],
    description: "Any other props to be passed to the container element.",
  },
];

export const clickAwayListenerProps = [
  {
    prop: "children",
    type: ["node"],
    description: "The content to render inside the ClickAwayListener.",
  },
  {
    prop: "onClickAway",
    type: ["function"],
    description:
      "Callback function that is called when a click occurs outside of the component.",
  },
  {
    prop: "disableReactTree",
    type: ["boolean"],
    description:
      "If true, disables the check for clicks inside the React tree.",
    defaultValue: "false",
  },
  {
    prop: "mouseEvent",
    type: ["string"],
    description:
      "The mouse event that triggers the click away action. Defaults to 'mousedown'.",
    defaultValue: "'mousedown'",
  },
  {
    prop: "touchEvent",
    type: ["string"],
    description:
      "The touch event that triggers the click away action. Defaults to 'touchstart'.",
    defaultValue: "'touchstart'",
  },
];

export const popperProps = [
  {
    prop: "id",
    type: ["string"],
    description: "An optional ID for the Popper component.",
  },
  {
    prop: "open",
    type: ["boolean"],
    description: "If true, the Popper is displayed.",
  },
  {
    prop: "anchorEl",
    type: ["element"],
    description: "The element to which the Popper is anchored.",
  },
  {
    prop: "transition",
    type: ["boolean"],
    description:
      "If true, applies a transition effect when showing or hiding the Popper.",
    defaultValue: "false",
  },
  {
    prop: "children",
    type: ["node", "function"],
    description:
      "The content to render inside the Popper. Can also be a function that receives props.",
  },
  {
    prop: "placement",
    type: ["string"],
    description:
      "The placement of the Popper relative to the anchor. Options include 'top', 'bottom', 'left', 'right', and variations.",
    defaultValue: "'bottom'",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the Popper.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Override or extend the styles applied to the Popper. Supports 'root' key.",
    defaultValue: "{}",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "border",
    type: ["string"],
    description: "CSS border property.",
  },
  {
    prop: "borderBottom",
    type: ["string"],
    description: "CSS border-bottom property.",
  },
  {
    prop: "borderColor",
    type: ["string"],
    description: "CSS border-color property.",
  },
  {
    prop: "borderLeft",
    type: ["string"],
    description: "CSS border-left property.",
  },
  {
    prop: "borderRadius",
    type: ["string"],
    description: "CSS border-radius property.",
  },
  {
    prop: "borderRight",
    type: ["string"],
    description: "CSS border-right property.",
  },
  {
    prop: "borderTop",
    type: ["string"],
    description: "CSS border-top property.",
  },
  {
    prop: "boxShadow",
    type: ["string"],
    description: "CSS box-shadow property.",
  },
  {
    prop: "gap",
    type: ["string", "number"],
    description: "CSS gap property for flex/grid layout.",
  },
  {
    prop: "columnGap",
    type: ["string", "number"],
    description: "CSS column-gap property for grid layout.",
  },
  {
    prop: "rowGap",
    type: ["string", "number"],
    description: "CSS row-gap property for grid layout.",
  },
  {
    prop: "bgcolor",
    type: ["string"],
    description: "Background color of the Popper using theme palette.",
  },
  {
    prop: "color",
    type: ["string"],
    description: "Text color of the Popper using theme palette.",
  },
  {
    prop: "zIndex",
    type: ["number"],
    description: "Z-index of the Popper.",
  },
  {
    prop: "m",
    type: ["string", "number"],
    description: "CSS margin property.",
  },
  {
    prop: "mb",
    type: ["string", "number"],
    description: "CSS margin-bottom property.",
  },
  {
    prop: "ml",
    type: ["string", "number"],
    description: "CSS margin-left property.",
  },
  {
    prop: "mr",
    type: ["string", "number"],
    description: "CSS margin-right property.",
  },
  {
    prop: "mt",
    type: ["string", "number"],
    description: "CSS margin-top property.",
  },
  {
    prop: "mx",
    type: ["string", "number"],
    description: "CSS margin for horizontal spacing.",
  },
  {
    prop: "my",
    type: ["string", "number"],
    description: "CSS margin for vertical spacing.",
  },
  {
    prop: "p",
    type: ["string", "number"],
    description: "CSS padding property.",
  },
  {
    prop: "pb",
    type: ["string", "number"],
    description: "CSS padding-bottom property.",
  },
  {
    prop: "pl",
    type: ["string", "number"],
    description: "CSS padding-left property.",
  },
  {
    prop: "pr",
    type: ["string", "number"],
    description: "CSS padding-right property.",
  },
  {
    prop: "pt",
    type: ["string", "number"],
    description: "CSS padding-top property.",
  },
  {
    prop: "px",
    type: ["string", "number"],
    description: "CSS padding for horizontal spacing.",
  },
  {
    prop: "py",
    type: ["string", "number"],
    description: "CSS padding for vertical spacing.",
  },
  {
    prop: "typography",
    type: ["string"],
    description: "System prop for typography style configuration.",
  },
  {
    prop: "fontFamily",
    type: ["string"],
    description: "System prop for font family configuration.",
  },
  {
    prop: "fontSize",
    type: ["string", "number"],
    description: "System prop for font size.",
  },
  {
    prop: "fontStyle",
    type: ["string"],
    description: "System prop for font style.",
  },
  {
    prop: "fontWeight",
    type: ["string", "number"],
    description: "System prop for font weight.",
  },
  {
    prop: "letterSpacing",
    type: ["string", "number"],
    description: "System prop for letter-spacing.",
  },
  {
    prop: "lineHeight",
    type: ["string", "number"],
    description: "System prop for line-height.",
  },
  {
    prop: "textAlign",
    type: ["string"],
    description: "System prop for text alignment.",
  },
  {
    prop: "height",
    type: ["string", "number"],
    description: "System prop for height.",
  },
  {
    prop: "maxHeight",
    type: ["string", "number"],
    description: "System prop for maximum height.",
  },
  {
    prop: "maxWidth",
    type: ["string", "number"],
    description: "System prop for maximum width.",
  },
  {
    prop: "minHeight",
    type: ["string", "number"],
    description: "System prop for minimum height.",
  },
  {
    prop: "minWidth",
    type: ["string", "number"],
    description: "System prop for minimum width.",
  },
  {
    prop: "width",
    type: ["string", "number"],
    description: "System prop for width.",
  },
  {
    prop: "boxSizing",
    type: ["string"],
    description: "System prop for box-sizing.",
  },
  {
    prop: "top",
    type: ["string", "number"],
    description: "System prop for top positioning.",
  },
  {
    prop: "right",
    type: ["string", "number"],
    description: "System prop for right positioning.",
  },
  {
    prop: "bottom",
    type: ["string", "number"],
    description: "System prop for bottom positioning.",
  },
  {
    prop: "left",
    type: ["string", "number"],
    description: "System prop for left positioning.",
  },
  {
    prop: "gridColumn",
    type: ["string"],
    description: "System prop for grid column placement.",
  },
  {
    prop: "gridRow",
    type: ["string"],
    description: "System prop for grid row placement.",
  },
  {
    prop: "gridAutoFlow",
    type: ["string"],
    description: "System prop for grid auto flow.",
  },
  {
    prop: "gridAutoColumns",
    type: ["string"],
    description: "System prop for grid auto columns.",
  },
  {
    prop: "gridAutoRows",
    type: ["string"],
    description: "System prop for grid auto rows.",
  },
  {
    prop: "gridTemplateColumns",
    type: ["string"],
    description: "System prop for grid template columns.",
  },
  {
    prop: "gridTemplateRows",
    type: ["string"],
    description: "System prop for grid template rows.",
  },
  {
    prop: "gridTemplateAreas",
    type: ["string"],
    description: "System prop for grid template areas.",
  },
  {
    prop: "gridArea",
    type: ["string"],
    description: "System prop for grid area.",
  },
  {
    prop: "display",
    type: ["string"],
    description: "System prop for CSS display property.",
  },
  {
    prop: "alignContent",
    type: ["string"],
    description: "System prop for align-content property.",
  },
  {
    prop: "alignItems",
    type: ["string"],
    description: "System prop for align-items property.",
  },
  {
    prop: "alignSelf",
    type: ["string"],
    description: "System prop for align-self property.",
  },
  {
    prop: "flex",
    type: ["string"],
    description: "System prop for flex property.",
  },
  {
    prop: "flexDirection",
    type: ["string"],
    description: "System prop for flex direction.",
  },
  {
    prop: "flexGrow",
    type: ["string", "number"],
    description: "System prop for flex grow.",
  },
  {
    prop: "flexShrink",
    type: ["string", "number"],
    description: "System prop for flex shrink.",
  },
  {
    prop: "flexWrap",
    type: ["string"],
    description: "System prop for flex wrap.",
  },
  {
    prop: "justifyContent",
    type: ["string"],
    description: "System prop for justify-content property.",
  },
  {
    prop: "order",
    type: ["string", "number"],
    description: "System prop for flex item order.",
  },
];

export const modalProps = [
  {
    prop: "open",
    type: ["boolean"],
    description: "If true, the modal is displayed.",
  },
  {
    prop: "onClose",
    type: ["function"],
    description: "Callback function to handle closing the modal.",
  },
  {
    prop: "fullWidth",
    type: ["boolean"],
    description: "If true, the modal will be full width.",
    defaultValue: "false",
  },
  {
    prop: "maxWidth",
    type: ["oneOf(['xs', 'sm', 'md', 'lg', 'xl'])"],
    description: "Sets the maximum width of the modal.",
    defaultValue: "'600px'",
  },
  {
    prop: "disableBackdropClick",
    type: ["boolean"],
    description: "If true, clicking the backdrop will not close the modal.",
    defaultValue: "false",
  },
  {
    prop: "disableEscapeKeyDown",
    type: ["boolean"],
    description:
      "If true, the modal will not close when the Escape key is pressed.",
    defaultValue: "false",
  },
  {
    prop: "children",
    type: ["node"],
    description: "The content to be displayed inside the modal.",
  },
  {
    prop: "PaperComponent",
    type: ["elementType"],
    description: "Component used to render the modal's paper element.",
    defaultValue: "Paper",
  },
  {
    prop: "PaperProps",
    type: ["object"],
    description: "Props to be passed to the Paper component.",
  },
  {
    prop: "TransitionComponent",
    type: ["elementType"],
    description: "Component used for the transition effect.",
    defaultValue: "Fade",
  },
  {
    prop: "transitionDuration",
    type: [
      "oneOfType([number, shape({ appear: number, enter: number, exit: number })])",
    ],
    description: "Duration for the transition effects.",
    defaultValue: "{ enter: 225, exit: 195 }",
  },
  {
    prop: "TransitionProps",
    type: ["object"],
    description: "Props to be passed to the Transition component.",
  },
  {
    prop: "fullscreen",
    type: ["boolean"],
    description: "If true, the modal will take the full screen.",
  },
  {
    prop: "scroll",
    type: ["oneOf(['body', 'paper'])"],
    description: "Determines how the modal content is scrolled.",
    defaultValue: "'paper'",
  },
  {
    prop: "showCloseIcon",
    type: ["boolean"],
    description: "If true, a close icon will be displayed in the modal header.",
    defaultValue: "false",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the modal.",
    defaultValue: "{}",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class name for custom styling.",
    defaultValue: "''",
  },
  {
    prop: "classes",
    type: ["object"],
    description: "Override or extend the styles applied to the modal.",
    defaultValue: "{}",
  },
];

export const loadingButtonProps = [
  {
    prop: "loading",
    type: ["boolean"],
    description: "If true, shows a loading indicator and disables the button.",
    defaultValue: false,
  },
  {
    prop: "loadingPosition",
    type: ["'start'", "'end'"],
    description:
      "Position of the loading indicator relative to the button content. Options are 'start' or 'end'.",
    defaultValue: "end",
  },
  {
    prop: "startIcon",
    type: ["node"],
    description:
      "Element to display at the start of the button, typically an icon.",
  },
  {
    prop: "endIcon",
    type: ["node"],
    description:
      "Element to display at the end of the button, typically an icon.",
  },
  {
    prop: "loadingIndicator",
    type: ["node"],
    description:
      "Custom loading indicator to display while loading. Default is a div with class 'loading-icon'.",
    defaultValue: "<div className='loading-icon'></div>",
  },
  {
    prop: "color",
    type: ["string"],
    description:
      "The color of the button, matching theme colors or a custom color.",
    defaultValue: "primary",
  },
  {
    prop: "size",
    type: ["'small'", "'medium'", "'large'"],
    description:
      "Size of the button. Options are 'small', 'medium', or 'large'.",
    defaultValue: "medium",
  },
  {
    prop: "variant",
    type: ["'contained'", "'outlined'", "'text'"],
    description:
      "The variant of the button. Options are 'contained', 'outlined', or 'text'.",
    defaultValue: "contained",
  },
  {
    prop: "onClick",
    type: ["function"],
    description: "Callback function fired when the button is clicked.",
  },
  {
    prop: "children",
    type: ["node"],
    description: "Content to display inside the button.",
  },
  {
    prop: "disabled",
    type: ["boolean"],
    description: "If true, disables the button.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the button.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Overrides or extends styles for specific elements of the button.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional CSS class names for styling the button.",
  },
];

export const mobileStepperProps = [
  {
    prop: "steps",
    type: ["number"],
    description: "The total number of steps in the mobile stepper.",
  },
  {
    prop: "variant",
    type: ["string"],
    description:
      "The variant of the stepper. Options are 'dots', 'progress', or 'text'.",
    defaultValue: "dots",
  },
  {
    prop: "position",
    type: ["'top'", "'bottom'"],
    description: "Position of the stepper. Options are 'top' or 'bottom'.",
    defaultValue: "bottom",
  },
  {
    prop: "nextButton",
    type: ["node"],
    description: "Custom component or element to display as the next button.",
  },
  {
    prop: "backButton",
    type: ["node"],
    description: "Custom component or element to display as the back button.",
  },
  {
    prop: "activeStep",
    type: ["number"],
    description:
      "The current active step. If provided, it makes the stepper controlled.",
  },
  {
    prop: "onChange",
    type: ["function"],
    description: "Callback function fired when the active step changes.",
  },
  {
    prop: "sx",
    type: ["object", "function", "array"],
    description:
      "System prop to customize css style dynamically using advanced CSS in JS functionality.",
  },
  {
    prop: "style",
    type: ["object"],
    description: "Inline styles applied to the mobile stepper.",
  },
  {
    prop: "className",
    type: ["string"],
    description: "Additional class names for styling the mobile stepper.",
  },
  {
    prop: "classes",
    type: ["object"],
    description:
      "Overrides or extends styles for specific elements of the mobile stepper.",
  },
];
