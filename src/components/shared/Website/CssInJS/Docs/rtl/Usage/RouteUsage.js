import DocPage from "../../../../../../sharedUI/DocPage/DocPage";
import { rtlSections, rtlContent } from "./../../../constants/RTL";

function RouteUsage() {
  return (
    <DocPage
      content={rtlContent}
      sections={rtlSections}
      title="rtlPlugin & prefixer"
      description={
        <>
          The rtlPlugin enables Right-to-Left (RTL) support by reversing key CSS
          properties such as margin, padding, float, and text-align. It adapts
          nested rules and media queries for RTL compatibility. Used in the
          cssInjection basetoolkit HOC, this plugin auto-flips styles in RTL
          mode, streamlining RTL theming.
          <br />
          <br />
          The prefixer function automatically adds browser-specific prefixes to
          CSS properties for compatibility, covering properties like animation,
          transform, and user-select. It identifies properties needing prefixes
          in the CSS string and appends them accordingly. Used in the
          cssInjection basetoolkit HOC, prefixer ensures that styles applied
          through the HOC render consistently across browsers.
        </>
      }
    />
  );
}

export default RouteUsage;
