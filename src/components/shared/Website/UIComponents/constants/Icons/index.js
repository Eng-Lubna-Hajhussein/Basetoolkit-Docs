import {
  View as IconOptionsView,
  source as IconOptionsSrc,
} from "./../../../UIComponents/Docs/Icons/IconOptions";
import {
  View as VariantsView,
  source as VariantsSrc,
} from "./../../../UIComponents/Docs/Icons/Variants";
import {
  View as SizeView,
  source as SizeSrc,
} from "./../../../UIComponents/Docs/Icons/Size";
import {
  View as FontSizeView,
  source as FontSizeSrc,
} from "./../../../UIComponents/Docs/Icons/FontSize";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/Icons/Color";
import {
  View as PartiallyFilledIconView,
  source as PartiallyFilledIconSrc,
} from "./../../../UIComponents/Docs/Icons/PartiallyFilledIcon";
import {
  View as IconButtonView,
  source as IconButtonSrc,
} from "./../../../UIComponents/Docs/Icons/IconButton";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Icons/Customization";

import {
  svgIconProps,
  partiallyFilledIconProps,
} from "../../Api/PropsApi/constants";
import { Link } from "@basetoolkit/ui";

export const iconsContent = [
  { label: "#Icon Options", href: "#icon-options" },
  { label: "#Variants", href: "#variants" },
  { label: "#Color", href: "#color" },
  { label: "#Size", href: "#size" },
  { label: "#Font Size", href: "#font-size" },
  { label: "#Partially Filled Icon", href: "partially-filled-icon" },
  { label: "#Icon Button", href: "#icon-button" },
  { label: "#Customization", href: "#customization" },
  { label: "<SvgIcon />", href: "#svgicon-api" },
  { label: "<PartiallyFilledIcon />", href: "#partially-filled-icon-api" },
];

export const iconsSections = [
  {
    id: "icon-options",
    title: "#Icon Options",
    subtitle: (
      <>
        The SvgIcon component uses icons from{" "}
        <Link underline="always" href="https://fonts.google.com/icons">
          [Google Material Icons]
        </Link>{" "}
        providing a wide variety of options that you can integrate into your
        application. Use the "icon" prop to specify the desired icon
      </>
    ),
    source: IconOptionsSrc,
    view: IconOptionsView,
  },
  {
    id: "variants",
    title: "#Variants",
    subtitle:
      "Demonstrates different icon styles like filled, outlined, and round using the variant prop.",
    source: VariantsSrc,
    view: VariantsView,
  },
  {
    id: "color",
    title: "#Color",
    subtitle:
      "Shows how to use various colors with the color prop, including theme colors like primary, secondary, and custom hex values.",
    source: ColorSrc,
    view: ColorView,
  },
  {
    id: "size",
    title: "#Size",
    subtitle:
      "Demonstrates different predefined sizes (small, medium, large) using the size prop.",
    source: SizeSrc,
    view: SizeView,
  },
  {
    id: "font-size",
    title: "#Font Size",
    subtitle:
      "Illustrates how to set a custom fontSize for specific icon dimensions, overriding default sizes.",
    source: FontSizeSrc,
    view: FontSizeView,
  },
  {
    id: "partially-filled-icon",
    title: "#Partially Filled Icon",
    subtitle:
      "The PartiallyFilledIcon component in BaseToolkit allows flexible control over the fill percentage of icons, ideal for indicating progress or emphasis.",
    source: PartiallyFilledIconSrc,
    view: PartiallyFilledIconView,
  },
  {
    id: "icon-button",
    title: "#Icon Button",
    subtitle:
      "Wraps the SvgIcon in an IconButton to make it interactive, perfect for clickable icons with hover and focus effects.",
    source: IconButtonSrc,
    view: IconButtonView,
  },
  {
    id: "customization",
    title: "#Customization",
    subtitle:
      "Demonstrates custom styling using the sx prop and additional system props for alignment, margin, and custom dimensions.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "svgicon-api",
    title: "<SvgIcon />",
    isApi: true,
    componentProps: svgIconProps,
  },
  {
    id: "partially-filled-icon-api",
    title: "<PartiallyFilledIcon />",
    isApi: true,
    componentProps: partiallyFilledIconProps,
  },
];
