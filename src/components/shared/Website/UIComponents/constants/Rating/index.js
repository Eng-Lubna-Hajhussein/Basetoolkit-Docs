import {
  View as BasicRatingView,
  source as BasicRatingSrc,
} from "./../../../UIComponents/Docs/Rating/BasicRating";
import {
  View as RatingPrecisionView,
  source as RatingPrecisionSrc,
} from "./../../../UIComponents/Docs/Rating/RatingPrecision";
import {
  View as FeedbackLabelView,
  source as FeedbackLabelSrc,
} from "./../../../UIComponents/Docs/Rating/FeedbackLabel";
import {
  View as SizesView,
  source as SizesSrc,
} from "./../../../UIComponents/Docs/Rating/Sizes";
import {
  View as CustomizationView,
  source as CustomizationSrc,
} from "./../../../UIComponents/Docs/Rating/Customization";
import { ratingProps } from "../../Api/PropsApi/constants";

export const ratingContent = [
  { label: "#Basic rating", href: "#basic-rating" },
  { label: "#Precision Control", href: "#precision-control" },
  { label: "#Feedback Display", href: "#feedback-display" },
  { label: "#Size Variants", href: "#size-variants" },
  { label: "#Custom Icons", href: "#custom-icons" },
  { label: "<Rating />", href: "#rating-api" },
];

export const ratingSections = [
  {
    id: "basic-rating",
    title: "#Basic rating",
    subtitle: "A simple example of rating functionality.",
    source: BasicRatingSrc,
    view: BasicRatingView,
  },
  {
    id: "precision-control",
    title: "#Precision Control",
    subtitle: "Adjust the precision of rating with the precision prop.",
    source: RatingPrecisionSrc,
    view: RatingPrecisionView,
  },
  {
    id: "feedback-display",
    title: "#Feedback Display",
    subtitle: "Show a label based on the selected rating value.",
    source: FeedbackLabelSrc,
    view: FeedbackLabelView,
  },
  {
    id: "size-variants",
    title: "#Size Variants",
    subtitle: "Control the size of the rating with the size prop.",
    source: SizesSrc,
    view: SizesView,
  },
  {
    id: "custom-icons",
    title: "#Custom Icons",
    subtitle: "Examples of using custom icons for the rating component.",
    source: CustomizationSrc,
    view: CustomizationView,
  },
  {
    id: "rating-api",
    title: "<Rating />",
    isApi: true,
    componentProps: ratingProps,
  },
];
