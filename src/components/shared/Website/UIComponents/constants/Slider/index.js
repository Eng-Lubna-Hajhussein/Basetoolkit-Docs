import {
  View as ContinuousSlidersView,
  source as ContinuousSlidersSrc,
} from "./../../../UIComponents/Docs/Slider/ContinuousSliders";
import {
  View as SizesView,
  source as SizesSrc,
} from "./../../../UIComponents/Docs/Slider/Sizes";
import {
  View as DiscreteSlidersView,
  source as DiscreteSlidersSrc,
} from "./../../../UIComponents/Docs/Slider/DiscreteSliders";
import {
  View as SmallStepsView,
  source as SmallStepsSrc,
} from "./../../../UIComponents/Docs/Slider/SmallSteps";
import {
  View as CustomMarksView,
  source as CustomMarksSrc,
} from "./../../../UIComponents/Docs/Slider/CustomMarks";
import {
  View as SliderWithInputFieldView,
  source as SliderWithInputFieldSrc,
} from "./../../../UIComponents/Docs/Slider/SliderWithInputField";
import {
  View as ColorView,
  source as ColorSrc,
} from "./../../../UIComponents/Docs/Slider/Color";
import {
  View as MusicPlayerView,
  source as MusicPlayerSrc,
} from "./../../../UIComponents/Docs/Slider/MusicPlayer";
import { sliderProps } from "../../Api/PropsApi/constants";

export const sliderContent = [
  { label: "#Range Selection", href: "#range-selection" },
  { label: "#Slider Sizes", href: "#slider-sizes" },
  { label: "#Step Sliders", href: "#step-sliders" },
  { label: "#Fine-Tuned Steps", href: "#fine-tuned-steps" },
  { label: "#Custom Marks", href: "#custom-marks" },
  { label: "#Slider Input", href: "#slider-input" },
  { label: "#Slider Colors", href: "#slider-colors" },
  { label: "#Audio Control", href: "#audio-control" },
  { label: "<Slider />", href: "#slider-api" },
];

export const sliderSections = [
  {
    id: "range-selection",
    title: "#Range Selection",
    subtitle:
      "Range sliders help users pick a value within a continuous spectrum.",
    source: ContinuousSlidersSrc,
    view: ContinuousSlidersView,
  },
  {
    id: "slider-sizes",
    title: "#Slider Sizes",
    subtitle: `Use the size prop to adjust the slider's size, such as small or large.`,
    source: SizesSrc,
    view: SizesView,
  },
  {
    id: "step-sliders",
    title: "#Step Sliders",
    subtitle:
      "Step sliders allow users to move in defined increments by referencing a value indicator.",
    source: DiscreteSlidersSrc,
    view: DiscreteSlidersView,
  },
  {
    id: "fine-tuned-steps",
    title: "#Fine-Tuned Steps",
    subtitle: `Adjust the slider's step increment for more granular control.`,
    source: SmallStepsSrc,
    view: SmallStepsView,
  },
  {
    id: "custom-marks",
    title: "#Custom Marks",
    subtitle: `Customize the marks on the slider with a provided array of options.`,
    source: CustomMarksSrc,
    view: CustomMarksView,
  },
  {
    id: "slider-input",
    title: "#Slider Input",
    subtitle: "This example integrates an input field to set discrete values.",
    source: SliderWithInputFieldSrc,
    view: SliderWithInputFieldView,
  },
  {
    id: "slider-colors",
    title: "#Slider Colors",
    subtitle: "Customize the color of the slider to match your theme.",
    source: ColorSrc,
    view: ColorView,
  },
  {
    id: "audio-control",
    title: "#Audio Control",
    subtitle: "Use a slider as part of a music or media player interface.",
    source: MusicPlayerSrc,
    view: MusicPlayerView,
  },
  {
    id: "slider-api",
    title: "<Slider />",
    isApi: true,
    componentProps: sliderProps,
  },
];
