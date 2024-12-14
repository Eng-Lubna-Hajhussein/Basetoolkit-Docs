import * as React from "react";
import { Stack, SvgIcon, Switch } from "@basetoolkit/ui";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Customization() {
  return (
    <Stack direction={"row"} spacing={2} alignItems="center">
      <Switch
        size="large"
        {...label}
        icon={<SvgIcon icon="dark_mode" color="#000" variant="filled" />}
        checkedIcon={<SvgIcon icon="light_mode" color="#fff" variant="filled" />}
        defaultChecked
        color="#000"
      />
       <Switch
        {...label}
        icon={<SvgIcon icon="dark_mode" color="#000" variant="filled" fontSize={15} />}
        checkedIcon={<SvgIcon icon="light_mode" color="#fff" variant="filled" fontSize={15} />}
        defaultChecked
        color="#000"
      />
       <Switch
        size="small"
        {...label}
        icon={<SvgIcon icon="dark_mode" color="#000" variant="filled" fontSize={11} />}
        checkedIcon={<SvgIcon icon="light_mode" color="#fff" variant="filled" fontSize={11} />}
        defaultChecked
        color="#000"
      />
    </Stack>
  );
}
