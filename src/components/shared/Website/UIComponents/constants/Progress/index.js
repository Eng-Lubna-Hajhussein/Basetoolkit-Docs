import {
  View as CircularBasicView,
  source as CircularBasicSrc,
} from "./../../../UIComponents/Docs/Progress/CircularBasic";
import {
  View as CircularColorView,
  source as CircularColorSrc,
} from "./../../../UIComponents/Docs/Progress/CircularColor";
import {
  View as CircularSizeView,
  source as CircularSizeSrc,
} from "./../../../UIComponents/Docs/Progress/CircularSize";
import {
  View as CircularDeterminateView,
  source as CircularDeterminateSrc,
} from "./../../../UIComponents/Docs/Progress/CircularDeterminate";
import {
  View as InteractiveIntegrationView,
  source as InteractiveIntegrationSrc,
} from "./../../../UIComponents/Docs/Progress/InteractiveIntegration";
import {
  View as CircularWithLabelView,
  source as CircularWithLabelSrc,
} from "./../../../UIComponents/Docs/Progress/CircularWithLabel";
import {
  View as LinearBasicView,
  source as LinearBasicSrc,
} from "./../../../UIComponents/Docs/Progress/LinearBasic";
import {
  View as LinearColorView,
  source as LinearColorSrc,
} from "./../../../UIComponents/Docs/Progress/LinearColor";
import {
  View as LinearDeterminateView,
  source as LinearDeterminateSrc,
} from "./../../../UIComponents/Docs/Progress/LinearDeterminate";
import {
  View as LinearWithLabelView,
  source as LinearWithLabelSrc,
} from "./../../../UIComponents/Docs/Progress/LinearWithLabel";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Progress/Customization";
import {
  circularProgressProps,
  linearProgressProps,
} from "../../Api/PropsApi/constants";

export const progressContent = [
  { label: "#Basic Circular", href: "#basic-circular" },
  { label: "#Circular Color", href: "#circular-color" },
  { label: "#Circular Size", href: "#circular-size" },
  { label: "#Determinate Circular", href: "#determinate-circular" },
  { label: "#Interactive Mode", href: "#interactive-mode" },
  { label: "#Basic Linear", href: "#basic-linear" },
  { label: "#Linear Color", href: "#linear-color" },
  { label: "#Determinate Linear", href: "#determinate-linear" },
  { label: "#Labeled Linear", href: "#labeled-linear" },
  { label: "#Custom Style", href: "#custom-style" },
  { label: "<CircularProgress />", href: "#circular-progress-api" },
  { label: "<LinearProgress />", href: "#linear-progress-api" },
];

export const progressSections = [
  {
    id: "basic-circular",
    title: "#Basic Circular",
    subtitle: "A simple circular progress indicator.",
    source: CircularBasicSrc,
    view: CircularBasicView,
  },
  {
    id: "circular-color",
    title: "#Circular Color",
    subtitle: "Adjust the color of the circular indicator.",
    source: CircularColorSrc,
    view: CircularColorView,
  },
  {
    id: "circular-size",
    title: "#Circular Size",
    subtitle: "Resize the circular progress with the size prop.",
    source: CircularSizeSrc,
    view: CircularSizeView,
  },
  {
    id: "labeled-circular",
    title: "#Labeled circular",
    subtitle: "Add a label to show progress percentage.",
    source: CircularWithLabelSrc,
    view: CircularWithLabelView,
  },
  {
    id: "determinate-circular",
    title: "#Determinate Circular",
    subtitle: "Control circular progress with determinate mode.",
    source: CircularDeterminateSrc,
    view: CircularDeterminateView,
  },
  {
    id: "interactive-mode",
    title: "#Interactive Mode",
    subtitle: "Integrate interactive progress into your UI.",
    source: InteractiveIntegrationSrc,
    view: InteractiveIntegrationView,
  },
  {
    id: "basic-linear",
    title: "#Basic Linear",
    subtitle: "A standard linear progress indicator.",
    source: LinearBasicSrc,
    view: LinearBasicView,
  },
  {
    id: "linear-color",
    title: "#Linear Color",
    subtitle: "Adjust the color of the linear indicator.",
    source: LinearColorSrc,
    view: LinearColorView,
  },
  {
    id: "determinate-linear",
    title: "#Determinate Linear",
    subtitle: "Control linear progress with determinate mode.",
    source: LinearDeterminateSrc,
    view: LinearDeterminateView,
  },
  {
    id: "labeled-linear",
    title: "#Labeled Linear",
    subtitle: "Add a label to show progress percentage.",
    source: LinearWithLabelSrc,
    view: LinearWithLabelView,
  },
  {
    id: "custom-style",
    title: "#Custom Style",
    subtitle: "Examples of customized progress styling.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "circular-progress-api",
    title: "<CircularProgress />",
    isApi: true,
    componentProps: circularProgressProps,
  },
  {
    id: "linear-progress-api",
    title: "<LinearProgress />",
    isApi: true,
    componentProps: linearProgressProps,
  },
];
