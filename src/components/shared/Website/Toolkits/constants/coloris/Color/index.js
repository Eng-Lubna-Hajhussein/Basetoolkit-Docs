import { Link } from "@basetoolkit/ui";
import { View as AlphaView, source as AlphaSrc } from "./../../../../Toolkits/Docs/coloris/Color/Alpha";
import { View as DarkenView, source as DarkenSrc } from "./../../../../Toolkits/Docs/coloris/Color/Darken";
import { View as BrightnessView, source as BrightnessSrc } from "./../../../../Toolkits/Docs/coloris/Color/Brightness";
import { View as SaturateView, source as SaturateSrc } from "./../../../../Toolkits/Docs/coloris/Color/Saturate";
import { View as DesaturateView, source as DesaturateSrc } from "./../../../../Toolkits/Docs/coloris/Color/Desaturate";
import { View as MixView, source as MixSrc } from "./../../../../Toolkits/Docs/coloris/Color/Mix";
import { View as HexView, source as HexSrc } from "./../../../../Toolkits/Docs/coloris/Color/Hex";
import { View as CssView, source as CssSrc } from "./../../../../Toolkits/Docs/coloris/Color/Css";
import { View as NumView, source as NumSrc } from "./../../../../Toolkits/Docs/coloris/Color/Num";
import {
  View as TemperatureView,
  source as TemperatureSrc,
} from "./../../../../Toolkits/Docs/coloris/Color/Temperature";
import { View as AverageView, source as AverageSrc } from "./../../../../Toolkits/Docs/coloris/Color/Average";
import { View as LuminanceView, source as LuminanceSrc } from "./../../../../Toolkits/Docs/coloris/Color/Luminance";
import { View as RandomView, source as RandomSrc } from "./../../../../Toolkits/Docs/coloris/Color/Random";
import { View as DistanceView, source as DistanceSrc } from "./../../../../Toolkits/Docs/coloris/Color/Distance";
import { View as BlendView, source as BlendSrc } from "./../../../../Toolkits/Docs/coloris/Color/Blend";

export const colorContent = [
    { label: "#alpha", href: "#coloris-alpha" },
    { label: "#darken", href: "#coloris-darken" },
    { label: "#brightness", href: "#coloris-brightness" },
    { label: "#saturate", href: "#coloris-saturate" },
    { label: "#desaturate", href: "#coloris-desaturate" },
    { label: "#mix", href: "#coloris-mix" },
    { label: "#hex", href: "#coloris-hex" },
    { label: "#css", href: "#coloris-css" },
    { label: "#num", href: "#coloris-num" },
    { label: "#temperature", href: "#coloris-temperature" },
    { label: "#average", href: "#coloris-average" },
    { label: "#luminance", href: "#coloris-luminance" },
    { label: "#random", href: "#coloris-random" },
    { label: "#distance", href: "#coloris-distance" },
    { label: "#blend", href: "#coloris-blend" },
  ];
  

