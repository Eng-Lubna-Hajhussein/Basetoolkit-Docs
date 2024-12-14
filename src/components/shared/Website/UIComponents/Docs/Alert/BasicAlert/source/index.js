export const source = `
import * as React from "react";
import { Alert, SvgIcon } from "@basetoolkit/ui";

export default function SimpleAlert() {
  return (
    <Alert icon={<SvgIcon icon="check" color="success" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
  );
}
`;
