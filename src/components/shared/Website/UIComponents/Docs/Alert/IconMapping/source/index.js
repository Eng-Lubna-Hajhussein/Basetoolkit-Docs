export const source = `
import * as React from 'react';
import { Alert,Stack,SvgIcon } from '@basetoolkit/ui';

export default function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<SvgIcon icon='check'/>} severity="success">
        This success Alert has a custom icon.
      </Alert>
      <Alert icon={false} severity="success">
        This success Alert has no icon.
      </Alert>
      <Alert
        iconMapping={{
          success: <SvgIcon icon='check_circle_outline'/>,
        }}
      >
        This success Alert uses \`iconMapping\` to override the default icon.
      </Alert>
    </Stack>
  );
}
`;
