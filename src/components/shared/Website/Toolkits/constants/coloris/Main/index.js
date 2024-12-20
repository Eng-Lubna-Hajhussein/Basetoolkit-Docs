import { View as ValidView, source as ValidSrc } from "./../../../../Toolkits/Docs/coloris/Main/Valid";
import { View as HslView, source as HslSrc } from "./../../../../Toolkits/Docs/coloris/Main/Hsl";
import { View as LabView, source as LabSrc } from "./../../../../Toolkits/Docs/coloris/Main/Lab";
import { View as LchView, source as LchSrc } from "./../../../../Toolkits/Docs/coloris/Main/Lch";
import { View as HclView, source as HclSrc } from "./../../../../Toolkits/Docs/coloris/Main/Hcl";
import { View as OklabView, source as OklabSrc } from "./../../../../Toolkits/Docs/coloris/Main/Oklab";
import { View as OklchView, source as OklchSrc } from "./../../../../Toolkits/Docs/coloris/Main/Oklch";
import { View as CmykView, source as CmykSrc } from "./../../../../Toolkits/Docs/coloris/Main/Cmyk";
import { View as GlView, source as GlSrc } from "./../../../../Toolkits/Docs/coloris/Main/Gl";
import { View as ImportSyntaxView, source as ImportSyntaxSrc } from "./../../../../Toolkits/Docs/coloris/ImportSyntax/Syntax";

export const mainContent = [
  { label: "#Import Syntax", href: "#import-syntax" },
    { label: "#valid", href: "#coloris-valid" },
    { label: "#hsl", href: "#coloris-hsl" },
    { label: "#lab", href: "#coloris-lab" },
    { label: "#lch", href: "#coloris-lch" },
    { label: "#hcl", href: "#coloris-hcl" },
    { label: "#oklab", href: "#coloris-oklab" },
    { label: "#oklch", href: "#coloris-oklch" },
    { label: "#cmyk", href: "#coloris-cmyk" },
    { label: "#gl", href: "#coloris-gl" },
  ];
  

export const mainSections = [
  {
    id: "import-syntax",
    title: "#Import Syntax",
    subtitle: null,
    source: ImportSyntaxSrc,
    view: ImportSyntaxView,
  },
  {
    id: "coloris-valid",
    title: "#coloris.valid",
    subtitle: `
The valid method in the Coloris class checks if a color is in a recognized format, supporting named colors, HEX codes, and rgb() or rgba() formats with valid RGB and alpha values. It returns true for valid colors and false otherwise.`,
    source: ValidSrc,
    view: ValidView,
  },
  {
    id: "coloris-hsl",
    title: "#coloris.hsl(hue, saturation, lightness)",
    subtitle: `
The hsl method in the Coloris class converts HSL color values (Hue, Saturation, Lightness) to a HEX color format. It accepts h (hue in degrees), s (saturation as a percentage), and l (lightness as a percentage) and returns the HEX equivalent of the specified HSL color.`,
    source: HslSrc,
    view: HslView,
  },
  {
    id: "coloris-lab",
    title: "#coloris.lab(Lightness, a, b)",
    subtitle: `The lab method in the Coloris class converts CIELAB color values (L for lightness, a and b for color-opponent dimensions) into HEX color format. It takes L, a, and b as inputs, processes them through the LAB-to-XYZ and XYZ-to-RGB conversions, and returns the resulting HEX color.`,
    source: LabSrc,
    view: LabView,
  },
  {
    id: "coloris-lch",
    title: "#coloris.lch(Lightness, chroma, hue)",
    subtitle: `The lch method in the Coloris class converts LCH color values (Lightness, Chroma, and Hue) to HEX format. It calculates a and b values from Chroma and Hue, then uses the lab method to convert these values into the final HEX color output.`,
    source: LchSrc,
    view: LchView,
  },
  {
    id: "coloris-hcl",
    title: "#coloris.hcl(hue, chroma, lightness)",
    subtitle: `
The hcl method in the Coloris class converts HCL color values (Hue, Chroma, and Lightness) to HEX. It first translates HCL to Lab format, then uses the lab method to generate the corresponding HEX color output.`,
    source: HclSrc,
    view: HclView,
  },
  {
    id: "coloris-oklab",
    title: "#coloris.oklab(Lightness, a, b)",
    subtitle: `The oklab method in the Coloris class converts Oklab color values (a perceptually uniform color space) to HEX format. It first transforms Oklab values into linear RGB, then to standard RGB, and finally converts the result to a HEX color.`,
    source: OklabSrc,
    view: OklabView,
  },
  {
    id: "coloris-oklch",
    title: "#coloris.oklch(Lightness, chromacity, hue)",
    subtitle: `The oklch method in the Coloris class converts Oklch color values (a lightness, chroma, and hue-based color space) to HEX format. It translates Oklch to Oklab, then converts it to RGB, and finally outputs the color in HEX format.`,
    source: OklchSrc,
    view: OklchView,
  },
  {
    id: "coloris-cmyk",
    title: "#coloris.cmyk(cyan, magenta, yellow, black)",
    subtitle: `
The cmyk method in the Coloris class converts CMYK (Cyan, Magenta, Yellow, Black) color values to HEX format. It first translates the CMYK values to RGB and then converts the resulting RGB values to a HEX code.`,
    source: CmykSrc,
    view: CmykView,
  },
  {
    id: "coloris-gl",
    title: "#coloris.gl(red, green, blue, [alpha])",
    subtitle: `The gl method in the Coloris class converts normalized RGB (GL) values, which range from 0 to 1, into a HEX format. By scaling the RGB values to the 0-255 range, it produces a HEX code, optionally including an alpha (transparency) value.`,
    source: GlSrc,
    view: GlView,
  },
];
