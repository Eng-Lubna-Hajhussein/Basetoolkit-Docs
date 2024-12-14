import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import { iconsSections, iconsContent } from "./../../constants/Icons";

function RouteIcons() {
  return (
    <DocPage
      content={iconsContent}
      sections={iconsSections}
      title="SvgIcon"
      description="The SvgIcon component in BaseToolkit offers versatile icon rendering with styling options like filled, outlined, round, and sharp variants. Integrated with Google Material Icons, it supports custom colors, sizes, and system props, allowing seamless integration across themes for consistent, adaptable designs."
    />
  );
}

export default RouteIcons;
