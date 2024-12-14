import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  SvgIcon,
} from "@basetoolkit/ui";

const BasicSelection = () => {
  return (
    <FormGroup row>
      <FormControlLabel label="Checked" control={<Checkbox defaultChecked />} />
      <FormControlLabel label="Unchecked" control={<Checkbox />} />
      <FormControlLabel label="Disabled" control={<Checkbox disabled />} />
      <FormControlLabel
        label="Disabled Checked"
        control={<Checkbox disabled defaultChecked />}
      />
      <FormControlLabel
        label="Read Only"
        control={<Checkbox readOnly defaultChecked />}
      />
      <FormControlLabel
        label="Custom"
        control={
          <Checkbox
            icon={<SvgIcon icon="favorite_border" />}
            checkedIcon={<SvgIcon icon="favorite" />}
            defaultChecked
          />
        }
      />
    </FormGroup>
  );
};

export default BasicSelection;
