import {
  View as ImageAvatarsView,
  source as ImageAvatarsSrc,
} from "./../../../UIComponents/Docs/Avatar/ImageAvatars";
import {
  View as LetterAvatarsView,
  source as LetterAvatarsSrc,
} from "./../../../UIComponents/Docs/Avatar/LetterAvatars";
import {
  View as ColorsView,
  source as ColorsSrc,
} from "./../../../UIComponents/Docs/Avatar/Colors";
import {
  View as SizesView,
  source as SizesSrc,
} from "./../../../UIComponents/Docs/Avatar/Sizes";
import {
  View as IconAvatarsView,
  source as IconAvatarsSrc,
} from "./../../../UIComponents/Docs/Avatar/IconAvatars";
import {
  View as VariantsView,
  source as VariantsSrc,
} from "./../../../UIComponents/Docs/Avatar/Variants";
import {
  View as FallbacksView,
  source as FallbacksSrc,
} from "./../../../UIComponents/Docs/Avatar/Fallbacks";
import {
  View as GroupedView,
  source as GroupedSrc,
} from "./../../../UIComponents/Docs/Avatar/Grouped";
import {
  View as TotalAvatarsView,
  source as TotalAvatarsSrc,
} from "./../../../UIComponents/Docs/Avatar/TotalAvatars";
import {
  View as CustomSurplusView,
  source as CustomSurplusSrc,
} from "./../../../UIComponents/Docs/Avatar/CustomSurplus";
import {
  View as WithBadgeView,
  source as WithBadgeSrc,
} from "./../../../UIComponents/Docs/Avatar/WithBadge";
import { avatarGroupProps, avatarProps, badgeProps } from "../../Api/PropsApi/constants";

export const avatarContent = [
    { label: "#Image Avatar", href: "#image-avatar" },
    { label: "#Letter Avatar", href: "#letter-avatar" },
    { label: "#Avatar Colors", href: "#avatar-colors" },
    { label: "#Avatar Sizes", href: "#avatar-sizes" },
    { label: "#Icon Avatar", href: "#icon-avatar" },
    { label: "#Avatar Variants", href: "#avatar-variants" },
    { label: "#Image Fallback", href: "#image-fallback" },
    { label: "#Grouped Avatars", href: "#grouped-avatars" },
    { label: "#Total Avatars", href: "#total-avatars" },
    { label: "#Custom Surplus", href: "#custom-surplus" },
    { label: "#Avatar Customization", href: "#avatar-customization" },
    { label: "<Avatar />", href: "#avatar-api" },
    { label: "<AvatarGroup />", href: "#avatar-group-api" },
    { label: "<Badge />", href: "#badge-api" },
  ];
  
  export const avatarSections = [
    {
      id: "image-avatar",
      title: "#Image Avatar",
      subtitle: "Create avatars with images using the src or srcSet props.",
      source: ImageAvatarsSrc,
      view: ImageAvatarsView,
    },
    {
      id: "letter-avatar",
      title: "#Letter Avatar",
      subtitle: "Use a string as children to display letter avatars.",
      source: LetterAvatarsSrc,
      view: LetterAvatarsView,
    },
    {
      id: "avatar-colors",
      title: "#Avatar Colors",
      subtitle: "Apply different background colors to avatars dynamically.",
      source: ColorsSrc,
      view: ColorsView,
    },
    {
      id: "avatar-sizes",
      title: "#Avatar Sizes",
      subtitle: "Adjust the avatar size using CSS properties for width and height.",
      source: SizesSrc,
      view: SizesView,
    },
    {
      id: "icon-avatar",
      title: "#Icon Avatar",
      subtitle: "Use icons as avatars by passing an icon as children.",
      source: IconAvatarsSrc,
      view: IconAvatarsView,
    },
    {
      id: "avatar-variants",
      title: "#Avatar Variants",
      subtitle: "Switch between square or rounded avatars using the variant prop.",
      source: VariantsSrc,
      view: VariantsView,
    },
    {
      id: "image-fallback",
      title: "#Image Fallback",
      subtitle: "Fallback to children, alt text, or an icon if the image fails.",
      source: FallbacksSrc,
      view: FallbacksView,
    },
    {
      id: "grouped-avatars",
      title: "#Grouped Avatars",
      subtitle: "Stack multiple avatars using the AvatarGroup component.",
      source: GroupedSrc,
      view: GroupedView,
    },
    {
      id: "total-avatars",
      title: "#Total Avatars",
      subtitle: "Control the number of avatars displayed with the total prop.",
      source: TotalAvatarsSrc,
      view: TotalAvatarsView,
    },
    {
      id: "custom-surplus",
      title: "#Custom Surplus",
      subtitle: "Customize the surplus avatar using the renderSurplus callback.",
      source: CustomSurplusSrc,
      view: CustomSurplusView,
    },
    {
      id: "avatar-customization",
      title: "#Avatar Customization",
      subtitle: "An example of customizing avatars with a badge.",
      source: WithBadgeSrc,
      view: WithBadgeView,
    },
    {
      id: "avatar-api",
      title: "<Avatar />",
      isApi: true,
      componentProps: avatarProps,
    },
    {
      id: "avatar-group-api",
      title: "<AvatarGroup />",
      isApi: true,
      componentProps: avatarGroupProps,
    },
    {
      id: "badge-api",
      title: "<Badge />",
      isApi: true,
      componentProps: badgeProps,
    },
  ];
  