export const colorSections = [
  {
    id: "coloris-alpha",
    title: "#coloris(color).alpha(a).hex()",
    subtitle: `The alpha method in the Coloris class sets or adjusts the transparency level of a color. Given a value from 0 (fully transparent) to 1 (fully opaque), it updates the alpha property in the color object, allowing for RGBA color representation.`,
    source: AlphaSrc,
    view: AlphaView,
  },
  {
    id: "coloris-darken",
    title: "#coloris(color).darken(factor).hex()",
    subtitle: `The darken method in the Coloris class reduces the lightness of a color, making it appear darker. By applying a factor from 1 to 10, it adjusts the lightness proportionally, with higher values leading to a greater darkening effect. This change is applied in HSL color space, impacting only the lightness while preserving the hue and saturation.`,
    source: DarkenSrc,
    view: DarkenView,
  },
  {
    id: "coloris-brightness",
    title: "#coloris(color).brightness(factor).hex()",
    subtitle: `
The brightness method in the Coloris class increases a color's lightness to make it appear brighter. Using a factor from 1 to 10, it proportionally adjusts lightness, with higher values resulting in a more noticeable brightening effect. This adjustment is applied in the HSL color space, affecting only lightness without altering hue or saturation.`,
    source: BrightnessSrc,
    view: BrightnessView,
  },
  {
    id: "coloris-saturate",
    title: "#coloris(color).saturate(factor).hex()",
    subtitle: `
The saturate method in the Coloris class increases a color’s saturation to make it appear more vivid. Given a factor from 1 to 10, it enhances the color intensity by boosting saturation in the HSL color space, keeping lightness and hue unaffected. Higher factors yield a stronger saturation effect.`,
    source: SaturateSrc,
    view: SaturateView,
  },
  {
    id: "coloris-desaturate",
    title: "#coloris(color).desaturate(factor).hex()",
    subtitle: `The desaturate method in the Coloris class reduces a color’s saturation, making it appear more muted or grayish. By applying a factor from 1 to 10, the method decreases the saturation in the HSL color space, keeping the hue and lightness stable. Higher factors lead to a more noticeable desaturation effect.`,
    source: DesaturateSrc,
    view: DesaturateView,
  },
  {
    id: "coloris-mix",
    title: "#coloris.mix(color1,color2, ratio=0.5)",
    subtitle: `
The mix method in the Coloris class blends two colors by calculating a weighted average of their RGB values. It accepts two colors and an optional ratio (default is 0.5) that determines the proportion of each color in the mix. Lower ratios favor the first color, while higher ratios favor the second, creating a smooth transition between the two. The method returns the resulting color in hex format.`,
    source: MixSrc,
    view: MixView,
  },
  {
    id: "coloris-hex",
    title: "#coloris(color).hex()",
    subtitle: `The hex method in the Coloris class converts the current color instance to a hexadecimal string format (e.g., #RRGGBB or #RRGGBBAA if an alpha value is present). It provides an easy way to retrieve the color in a standard hex representation for consistent use across applications.`,
    source: HexSrc,
    view: HexView,
  },
  {
    id: "coloris-css",
    title: "#coloris(color).css(a)",
    subtitle: `The css method in the Coloris class generates a CSS color string for the current color instance. Depending on the specified alpha value, it returns either an rgb() or rgba() formatted string (e.g., rgb(255, 0, 0) or rgba(255, 0, 0, 0.5)), making it easy to integrate color values directly into stylesheets and inline styles.`,
    source: CssSrc,
    view: CssView,
  },
  {
    id: "coloris-num",
    title: "#coloris(color).num()",
    subtitle: `The num method in the Coloris class converts the color instance's hexadecimal color code into a numeric value, returning it as an integer. This can be useful for calculations, comparisons, or when a numeric representation of a color is required.`,
    source: NumSrc,
    view: NumView,
  },
  {
    id: "coloris-temperature",
    title: "#coloris.temperature(K) | coloris(color).temperature()",
    subtitle: (
      <>
        The temperature method in the Coloris class returns a color from the
        color temperature scale. When used as a static method with a Kelvin
        temperature as an argument, it computes and returns the RGB color that
        matches the specified temperature, based on{" "}
        <Link
          underline="always"
          href="https://github.com/neilbartlett/color-temperature"
        >
          Neil Bartlett's implementation
        </Link>{" "}
        of black-body color temperatures. When used as an instance method, it
        estimates the closest black-body temperature for the color, converting
        its RGB values to an approximate temperature in Kelvin, which can help
        determine the warmth or coolness of a color.
      </>
    ),
    source: TemperatureSrc,
    view: TemperatureView,
  },
  {
    id: "coloris-average",
    title: "#coloris.average(colors=[], weights=[])",
    subtitle: `
The average method in the Coloris class calculates the average color from a given array of colors, producing a balanced RGB blend. Optionally, an array of weights can be provided to influence the mix, emphasizing certain colors over others. The result is a hex color value representing the averaged color of all input colors, making it useful for generating harmonious shades or finding a midpoint hue.`,
    source: AverageSrc,
    view: AverageView,
  },
  {
    id: "coloris-luminance",
    title: "#coloris(color).luminance() | coloris(color).luminance(b)",
    subtitle: `The luminance method in the Coloris class computes the luminance, or perceived brightness, of a color. When used as a method without arguments, it calculates and returns a color's luminance value, giving a number between 0 and 1, where higher values indicate brighter colors. When provided with a specific luminance value as an argument, the method adjusts the RGB components of the color to match the target luminance, outputting a hex value. This feature is beneficial for achieving consistent brightness across different colors.`,
    source: LuminanceSrc,
    view: LuminanceView,
  },
  {
    id: "coloris-random",
    title: "#coloris.random()",
    subtitle: `
The random method in the Coloris class generates and returns a random color in hexadecimal format. Each call produces a unique color by generating random values for the red, green, and blue components, resulting in a broad range of colors suitable for use in dynamic or visually diverse applications.`,
    source: RandomSrc,
    view: RandomView,
  },
  {
    id: "coloris-distance",
    title: "#coloris.distance(color1, color2)",
    subtitle: `
The distance method in the Coloris class calculates and returns the color distance between two colors, using the Euclidean distance formula on their RGB components. This measure indicates how similar or different two colors are, with smaller values representing closer colors and larger values indicating greater differences.`,
    source: DistanceSrc,
    view: DistanceView,
  },
  {
    id: "coloris-blend",
    title: "#coloris.blend(color1, color2,mode='multiply'|'darken'|'lighten')",
    subtitle: `
The blend method in the Coloris class merges two colors based on a specified blending mode, such as "multiply," "darken," or "lighten." It calculates the RGB values of the blended color by applying the chosen mode, allowing for various visual effects and contrasts. The result is a new color that reflects the relationship between the two original colors according to the specified blending operation.`,
    source: BlendSrc,
    view: BlendView,
  },
];
