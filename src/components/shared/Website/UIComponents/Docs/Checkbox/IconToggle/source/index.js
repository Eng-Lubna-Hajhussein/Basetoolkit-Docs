export const source = `
import React from "react";
import { Checkbox, SvgIcon } from "@basetoolkit/ui";

const IconToggle = () => {
  return (
    <div>
      <Checkbox
        icon={<SvgIcon icon="star_border" />}
        checkedIcon={<SvgIcon icon="star" />}
      />
      <Checkbox
        icon={<SvgIcon icon="favorite_border" />}
        checkedIcon={<SvgIcon icon="favorite" />}
        defaultChecked
      />
      <Checkbox
        icon={<SvgIcon icon="bookmark_border" />}
        checkedIcon={<SvgIcon icon="bookmark" />}
      />
      <Checkbox
        icon={<SvgIcon icon="home" />}
        checkedIcon={<SvgIcon icon="home" variant="filled" />}
      />
    </div>
  );
};

export default IconToggle;
`;
