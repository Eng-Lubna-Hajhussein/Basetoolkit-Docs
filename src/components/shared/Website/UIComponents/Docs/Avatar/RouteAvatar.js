import DocPage from "../../../../../sharedUI/DocPage/DocPage";
import {
  avatarSections,
  avatarContent,
} from "./../../constants/Avatar";

function RouteAvatar() {
  return (
    <DocPage
      content={avatarContent}
      sections={avatarSections}
      title="Avatar"
      description="Avatars are commonly used across interfaces, appearing in various elements like tables and menus to represent users or objects visually."
    />
  );
}

export default RouteAvatar;
